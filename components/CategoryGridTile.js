import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.container,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View>
          <Text style={[styles.title]}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
