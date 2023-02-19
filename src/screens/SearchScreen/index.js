import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import React from 'react';
import { Feather } from '@expo/vector-icons';

export default function index({onPress}) {
  return (
    <View>
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
            }}
        >
            <View
                style={{
                    width: '70%',
                    flexDirection: 'row',
                    backgroundColor: '#e0e0e0',
                    margin: 10,
                    borderRadius: 5,
                    padding: 10,
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2},
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                    elevation: 2,
                }}
            >
                <Feather 
                    name="search" 
                    size={16} 
                    color="red"
                    style={{
                        marginHorizontal: 10,
                    }}
                />
                <TextInput
                    placeholder="O que você procura?"
                    style={{
                        color: 'grey',
                        marginLeft: 10,
                    }}
                />
            </View>
            <TouchableOpacity
                style={{
                    marginHorizontal: 10,
                }}
                onPress={onPress}
            >
                <Text
                    style={{
                        color: 'red'
                    }}
                >
                    Cancelar
                </Text>
            </TouchableOpacity> 
        </View> 
        <Text
            style={{
                fontSize: 14,
                fontWeight: '600',
                marginHorizontal: 15,
            }}
        >
            Pesquisas recentes
        </Text> 
    </View>
  )
}