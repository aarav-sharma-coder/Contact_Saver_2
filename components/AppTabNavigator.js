import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MyBackupScreen from '../screens/MyBackupScreen';
import BackupScreen from '../screens/BackupScreen';



export const AppTabNavigator = createBottomTabNavigator({
  Backup : {
    screen: BackupScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/backups.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Backup",
    }
  },
  History:{
    screen: MyBackupScreen,
    navigationOptions:{
      tabBarIcon:<Image source={require("../assets/MyBackups.png")} style = {{width:20,height:20}}/>,
      tabBarLabel: "Bckup History"
    }
  }

});