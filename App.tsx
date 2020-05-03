import React from 'react';
import {Text, View} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import TabNav from './components/TabNav'
import Home from './components/Home'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import styles from './styles/appStyles'


const Stack = createStackNavigator();

function MainNavigator() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabNav} options={{
                title: 'Kdrama Bingo',
            }}/>

        </Stack.Navigator>
    );
}

export default class App extends React.Component {
  componentDidMount() {
    console.log('app loaded')
  }
  render() {
    return (
        <Provider store={createStore(reducer)}>
            <View style={styles.appContainer}>
                <NavigationContainer><MainNavigator/></NavigationContainer>
            </View>
        </Provider>
    )
  }
}