import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function AntDesignIcon({icon, size, color}) {
  return <AntDesign name={icon} size={size} color={color} />;
}

export function Ionicon({icon, size, color}) {
  return <Ionicons name={icon} size={size} color={color} />;
}
