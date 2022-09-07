import React, { useState } from 'react';
import { View,Text, TextInput } from 'react-native';
import Estilo from './estilo';

export default props => {
    const [nome, setName] = useState('teste')
    return (
        <View>
            <TextInput placeholder="Digite seu Nome" value={nome}
                onChangeText={teste => setName(teste)}
            >
            </TextInput>
        </View>
    )
}