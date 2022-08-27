import React from "react";
import { StyleSheet, Text, View} from "react-native";

export default function Forecast(props){
    return (
        <View>
            <Text>{props.main}</Text>
            <Text>{props.description}</Text>
            <Text>{props.temp}</Text>
            <Text>°C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 30,
    },

    description: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 30,
    },

    temp: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 30,
    }
})