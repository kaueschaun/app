import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home/Index';
import Register from './src/pages/Register/Index';
import Service from './src/pages/Service/Index';
import Orcamentos from './src/pages/Orcamentos/Index';
import Sobre from './src/pages/Sobre/Sobre';
import Parceiros from './src/pages/Parceiros/Index';
import Detalhe from './src/pages/Detalhe/Index';
import Solicita from './src/pages/Solicita/Index';

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
        <Stack.Screen name="Service"
          component={Service}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
