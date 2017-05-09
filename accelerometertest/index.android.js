import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} from 'react-native';
import { SensorManager } from 'NativeModules';

export default class accelerometertest extends Component {
  constructor(props) {
     super(props);

     this.state = {
       xVal: 0,
       yVal: 0,
       zVal: 0,
       near: 0,
     };

    SensorManager.startAccelerometer(100);
     DeviceEventEmitter.addListener('Accelerometer', function (data) {
       this.setState({ xVal: data.x, yVal: data.y, zVal: data.z })
     }.bind(this));

    SensorManager.startProximity(100);
     DeviceEventEmitter.addListener('Proximity', function (data) {
       this.setState({ near: data.value })
     }.bind(this));
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>
            Distance: { this.state.near }
          </Text>
          <Text>
            X-axis: { this.state.xVal }
          </Text>
          <Text>
            Y-axis: { this.state.yVal }
          </Text>
          <Text>
            Z-axis: { this.state.zVal }
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('accelerometertest', () => accelerometertest);
