import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './home';
import Post from './post';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Post: {
      screen: Post,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
