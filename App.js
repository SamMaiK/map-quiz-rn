import React from 'react';
import Footer from './components/Footer'
import InfoPanel from './components/InfoPanel'
import Map from './components/Map'
import {View, Text, AsyncStorage} from 'react-native'
import {getHighscoreFromStorage} from './helpers/storage'
import dataForGame from './capitalCities.json'

const initialState = {
    gameStart: true,
    gameOver: false,
    showMarker: false,
    showResult: false,
    currentCityIndex: 0,
    correctSelections: 0,
    kilometersLeft: 1500,
    resultDistance: 0,
    mapZoom: 4,
    mapCenter: {
        lat: 48.12,
        lng: 11.54
    },
    markerPosition: {
        lat: 0,
        lng: 0
    },
    highScore: 0
};

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.cities = dataForGame.capitalCities;
        this.state = initialState;
    }

    componentDidMount() {
        getHighscoreFromStorage().then((score) => {
            this.setState({highScore: score})
        })
    }

    render() {
        const {setMarkerPosition, cities, applySelection, nextCity, closeStartOverlay, startNewGame, setMap} = this;
        const {
            showMarker,
            markerPosition,
            correctSelections,
            kilometersLeft,
            currentCityIndex,
            showResult,
            resultDistance,
            gameOver,
            gameStart,
            mapCenter,
            mapZoom,
            highScore
        } = this.state;
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 3}}>
                    <InfoPanel
                        correctSelections={correctSelections}
                        kilometersLeft={kilometersLeft}
                        currentCity={cities[currentCityIndex].capitalCity}
                        showResult={showResult}
                        resultDistance={resultDistance}
                        highScore={highScore}
                    />
                </View>
                <View style={{flex: 7}}><Map/></View>
                <View style={{flex: 1}}><Footer/></View>
            </View>
        );
    }
}