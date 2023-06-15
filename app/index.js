import {View, ScrollView, SafeAreaView, Text} from 'react-native';
import {useState} from 'react';
import {Stack, useRouter} from 'expo-router';
import {COLORS, icons, images, SIZES} from '../constants';
import Welcome from '../components/home/welcome/Welcome';
import SafeAreaWrap from './SafeAreaWrap';
const Home = () => {
     const router = useRouter();

    return (
        <SafeAreaWrap>
        <Welcome />
        </SafeAreaWrap>
    );
}

export default Home;