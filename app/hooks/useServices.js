import React, {useState, useContext, createContext} from 'react';
import firestore from '@react-native-firebase/firestore';

const ServiceContext = createContext({});

export const ServiceProvider = ({children}) => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [usersServices, setUsersServices] = useState([]);

  const getAllServices = () => {
    const subscriber = firestore()
      .collection('services')
      .onSnapshot(querySnapshot => {
        const services = [];

        querySnapshot.forEach(documentSnapshot => {
          services.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setServices(services);

        console.log(services);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  };

  const isUsersService = (item, username) => {
    if (item.username === username) {
      return true;
    }

    return false;
  };

  const getUsersProfileServices = username => {
    const usersServices = services.filter(item =>
      isUsersService(item, username),
    );

    setUsersServices(usersServices);
    // console.log(usersServices);
    // console.log(services);
    console.log(username);
  };

  const getStoreServices = username => {
    console.log('Services ' + services);
    const usersServices = services.filter(item =>
      isUsersService(item, username),
    );

    setFilteredServices(usersServices);
    console.log('filtiered services : ' + filteredServices);
    // console.log(usersServices);
    // console.log(services);
    console.log(username);
  };
  return (
    <ServiceContext.Provider
      value={{
        getAllServices,
        services,
        getStoreServices,
        filteredServices,
        usersServices,
        getUsersProfileServices,
      }}>
      {children}
    </ServiceContext.Provider>
  );
};

export default function useServices() {
  return useContext(ServiceContext);
}
