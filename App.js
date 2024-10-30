import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [imageSource, setImageSource] = useState(require('./assets/favicon.png'));
  const [previousImageSource, setPreviousImageSource] = useState(require('./assets/favicon.png'));

  const changeImage = () => {
    const newImageSource = imageSource === require('./assets/favicon.png') 
      ? require('./assets/icon.png') 
      : require('./assets/favicon.png');
    setPreviousImageSource(imageSource);
    setImageSource(newImageSource);
  };

  return (
    <View style={styles.container}>
      <Text>Toca el Boton para cambiar la imagen</Text>
      <Image source={imageSource} style={{ width: 100, height: 100 }} />
      <Button title="Cambiar Imagen" onPress={changeImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});