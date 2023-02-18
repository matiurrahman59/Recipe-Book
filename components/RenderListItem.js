import { View, Text, StyleSheet } from 'react-native';

const RenderListItem = ({ title, mappedItem }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.mainTitle, { color: '#A98C7E' }]}>{title}</Text>
      <View
        style={{
          width: '100%',
          borderTopWidth: 4,
          borderTopColor: '#A98C7E',
        }}
      >
        {mappedItem.map((itemName, i) => (
          <View
            key={i}
            style={{
              backgroundColor: '#DCB497',
              width: '100%',
              borderRadius: 10,
              marginTop: 8,
            }}
          >
            <Text
              style={{
                padding: 5,
                textAlign: 'center',
                color: '#443832',
                fontSize: 16,
              }}
            >
              {itemName}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RenderListItem;

const styles = StyleSheet.create({
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 8,
    color: '#fff',
  },

  container: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
