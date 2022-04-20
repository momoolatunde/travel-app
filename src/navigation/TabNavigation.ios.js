import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicon} from '../base/icon';
import {tabs} from '../base/tabs';
import tw from 'twrnc';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [tw`bg-white`, {borderTopWidth: 0}],
      }}>
      {tabs.map(({name, icon, screen}) => {
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={screen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Ionicon
                    icon={icon}
                    size={28}
                    color="black"
                    style={focused ? tw`text-red-800` : tw`text-gray-500`}
                  />
                );
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
