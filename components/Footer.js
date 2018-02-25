import React from 'react'
import {View, Text} from 'react-native'
import {Button} from 'native-base'

const Footer = () => {
    return(
        <View style={{flex: 1}}>
            <Button full style={{flex: 1}}>
                <Text>Apply selection</Text>
            </Button>
        </View>
    )
};

export default Footer