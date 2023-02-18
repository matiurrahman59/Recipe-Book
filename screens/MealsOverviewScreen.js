import { useEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

// internal import
import { CATEGORIES, MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route, navigation }) => {
  // to get params value we can also use useRoute buldin react hook
  // const route = useRoute();
  // const id = route.params.categoryID;

  // read params value
  const catId = route.params.categoryID;

  // filter mealsItem by params value
  const disPlayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // useLayoutEffect(() => {
  useEffect(() => {
    // get category title by params value
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    // set navigation header title dynamically
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={disPlayedMeals} />;
};

export default MealsOverviewScreen;
