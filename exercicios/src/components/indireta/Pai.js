import React, { useState } from 'react';
import {Text} from 'react-native';
import Filho from './Filho';
import Estilo from '../estilo';

export default props => {
    const [num, setNum] = useState(0);

    function exibeValor(numero) {
       setNum(numero);
    }


    return (
        <>
        <Text style={Estilo.txtG}>{num}</Text>
        <Filho
            min={1}
            max={60}
            funcao={exibeValor}
        />
        </>
    )
}