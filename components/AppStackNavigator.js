import React from 'react';
import ContactList from '../screens/ContactList';
import {createStackNavigator} from 'react-navigation-stack';

export const AppStackNavigator = createStackNavigator({
   Contacts:{
       screen:ContactList,
       navigationOptions:{
           headerShown: false
       }
   }
})

