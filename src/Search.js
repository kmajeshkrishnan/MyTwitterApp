import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import {
  TouchableHighlight,
  StyleSheet,
  Button
} from 'react-native';
import {Input,Item} from 'native-base';
import Icon1 from 'react-native-vector-icons/Feather';



export default class Search extends Component<{}> {

  render() {
    return (
      <Button title='Go to Search' onPress={() => this.props.navigation.navigate('SearchPopup')}/>
    );
  }
}


const styles = StyleSheet.create({
  searchCard: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    marginTop: 10,
  },
});

