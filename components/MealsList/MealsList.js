import { FlatList } from 'react-native';

// internal import
import MealItem from './MealItem';

const MealsList = ({ items }) => {
  const renderMealItem = (itemData) => <MealItem item={itemData.item} />;

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItem}
    />
  );
};

export default MealsList;
