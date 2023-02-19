import { View, Image } from 'react-native'
import React from 'react';

export default function index({img}) {
  return (
    <View>
        <Image
            source={{ uri: img }}
            style={{
                width: 300,
                height: 150,
                resizeMode: 'cover',
                borderRadius: 15,
                marginVertical: 10,
                marginRight: 10,
            }}
        />
    </View>
  )
}