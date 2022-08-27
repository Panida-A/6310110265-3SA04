import React from "react";
import { StyleSheet, Text, View} from "react-native";

export default function Forecast(props){
    return (
        <View>
            <Text style = {styles.main}>{props.main}</Text>
            <Text style = {styles.description}>{props.description}</Text>
            <Text style = {styles.temp}>{props.temp}</Text>
            <Text style = {styles.heat}>°C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'bold'
    },

    description: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },

    temp: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold'
    },

    heat: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    }
})