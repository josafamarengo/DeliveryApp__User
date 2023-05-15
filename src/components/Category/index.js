import { View, Text, Image } from 'react-native'
import React from 'react';

export default function index({color,category, image}) {
  return (
    <View
        style={{
            alignItems: 'center',
            marginHorizontal: 15,
            paddingVertical: 10,
        }}
    >
        <View
            style={{
                height: 60,
                width: 90,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Image 
                source={{ uri: image}}
                style={{
                    width: 80,
                    height: 80,
                    resizeMode: 'contain',
                    zIndex: 1,
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: color,
                    width: 90,
                    height: '40%',
                    borderRadius: 5,
                }}
            />
        </View>
      <Text
        style={{
            fontSize: 13,
            marginTop: 5,
        }}
      >{category}</Text>
    </View>
  )
}