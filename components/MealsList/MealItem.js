import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MealItem = ({ item }) => {
  const navigation = useNavigation();

  // navigate to meal details screen with selected data
  const selectMealHandler = () => {
    navigation.navigate('MealsDetails', {
      mealId: item.id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealHandler}
      >
        <View>
          <Image
            style={styles.image}
            source={{
              uri: item.imageUrl,
            }}
          />
          <Text style={styles.mainTitle}>{item.title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{item.duration}m</Text>
          <Text style={styles.title}>{item.complexity.toUpperCase()}</Text>
          <Text style={styles.title}>{item.affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 20,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    fontSize: 16,
    opacity: 0.7,
    marginHorizontal: 4,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
