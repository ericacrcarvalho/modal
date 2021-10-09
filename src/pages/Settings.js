import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

const Settings = () => {

  const navigation = useNavigation();

  return (
    <View>
        <Text>Settings Screen</Text>
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Return"
            onPress={() => navigation.dispatch(StackActions.popToTop())}
        />
    </View>
  );
}
export default Settings;