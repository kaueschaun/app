import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home/Index';
import Login from './src/pages/Login/Index';
import Register from './src/pages/Register/Index';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FacilitaPRO">
        <Stack.Screen name="FacilitaPRO"
          component={Home}
          options={{
            title: 'FacilitaPRO',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="Register"
          component={Register}
          options={{
            title: 'Cadastro',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
