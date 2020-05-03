import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
  state = {};

  render () {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}

function mapStateToProps () {
  return {};
}

export default Home;