import HomeScreen from '../screen/home/HomeScreen';
import CaseScreen from '../screen/case/CaseScreen';
import AccountScreen from '../screen/account/AccountScreen';
import ProfileScreen from '../screen/profile/ProfileScreen';

export const tabs = [
  {
    name: 'Home',
    screen: HomeScreen,
    icon: 'home',
  },
  {
    name: 'Case',
    screen: CaseScreen,
    icon: 'laptop',
  },
  {
    name: 'Account',
    screen: AccountScreen,
    icon: 'barchart',
  },
  {
    name: 'Profile',
    screen: ProfileScreen,
    icon: 'user',
  },
];
