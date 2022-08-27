import React from "react";
import { StyleSheet, Text, View, Button} from "react-native";

export default function Forecast(props){
    return (
        <View>
            <Text style = {styles.main}>{props.main}</Text>
            <Text style = {styles.description}>{props.description}</Text>
            <Text style = {styles.temp}>{props.temp} °C</Text>
            <Text style = {styles.humidity}>{props.humidity} RH</Text>
            <View style = {styles.btn}>
                <Button onPress={() => {alert('Thankyou...');}} 
                title ="Back" color = "#00ff7f"/>
            </View>
            
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

    humidity: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },

    btn: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 250
    }
})