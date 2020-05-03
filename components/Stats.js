import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Stats extends Component {
  state = {};

  render () {
    return (
      <View>
        <Text>Stats</Text>
      </View>
    );
  }
}

function mapStateToProps () {
  return {};
}

export default Stats;