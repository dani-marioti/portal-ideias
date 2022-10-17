import React, { Component } from 'react';
import { Image, Text, Button, View, TouchableOpacity } from 'react-native';
import { homeStyle } from './styles';

class Home extends Component {

  goToIdea = () => {
    this.props.navigation.navigate('Idea')
  }

  goToLogin = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Image source={require('../../assets/Img/logo.png')} />
        <TouchableOpacity style={homeStyle.button}>
          <Text onPress={this.goToIdea} style={homeStyle.buttonText}>Enviar Ideia</Text>
        </TouchableOpacity>
        <Button
          className="mt-4 full" type="button" variant="link" onPress={this.goToLogin} title='Entrar'>
        </Button>
      </View>
    );
  }
}

export default Home;