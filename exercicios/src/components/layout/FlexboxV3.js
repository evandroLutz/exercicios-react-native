import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={style.FlexboxV3}>
            <Quadrado lado={20}/>
            <Quadrado cor={'#F00'} lado={30} />
            <Quadrado cor={'#090'} lado={40}/>
            <Quadrado cor={'#009'} lado={50}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexboxV3: {
       flexDirection: "row",
       justifyContent: "space-evenly",
       alignItems: "flex-start",
       height: 350,
       width: '100%',
       backgroundColor: '#000'
    }
});