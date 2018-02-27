import {AsyncStorage} from 'react-native'

export const getHighscoreFromStorage = async () => {
    const score = await AsyncStorage.getItem('@Highscore:key');
    return score !== null ? parseInt(score, 10) : 0
};

export const writeHighscoreToStorage = async (data) => {
    await AsyncStorage.setItem('@Highscore:key', data);
};