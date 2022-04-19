import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Ionicon({icon, size, color}) {
  return <Ionicons name={icon} size={size} color={color} />;
}
