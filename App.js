import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';

import Slider from '@react-native-community/slider';

import Sound from 'react-native-sound';

const streaming = "http://radio02.ferozo.com/proxy/ra02001292/?mp=/streamQueued";

const App = () => {
  var radio = new Sound(streaming, null);
  var radioIsActive = false;
  var radioStop = false;

  useEffect(() => {
    radio.setVolume(0.5);
  }, [])

  const playRadio = () => {
    if (radioIsActive === false && radioStop === false) {
      radio.play();
      radioIsActive = true;
      console.log(radioIsActive, radio._volume)
    }
  }

  const stopRadio = () => {
    radio.pause();
    radioIsActive = false;
    console.log(radioIsActive)
  }

  const handleVolumen = (value) => {
    radio.setVolume(value);
  }

  return (
    <SafeAreaView>
      <LinearGradient start={{ x: 0, y: 5 }} end={{ x: 5, y: 0 }} colors={['#f4f4f4', '#1f2221']} style={styles.gradient}>
        <Text style={styles.title}>Studio 91.9</Text>
        <View style={styles.imageContainer}>
          <Image
            resizeMode='cover'
            style={styles.image}
            source={require('./img/radioImage.png')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="play" onPress={() => playRadio()} />
          <Button title="stop" onPress={() => stopRadio()} />
        </View>
        <Slider
          minimumValue={0}
          maximumValue={1}
          value={0.5}
          onValueChange={(value) => handleVolumen(value)}
          thumbTintColor="white"
          minimumTrackTintColor="white"
          maximumTrackTintColor="white"
        />
      </LinearGradient>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40
  },
  image: {
    width: '80%',
    height: 300,
    borderRadius: 150,
    margin: 50
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'grey',
    width: '20%',
    height: 20,
    borderRadius: 40,
    margin: 5
  },
  gradient: {
    height: '100%',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: 'white'
  }
})

export default App;