import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home'
import Stats from './Stats'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

class TabNav extends Component {

  render () {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            } else if (route.name === 'Stats') {
              iconName = focused ? 'ios-stats' : 'ios-stats';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#609c4f',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{
            tabBarLabel: 'Stats',
          }}
        />
      </Tab.Navigator>
    )
  }
}

export default TabNav;