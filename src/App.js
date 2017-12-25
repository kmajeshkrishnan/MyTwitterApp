
import React from 'react';
import {DrawerNavigator  } from 'react-navigation';

import Timeline from './Timeline';
import SearchPopup from './SearchPopup';
import Search from './Search';
import Sidebar from './Sidebar';

// const DrawerContent = (props) => (
//   <View>
//     <View
//       style={{
//         backgroundColor: '#f50057',
//         height: 140,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <Text style={{ color: 'white', fontSize: 30 }}>
//         Header
//       </Text>
//     </View>
//     <DrawerItems {...props} />
//   </View>
// );


const DrawerNavigator_obj = DrawerNavigator({
    Timeline:{
      screen:Timeline,
    },
    Search:{
      screen:Search,
    },
    SearchPopup:{
      screen:SearchPopup,
    },
  },
  {
    contentComponent: props => <Sidebar {...props}/>,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth:300
  }
  );


export default DrawerNavigator_obj;

