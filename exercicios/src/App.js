import React from 'react';
import { View, StyleSheet } from 'react-native';
import Primeiro from './components/Primeiro';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Comp, { Comp1, Comp2 } from './components/Multi'
import Titulo from './components/Titulo';
import Button from './components/Button';
import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
import Pai from './components/indireta/Pai';
import ContadorV2 from './components/contador/ContadorV2';
import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';
import UsuarioLogado from './components/UsuarioLogado';
import DigiteSeuNome from './components/DigiteSeuNome';
import FlexboxV1 from './components/layout/FlexboxV1';
import FlexboxV2 from './components/layout/FlexboxV2';
import FlexboxV3 from './components/layout/FlexboxV3';
import FlexboxV4 from './components/layout/FlexboxV4';
import Mega from './components/mega/Mega';

export default  () =>  (
    <View style={style.App}>
        <Mega qtdeNumeros={7}/>
        {/* <FlexboxV4/> */}
        {/* <FlexboxV3/> */}
       {/* <FlexboxV2/> */}
       {/* <FlexboxV1/> */}
       {/* <DigiteSeuNome/> */}
       {/* <UsuarioLogado usuario={{nome:"Gui", email:"gui@gui.com"}} /> */}
       {/* <Familia>
            <Membro nome="Carlos" sobrenome="Arruda"/>
            <Membro nome="Pedro" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva"/>
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia> */}
        {/* <ContadorV2/> */}
        {/* <Pai/> */}
        {/* <Pai/> */}
        {/* <Contador inicial={100} passo={13}/>
        <Contador /> */}
        {/* <Titulo principal="titulo" secundario="subtitulo"/>
        <Button/> */}
        {/* <Text>{ 1 + 1 }</Text> */}
        {/* <MinMax min={3} max={20}/>
        <MinMax min="9" max="94"/>
        <Aleatorio min={1} max={100}/>
        <Aleatorio min={1} max={100}/>
        <Aleatorio min={1} max={100}/>
        <Aleatorio min={1} max={100}/> */}
        {/* <Comp/>
        <Comp1/>
        <Comp2/>
        <Primeiro/> */}
    </View>
);


const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})