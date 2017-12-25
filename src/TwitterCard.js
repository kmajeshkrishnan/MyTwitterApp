import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

export default class TwitterCard extends Component<{}> {

  render() {
    return (
      <View>
      <View style={{flexDirection:'row',padding:10}}>
              <View style={{flexDirection:'column',width:60}}>
                <Image
                      style={{width: 55, height: 55}}
                      source={require('./profile-pic.png')}
                  />
              </View>
              <View style={{flexDirection:'column' , flex:1}}>
                <Text style={{fontSize: 15,color:'black',fontWeight:'bold'}}>
                Smarter Every Day
                </Text>
                <Text style={{fontSize: 14,color:'black'}}>
                What do you call the game, and where are you from? 
                </Text>
                <View style={{height:170,width:275,backgroundColor:'#D7CCC8',marginTop:10,marginBottom:10,borderRadius:5}}/>
                <View style={{flexDirection:'row',justifyContent: 'flex-start'}}>
                  <View style={{flexDirection:'row',alignItems: 'center'}}>
                    <Icon name='comment' style={{fontSize:20}}/>
                    <Text style={{fontSize: 14,marginLeft:5}}>
                      24
                    </Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems: 'center',paddingLeft:25}}>
                    <Icon name='retweet' style={{fontSize:20}}/>
                    <Text style={{fontSize: 14,marginLeft:5}}>
                      24
                    </Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems: 'center',paddingLeft:25}}>
                    <Icon name='heart' style={{fontSize:20}}/>
                    <Text style={{fontSize: 14,marginLeft:5}}>
                      24
                    </Text>
                  </View>
                  <View style={{flexDirection:'row',alignItems: 'center',paddingLeft:25}}>
                    <Icon2 name='ios-mail-outline' style={{fontSize:20}}/>
                    <Text style={{fontSize: 14,marginLeft:5}}>
                      24
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style ={{borderBottomWidth: 1,borderBottomColor:'#E0E0E0'}}></Text>
            </View>

    );
  }
}
