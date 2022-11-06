import { FlatList, StyleSheet } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants';

export default function HomeScreen() {
  return (
      <FlatList 
        data={restaurants} 
        renderItem={({item}) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false} 
      />
  );
}

const styles = StyleSheet.create({});
