import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import Estilo from './estilo';

export default ({inicial=100, passo=1})  => {
    //let numero = props.inicial;


    let [numero, setNumero] = useState(inicial); 

    const inc = () => setNumero(numero+passo);
    const dec =  () => setNumero(numero-passo);

    
    return (
        <>
            <Text>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>    
    )
}