import React from 'react'
import {View, Text} from 'react-native'
import {Card} from 'native-base'


const CurrentCityPanel = ({currentCity}) => {
    return (
        <Card transparent style={{flex: 1}}>
            <Text style={{flex: 1, textAlign: 'center', textAlignVertical: 'center'}}>
                {`Select the location of "${currentCity}"`}
            </Text>
        </Card>
    )
};

export default CurrentCityPanel