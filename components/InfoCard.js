import React from 'react'
import {View, Text} from 'react-native'
import {Card, CardItem} from 'native-base'

const InfoCard = ({title, value}) => {
    return (
        <Card transparent style={{flex: 1}}>
            <Text style={{flex: 1, textAlign: 'center', textAlignVertical: 'center'}}>{title.toString()}</Text>
            <Text style={{flex: 1, textAlign: 'center', textAlignVertical: 'center'}}>{value.toString()}</Text>
        </Card>
    )
};

export default InfoCard