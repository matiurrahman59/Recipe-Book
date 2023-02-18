import { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// internal import
import IconButton from './IconButton';
import RenderListItem from './RenderListItem';

// store
import { FavoritesContext } from '../store/context/favorites-context';

const MealDetails = ({ item, navigation }) => {
  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
    id,
  } = item;
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(id);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(id);
    } else {
      favoriteMealsCtx.addFavorite(id);
    }
  };

  // set favorite icon button to headerRight side
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color='white'
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View>
          <Text style={styles.mainTitle}>{title}</Text>
          <View style={styles.details}>
            <Text style={styles.text}>{duration}m</Text>
            <Text style={styles.text}>{complexity.toUpperCase()}</Text>
            <Text style={styles.text}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
        <RenderListItem title='Ingredients' mappedItem={ingredients} />
        <RenderListItem title='Steps' mappedItem={steps} />
      </View>
    </ScrollView>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 8,
    color: '#fff',
  },
  text: {
    fontSize: 16,
    marginHorizontal: 4,
    color: '#fff',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    borderTopWidth: 4,
    borderTopColor: '#897464',
  },
});
