import React, { useState } from 'react';
import { View, Text, Button, Modal, Alert } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

const Info = () => {

  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
    
  return (
    <View>
      <Text>Info Screen</Text>
      <Button
            title="Go to Home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Return"
            onPress={() => navigation.dispatch(StackActions.popToTop())}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => {
            Alert.alert("O modal foi fechado");
            setModal(!modal);
          }}
        >
          <View style={{margin: 20, backgroundColor: 'white',
          borderRadius: 20, padding: 35, alignItems: 'center'}}>
            <Text>Esse é um modal</Text>
            <Button
              title="Esconder Modal"
              onPress={() => setModal(!modal)}
            />
          </View>
        </Modal>
        <Button
          title="Mostrar Modal"
          onPress={() => setModal(true)}
        />

    </View>
  );
}
export default Info;