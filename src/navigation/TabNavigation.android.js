import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Ionicon} from '../base/icon';
import {tabs} from '../base/tabs';
import tw from 'twrnc';

export default function TabNavigator() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      barStyle={[tw`bg-white`, {borderTopWidth: 0}]}
      labeled={false}
      shifting={false}>
      {tabs.map(({name, icon, screen}) => {
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={screen}
            options={{
              tabBarIcon: () => {
                return <Ionicon icon={icon} size={24} color="black" />;
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
