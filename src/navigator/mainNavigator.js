import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile57679Navigator from '../features/UserProfile57679/navigator';
import Maps57675Navigator from '../features/Maps57675/navigator';
import Add-Item57671Navigator from '../features/Add-Item57671/navigator';
import Maps57670Navigator from '../features/Maps57670/navigator';
import Dashboard2BlueprintNavigator from '../features/Dashboard2Blueprint/navigator';
import Dashboard1BlueprintNavigator from '../features/Dashboard1Blueprint/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile57679: { screen: UserProfile57679Navigator },
Maps57675: { screen: Maps57675Navigator },
Add-Item57671: { screen: Add-Item57671Navigator },
Maps57670: { screen: Maps57670Navigator },
Dashboard2Blueprint: { screen: Dashboard2BlueprintNavigator },
Dashboard1Blueprint: { screen: Dashboard1BlueprintNavigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
