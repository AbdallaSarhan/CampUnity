import react, {createContext, useContext, useState, useMemo} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {debounce} from 'lodash';

const UserContext = createContext({});

export const UserProvider = ({children}) => {
  const [available, setAvailable] = useState(null);
  const [invalid, setInvalid] = useState(null);
  const [username, setUsername] = useState('');
  const validateUsername = debounce(async username => {
    console.log(username);
    if (username.length >= 3 && username.length <= 20) {
      setInvalid(null);
      const usernameDoc = await firestore()
        .collection('usernames')
        .doc(username)
        .get();
      console.log(usernameDoc);
      const available = !usernameDoc.exists;
      setAvailable(available);
    } else {
      setAvailable(null);
      setInvalid(true);
    }
  }, 1000);
  const createUser = async username => {
    const user = auth().currentUser;

    console.log(user);

    const userDoc = firestore().doc(`users/${user.uid}`);
    const usernameDoc = firestore().doc(`usernames/${username}`);
    const batch = firestore().batch();
    batch.set(userDoc, {username});
    batch.set(usernameDoc, {uid: user.uid});
    await batch.commit();
    console.log('user added');

    // firestore().collection('users').add({
    //   username: 'hi',
    //   uid: '82093',
    // });
  };

  const memoedValue = useMemo(
    () => ({
      createUser,
      available,
      invalid,
      validateUsername,
      setUsername,
      username,
    }),
    [username, available, invalid],
  );

  return (
    <UserContext.Provider value={memoedValue}>{children}</UserContext.Provider>
  );
};

export default function useUser() {
  return useContext(UserContext);
}
