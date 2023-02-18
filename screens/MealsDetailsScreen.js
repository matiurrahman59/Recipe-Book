// internal import
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

const MealsDetailsScreen = ({ route, navigation }) => {
  // read params value
  const Mealid = route.params.mealId;
  // find mealItem by id
  const Meal = MEALS.find((item) => item.id === Mealid);

  return <MealDetails item={Meal} navigation={navigation} MealID={Mealid} />;
};

export default MealsDetailsScreen;
