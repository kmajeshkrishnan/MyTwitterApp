import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
class Sidebar extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{padding:10,paddingLeft:20}}>
             <Image
                style={{width: 55, height: 55}}
                source={require('./profile-pic.png')}
             />
            <View style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center',paddingRight:10}}>
              <Text style={{fontWeight: 'bold',fontSize: 18,color:'black',paddingTop:5}}>
                Ajesh Krishnan K M 
              </Text>
              <Icon1 name='chevron-down' style={{fontSize:20,color:'#1da1f2',fontWeight:'bold'}}/>
            </View>
            <View >
              <Text>
              @kmajeshkrishnan
              </Text>
              <Text style={{paddingTop:10}}>
                <Text style={{fontWeight: "bold",color:'black'}}>690</Text>
                 <Text> Following    </Text>
                <Text style={{fontWeight: "bold",color:'black'}}>653</Text>
                <Text> Followers</Text>
              </Text>
            </View>
          </View>
          <Text style ={{borderBottomWidth: 1,borderBottomColor:'#E0E0E0'}}></Text>
          <TouchableOpacity style={styles.row} >
            <Icon name="person-outline" style={{color:'#BDBDBD',fontSize:30}} />
             <Text style={{fontSize: 17,marginLeft:15,color:'black'}}>
              Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row} >
            <Icon2 name="md-list-box" style={{color:'#BDBDBD',fontSize:30}} />
             <Text style={{fontSize: 17,marginLeft:15,color:'black'}}>
              Lists
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row} >
            <Icon name="flash-on" style={{color:'#BDBDBD',fontSize:30}} />
             <Text style={{fontSize: 17,marginLeft:15,color:'black'}}>
              Moments
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row} >
            <Icon name="content-copy" style={{color:'#BDBDBD',fontSize:30}} />
             <Text style={{fontSize: 17,marginLeft:15,color:'black'}}>
              Highlights
            </Text>
          </TouchableOpacity>
          <Text style ={{borderBottomWidth: 1,borderBottomColor:'#E0E0E0'}}></Text>
          <TouchableOpacity style = {styles.row}>
            <Text style={{fontSize: 17,color:'black'}}>
              Settings and Privacy
            </Text>
          </TouchableOpacity>
           <TouchableOpacity style = {styles.row}>
            <Text style={{fontSize: 17,color:'black'}}>
              Help Centre
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <Text style ={{borderBottomWidth: 1,borderBottomColor:'#E0E0E0'}}></Text>
        <View style = {{flexDirection: 'row',justifyContent:'space-between',padding:10}}>
            <Icon1 name="moon" style={{color:'#1da1f2',fontSize:30}} />
            <Icon3 name="qrcode" style={{color:'#1da1f2',fontSize:30}} />
        </View>
      </View>
    );
  }
}


Sidebar.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 12,
    alignItems: 'center',
    paddingLeft: 20,
  },
});

export default Sidebar;
