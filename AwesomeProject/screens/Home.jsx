import axios from 'axios'
import React, { useCallback } from 'react'

import { StatusBar, 
  Alert, 
  Text, 
  View, 
  FlatList, 
  ActivityIndicator, 
  RefreshControl,
  TouchableOpacity, id, TextInput } from 'react-native';
import { Post } from '../components/post';


export const HomeScreen = ({ navigation}) => {
  const[items, setItems] = React.useState();
  const[isLoading, setIsLoading] = React.useState(true);

  // create useState, that handle input value

  const fetchPosts = useCallback(() => {
    setIsLoading(false); 
    axios.get('https://6445385c914c816083c8f706.mockapi.io/jhb')
    .then(({ data }) => {
      setItems(data);
    }).catch(err => {
      console.log(err);
      Alert.alert('Ошибка', 'Не удалось получить статьи');
    }).finally(() => { 
      setIsLoading(false);
    });
  }, [setIsLoading, setItems]);

  React.useEffect(() => {
    fetchPosts()}, []);

    const handleInput = (text: string) => {
        // handle Input
    }


  if (isLoading) {
    return  (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <TextInput value={} onChangeText={handleInput} />
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList 
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', { item })}>
            <Post title={item.title} image={item.image} createdAt={item.createdAt} />
            </TouchableOpacity>
        )}
      />
      <StatusBar theme="auto" />
    </View>
  );
}

