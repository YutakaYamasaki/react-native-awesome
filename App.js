import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';


export default class App extends React.Component {
  render(){
    const HomeStack = createStackNavigator({
        home: { screen: HomeScreen },
        detail: { screen: DetailScreen }
    })
    const MainTab = createBottomTabNavigator({
          homeStack: { screen: HomeStack },
          addStack: { screen:AddScreen },
          profileStack: { screen: ProfileScreen }
        })
    const NavigatorTab = createAppContainer(
      createSwitchNavigator({
        welcome: { screen: WelcomeScreen },
        main: { screen: MainTab }
        })
      
    )
  return (
    <View style={styles.container}>
      <NavigatorTab />
      {/* <HomeScreen /> */}
    </View>
  );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
