import React from 'react';
import { View } from 'react-native';

export default props => {
    return (
        <View style={{
            width: props.lado,
            height: props.lado,
            backgroundColor: props.cor || '#000'
        }}>
        </View>
    )
}