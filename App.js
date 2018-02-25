import React from 'react';
import { Spinner } from 'native-base';
import Footer from './components/Footer'
import InfoPanel from './components/InfoPanel'
import { View, Text } from 'react-native'
import { styles as commonStyles } from './styles/common'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });
        this.setState({loading: false})
    }

    render() {
        const {loading} = this.state;
        if (loading) {
            return (
                <View style={{flex: 1}}>
                    <Spinner/>
                </View>
            )
        }
        else {
            return (
                <View style={{flex: 1}}>
                    <View style={{flex: 3}}><InfoPanel/></View>
                    <View style={{flex: 7}}><Text>Content</Text></View>
                    <View style={{flex: 1}}><Footer/></View>
                </View>
            );
        }
    }
}