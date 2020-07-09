import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login/Index';
import Register from './pages/Register/Index';
import Home from './pages/Home/Index';
import Orcamentos from './pages/Orcamentos/Index';
import Sobre from './pages/Sobre/Sobre';
import Parceiros from './pages/Parceiros/Index';
import Detalhe from './pages/Detalhe/Index';
import Solicita from './pages/Solicita/Index';
import Perfil from './pages/Perfil/index';
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FacilitaPRO">
        <Stack.Screen name="FacilitaPRO"
          component={Login}
          options={{
            title: 'FacilitaPRO',
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
              backgroundColor: '#191919'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="Home"
          component={Home}
          options={{
            title: 'FacilitaPRO',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#191919'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="Orcamentos"
          component={Orcamentos}
          options={{
            title: 'Meus Orçamentos',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="Detalhe"
          component={Detalhe}
          options={{
            title: 'Detalhes do Serviço',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="Solicita"
          component={Solicita}
          options={{
            title: 'Solicitação',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="Sobre"
          component={Sobre}
          options={{
            title: 'Sobre Nós',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="Parceiros"
          component={Parceiros}
          options={{
            title: 'Nossos Parceiros',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTintColor: 'white'
          }}
        />
        <Stack.Screen name="Perfil"
          component={Perfil}
          options={{
            title: 'Perfil',
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

export default Routes;
