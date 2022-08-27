import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import Weather from "../components/Weather";

export default function WeatherScreen ({route}) {
    return (
        <View>
            <Weather zipCode = {route.params.zipCode}/>
            <StatusBar style = "auto"/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    wtIcon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
