import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesignIcon from '../base/icon';
import {tabs} from '../base/tabs';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      {tabs.map(({name, icon, screen}) => {
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={screen}
            options={{
              tabBarIcon: () => {
                return <AntDesignIcon icon={icon} size={32} color="black" />;
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
