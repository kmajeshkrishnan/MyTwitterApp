
import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {Text,Image,View,ScrollView,TouchableHighlight,StyleSheet,Button} from 'react-native';
import {Fab,Item,Input} from 'native-base';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import TwitterCard from './TwitterCard';
import Search from './Search';

class HomeScreen extends Component<{}> {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon2 name='md-home' style={{color:tintColor,fontSize:25}}/>
    ),
  };
  render() {
  	return(
  		<View style={{flex:1}}>
	  		<View style={{flex:1}}>
		  		<ScrollView>
			  		<TwitterCard/>
			  		<TwitterCard/>
			  		<TwitterCard/>
			  		<TwitterCard/>
		  		</ScrollView>
		  		<Fab position="bottomRight" style={{ backgroundColor: '#1da1f2' }}><Icon2 name="logo-twitter" style={{color:'#ffffff'}}/></Fab>  
		  	</View>
  		</View>
  	);
  }
}

class AllContactsScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon1 name='mail' style={{color:tintColor,fontSize:25}}/>
    ),
  };
  render() {
    return <Text>Contacts</Text>
  }
}


class SearchScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon1 name='search' style={{color:tintColor,fontSize:25}}/>
    ),
  };

  render() {
  	return(
  		<Button title='Go to Search' onPress={() => this.props.navigation.navigate('SearchPopup')}/>
  		// <Search/>
    );
  }
}


class NotificationScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon1 name='bell' style={{color:tintColor,fontSize:25}}/>
    ),
  };
  render() {
    return <Text>Notification</Text>
  }
}


const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Search: { screen: SearchScreen },
  Notification: { screen: NotificationScreen },
  Contacts: { screen: AllContactsScreen },
},{
  animationEnabled: true,
  swipeEnabled:true,
  tabBarOptions: {
    activeTintColor: '#1da1f2',
    inactiveTintColor:'#BDBDBD',
    showIcon:true,
    showLabel:false,
    style: {
    	backgroundColor: '#ffffff',
    },
    indicatorStyle: {
    	backgroundColor: '#1da1f2',
    },
  }
});




export default MainScreenNavigator;