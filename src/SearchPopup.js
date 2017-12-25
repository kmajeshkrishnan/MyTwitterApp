import React, { Component } from 'react';
import {StackNavigator, NavigationActions} from 'react-navigation';
import {
  TouchableHighlight,
  StyleSheet,View,Text
} from 'react-native';
import {Input,Item} from 'native-base';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import Footer from './Footer'

export default class SearchPopup extends Component<{}> {

  render() {
    return (
      <View style = {{flex:1,flexDirection:'column',justifyContent:'space-between'}}>
          <View>
            <Item style={styles.searchCard} >
                <View>
                <Icon name="md-arrow-back" onPress={() => this.props.navigation.dispatch(NavigationActions.back())} style = {{marginLeft:20,fontSize:25,color:'#1da1f2'}}/>
                </View>
                <Input placeholder="Search Twitter" style = {{marginLeft:10}}/>
            </Item>
          </View>
        <Footer/>
      </View>
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
    elevation: 1,
    marginBottom: 5,
    marginTop: 2,
  },
});

