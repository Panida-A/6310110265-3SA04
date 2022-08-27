import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Forecast from "./Forecast";

export default function Weather(props) {

    const apiKey = 'ed33e08244c5496e5b900e5eabda6ad4'

    const [forecastInfo, setForecastInfo] = useState ( {
            main: '-',
            description: '-',
            temp: 0
        } )
    
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${apiKey}`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    return (       

        <ImageBackground source={require('../bg.jpg')} style = {styles.backdrop}>
            <Text style =  {styles.myText}>Zip Code: {props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
        
    )
}

const styles = StyleSheet.create ({

    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    /*cover: {
        backgroundColor: '#000',
        width: '100%',
        height: 300,
        opacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },*/

    myText: {
        fontSize: 20 ,
        fontWeight: 'bold'
    }
})