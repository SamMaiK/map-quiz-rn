import React from 'react'
import {View, StyleSheet} from 'react-native'
import MapView from 'react-native-maps'

const Map = () => {
    return (
        <View style={{flex: 1}}>
            <MapView
                style={{flex: 1}}
                initialRegion={{
                    latitude: 4.21048,
                    longitude: 101.97577,
                    latitudeDelta: 10,
                    longitudeDelta: 5,
                }}
            />
        </View>
    )
};

export default Map