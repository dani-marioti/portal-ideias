import React, { Component } from 'react';
import { Text, Button, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { ideaStyle } from './styles';

class Idea extends Component {
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View>
                    <Text style={ideaStyle.ideaText}>Compartilhe sua ideia</Text>
                </View>
                <View style={ideaStyle.idea__form}>
                    <TextInput style={ideaStyle.idea__input} placeholder='Qual sua ideia?' />
                    <TextInput style={ideaStyle.idea__inputDescription} placeholder='Descreva como seria este recurso' />
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        <TextInput style={ideaStyle.name} placeholder='Nome' />
                        <TextInput style={ideaStyle.email} placeholder='E-mail' />
                    </View>
                    <TouchableOpacity style={ideaStyle.idea__button}>
                        <Text style={ideaStyle.idea__buttonText}>Enviar ideia</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

export default Idea;