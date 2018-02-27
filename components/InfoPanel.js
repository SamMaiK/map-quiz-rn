import React from 'react'
import {View, Text} from 'react-native'
import InfoCard from "./InfoCard"
import CurrentCityPanel from './CurrentCityPanel'

const InfoPanel = ({correctSelections, kilometersLeft, currentCity, showResult, resultDistance, highScore}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <InfoCard
                    title="Correct selections"
                    value={correctSelections}
                />
                <InfoCard
                    title="Highscore"
                    value={highScore}
                />
                <InfoCard
                    title="Km's left"
                    value={kilometersLeft}
                />

            </View>

            <View style={{flex: 1}}>
                {/*{showResult ?*/}
                    {/*<ResultPanel/>*/}
                {/*}*/}

                <CurrentCityPanel
                    currentCity={currentCity}
                />
            </View>
        </View>


    )
};

export default InfoPanel