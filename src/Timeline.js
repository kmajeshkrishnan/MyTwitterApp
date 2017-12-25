import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import TabLayout from './Route.js';
import Footer from './Footer.js'
import {Icon} from 'native-base';


export default class Timeline extends Component<{}> {

  render() {
    return (
      <View style = {{flex:1}}>
        <View style={{backgroundColor:"#ffffff",flexDirection: 'row',justifyContent: 'flex-start',padding:10,alignItems:'center'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}  style={{backgroundColor:"transparent"}}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./profile-pic.png')}
            />
          </TouchableOpacity>
          <Text style={{color:'black',paddingLeft:15,fontWeight:'bold',fontSize:18}}>Home</Text>
        </View>
        <TabLayout navigation={this.props.navigation}/>
        <Footer/>

      </View>

    );
  }
}

Timeline.router = TabLayout.router;
