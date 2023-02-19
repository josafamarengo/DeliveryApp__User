import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';

export default function index({onPress}) {
  return (
    <TouchableOpacity
        style={{
            flexDirection: 'row',
            backgroundColor: '#e7e7e7',
            margin: 10,
            borderRadius: 5,
            padding: 10,
            alignItems: 'center',
        }}
        onPress={onPress}
    >
        <Feather 
            name="search" 
            size={16} 
            color="red"
            style={{
                marginHorizontal: 10,
            }}
        />
        <Text
            style={{
                color: 'grey',
                marginLeft: 10,
            }}
        >O que você procura?</Text>
    </TouchableOpacity>
  )
}