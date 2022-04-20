import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Ionicon({icon, size, color, style}) {
  return <Ionicons name={icon} size={size} color={color} style={style} />;
}
