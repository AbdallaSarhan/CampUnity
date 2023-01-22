import {NavigationContainer} from '@react-navigation/native';
import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import AppStackNavigator from './app/navigationStacks/AppStackNavigator';
import {AuthProvider} from './app/hooks/useAuth';
import {StorageProvider} from './app/hooks/useStorage';
import {UserProvider} from './app/hooks/useUser';
import {ServiceProvider} from './app/hooks/useServices';
import {ProductProvider} from './app/hooks/useProducts';

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <AuthProvider>
          <StorageProvider>
            <ServiceProvider>
              <ProductProvider>
                <AppStackNavigator />
              </ProductProvider>
            </ServiceProvider>
          </StorageProvider>
        </AuthProvider>
      </UserProvider>
    </NavigationContainer>
  );
}
