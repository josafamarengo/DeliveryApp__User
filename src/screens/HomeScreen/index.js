import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, ScrollView, Modal, View } from 'react-native';

import restaurants from '../../../assets/data/restaurants';
import categories from '../../../assets/data/categories';

import RestaurantItem from '../../components/RestaurantItem';
import Category from '../../components/Category';
import PromotionalBanner from '../../components/PromotionalBanner';
import Search from '../../components/Search';
import SearchScreen from '../SearchScreen';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
      vertical
    >
      <View style={{marginTop: 15,}}>
        <Search onPress={() => setModalVisible(true)} />
      </View>

      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Category color={item.color} category={item.name} image={item.img} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ padding: 10 }}
      >
        <PromotionalBanner img={restaurants[0].image} />
        <PromotionalBanner img={restaurants[1].image} />
        <PromotionalBanner img={restaurants[2].image} />
      </ScrollView>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          margin: 10,
        }}
      >
        Lojas
      </Text>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
      <Modal visible={modalVisible}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <SearchScreen onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
