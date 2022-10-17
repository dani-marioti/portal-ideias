import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

class Idea extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <Text>IDEIA</Text>
                <Text>Enviar idea</Text>
                <Button onPress={() => this.props.navigation.goBack()} title='Voltar'>
                </Button>

            </View>
        );
    }
}

export default Idea;