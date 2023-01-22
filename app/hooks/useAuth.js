import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import useUser from './useUser';
// can have context for many things such as user or basket etc..
const AuthContext = createContext({
  /*Initial state */
});

// Higher order component
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [newUser, setNewUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const {createUser} = useUser();
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoadingInitial(false);
    });
    return unsubscribe;
  }, []);

  const handleLogin = (email, password) => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        console.log(userCredentials);
        const user = userCredentials.user;
        console.log(user);
      })
      .catch(error => alert(error.message))
      .finally(() => setLoading(false));
  };

  const handleSignUp = (username, email, password, fullName) => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async userCredentials => {
        console.log(userCredentials);
        const user = userCredentials.user;
        // add async await in order to get the name displayed in the app when it loads
        await user.updateProfile({
          displayName: fullName,
          // photoURL: null,
          // phoneNumber: null,
        });
        console.log(user);

        createUser(username);

        if (userCredentials.additionalUserInfo.isNewUser === true) {
          // open modal for inputing more user info

          setNewUser(true);
        }
      })
      .catch(error => alert(error.message))
      .finally(() => setLoading(false));
  };
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        setUser(null);
        navigation.navigate('LoginScreen');
      })
      .catch(error => alert(error.message));
  };

  // read about memo and caching
  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      handleLogin,
      handleSignUp,
      handleSignOut,
      newUser,
    }),
    [user, loading],
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
