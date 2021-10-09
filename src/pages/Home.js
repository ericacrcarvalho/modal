import React from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  return (
    <View>
        <Text>Home Screen</Text>
        <Button
            title="Go to Contact"
            onPress={() => navigation.navigate("Contact")}
        />
        <Button
            title="Go to Info"
            onPress={() => navigation.navigate("Info")}
        />
        <Button
            title="Go to Settings"
            onPress={() => navigation.navigate("Settings")}
        />
    </View>
  );
}
export default Home;