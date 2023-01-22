import React, {createContext, useContext, useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const StorageContext = createContext({});

export const StorageProvider = ({children}) => {
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  const saveService = async (title, description, price, image) => {
    console.log('image: ' + image);
    if (image) {
      const user = auth().currentUser;
      const userDoc = await firestore().collection('users').doc(user.uid).get();
      const filename = image.substring(image.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? image.replace('file://', '') : uri;
      setUploading(true);
      setTransferred(0);
      // const task = storage().ref(filename).putFile(uploadUri)
      const ref = storage().ref(filename);

      const task = ref.putFile(uploadUri);

      // set progress state
      task.on('state_changed', snapshot => {
        setTransferred(
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
        );
      });
      try {
        await task;
      } catch (e) {
        console.error(e);
      }

      const downloadURL = await ref.getDownloadURL();

      firestore()
        .collection('services')
        .doc(title)
        .set({
          uid: user.uid,
          title: title,
          description: description,
          price: price,
          serviceImage: downloadURL,
          userImage: user.photoURL,
          username: userDoc.get('username'),
          userBio: userDoc.get('userBio'),
        })
        .then(() => {
          setUploading(false);
          alert('Posted!');
        });
      //   const serviceDoc = firestore().doc(`services/${title}`);
      // firestore().runTransaction(async transaction => {
      //   transaction.update(userDoc, {
      //     profileImageRef: downloadURL,
      //   });
      // });

      console.log('downloadURL: ' + downloadURL);
    }
  };
  const saveProduct = async (title, description, price, image, category) => {
    console.log('image: ' + image);
    if (image) {
      const user = auth().currentUser;
      const userDoc = await firestore().collection('users').doc(user.uid).get();
      const filename = image.substring(image.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? image.replace('file://', '') : uri;
      setUploading(true);
      setTransferred(0);
      // const task = storage().ref(filename).putFile(uploadUri)
      const ref = storage().ref(filename);

      const task = ref.putFile(uploadUri);

      // set progress state
      task.on('state_changed', snapshot => {
        setTransferred(
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
        );
      });
      try {
        await task;
      } catch (e) {
        console.error(e);
      }

      const downloadURL = await ref.getDownloadURL();

      firestore()
        .collection('products')
        .doc(title)
        .set({
          uid: user.uid,
          title: title,
          description: description,
          price: price,
          productImage: downloadURL,
          userImage: user.photoURL,
          username: userDoc.get('username'),
          category: category,
          userBio: userDoc.get('userBio'),
        })
        .then(() => {
          setUploading(false);
          alert('Posted!');
        });

      console.log('downloadURL: ' + downloadURL);
    }
  };

  const completeProfile = async (image, phoneNumber, userBio) => {
    if (image) {
      const user = auth().currentUser;

      const filename = image.substring(image.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? image.replace('file://', '') : uri;
      setUploading(true);
      setTransferred(0);
      // const task = storage().ref(filename).putFile(uploadUri)

      const ref = storage().ref(filename);

      const task = ref.putFile(uploadUri);

      console.log('downloadURL: ' + downloadURL);
      // set progress state
      task.on('state_changed', snapshot => {
        setTransferred(
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
        );
      });
      try {
        await task;
      } catch (e) {
        console.error(e);
      }
      setUploading(false);

      const downloadURL = await ref.getDownloadURL();
      await user.updateProfile({
        photoURL: downloadURL,
        phoneNumber: phoneNumber,
      });
      firestore().collection('users').doc(user.uid).update({
        photoURL: downloadURL,
        phoneNumber: phoneNumber,
        userBio: userBio,
      });

      alert('Profile Saved!');

      // const userDoc = firestore().doc(`users/${user.uid}`);
      // firestore().runTransaction(async transaction => {
      //   transaction.update(userDoc, {
      //     profileImageRef: downloadURL,
      //   });
      // });
    }
  };
  const uploadProfileImage = async (image, setImage, phoneNumber) => {
    console.log('image: ' + image);
    if (image) {
      const user = auth().currentUser;

      const filename = image.substring(image.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? image.replace('file://', '') : uri;
      setUploading(true);
      setTransferred(0);
      // const task = storage().ref(filename).putFile(uploadUri)

      const ref = storage().ref(filename);

      const task = ref.putFile(uploadUri);

      console.log('downloadURL: ' + downloadURL);
      // set progress state
      task.on('state_changed', snapshot => {
        setTransferred(
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
        );
      });
      try {
        await task;
      } catch (e) {
        console.error(e);
      }
      setUploading(false);
      setImage(null);
      alert(
        'Photo uploaded!',
        'Your photo has been uploaded to Firebase Cloud Storage!',
      );

      const downloadURL = await ref.getDownloadURL();
      await user.updateProfile({
        photoURL: downloadURL,
        phoneNumber: phoneNumber,
      });
      // firestore().collection('users').doc(user.uid).set({
      //   photoURL: downloadURL,
      //   phoneNumber: phoneNumber,
      //   bio: bio,
      // });
      // const userDoc = firestore().doc(`users/${user.uid}`);
      // firestore().runTransaction(async transaction => {
      //   transaction.update(userDoc, {
      //     profileImageRef: downloadURL,
      //   });
      // });
    }
  };

  const pickImage = async setImage => {
    // No permissions request is necessary for launching the image library
    const options = {
      maxWidth: 250,
      maxHeight: 200,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    const result = await launchImageLibrary(options);
    if (result.didCancel) {
      console.log('Cancelled');
    } else {
      setImage(result.assets[0].uri);
      console.log(result.assets[0]);
    }
  };
  return (
    <StorageContext.Provider
      value={{
        pickImage,
        saveService,
        saveProduct,
        uploadProfileImage,
        transferred,
        uploading,
        completeProfile,
      }}>
      {children}
    </StorageContext.Provider>
  );
};

export default function useStorage() {
  return useContext(StorageContext);
}
