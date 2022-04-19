import {Platform} from 'react-native';
import HomeScreen from '../screen/home/HomeScreen';
import CaseScreen from '../screen/case/CaseScreen';
import AccountScreen from '../screen/account/AccountScreen';
import ProfileScreen from '../screen/profile/ProfileScreen';

export const tabs = [
  {
    name: 'Home',
    screen: HomeScreen,
    icon: Platform.OS === 'ios' ? 'ios-home-outline' : 'md-home-outline',
  },
  {
    name: 'Case',
    screen: CaseScreen,
    icon: Platform.OS === 'ios' ? 'ios-laptop-outline' : 'md-laptop-outline',
  },
  {
    name: 'Account',
    screen: AccountScreen,
    icon: Platform.OS === 'ios' ? 'ios-scan-outline' : 'md-scan-outline',
  },
  {
    name: 'Profile',
    screen: ProfileScreen,
    icon: Platform.OS === 'ios' ? 'ios-rose-outline' : 'md-rose-outline',
  },
];
