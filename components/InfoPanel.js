import React from 'react'
import {View, Text} from 'react-native'
import InfoCard from "./InfoCard";

const InfoPanel = () => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InfoCard
                    title="Correct selections"
                    value="12"
                />
                <InfoCard
                    title="Highscore"
                    value="13"
                />
                <InfoCard
                    title="Km's left"
                    value="1000"
                />

            </View>
            <View style={{flex: 1}}><Text>Current City Panel</Text></View>
        </View>


    )
};

export default InfoPanel