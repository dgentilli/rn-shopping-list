import React, {useState} from 'react';
import {View, FlatList, Alert, StyleSheet} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const createUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
      c,
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };
  const [items, setItems] = useState([
    {id: createUUID(), text: 'Milk'},
    {id: createUUID(), text: 'Eggs'},
    {id: createUUID(), text: 'Bread'},
    {id: createUUID(), text: 'Juice'},
  ]);

  const addItem = (text) => {
    if (text.length > 0) {
      setItems((prevItems) => {
        return [{id: createUUID(), text}, ...prevItems];
      });
    } else {
      Alert.alert('Error', 'Oops, you forgot to enter an item.');
    }
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
