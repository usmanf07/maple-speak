import {View, ScrollView, SafeAreaView, Text} from 'react-native';
import {useState} from 'react';
import {Stack, useRouter} from 'expo-router';
import {COLORS, icons, images, SIZES} from '../constants';
import Welcome from '../components/home/welcome/Welcome';

const Home = () => {
     const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:COLORS.background}}>
        <Stack.Screen
            options={{
                headerStyle: {backgroundColor: COLORS.background},
                headerShadowVisible: false,
            }}
        />
        <Welcome />
        </SafeAreaView>
    );
}

export default Home;