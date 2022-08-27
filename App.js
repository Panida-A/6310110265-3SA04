import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Weather from "./components/Weather";
import ZipCodeScreen from './screen/ZipCodeScreen'
import WeatherScreen from './screen/WeatherScreen'
import { StyleSheet } from "react-native";
//import SearchBar from "./components/SearchBar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={ZipCodeScreen}/>
        <Stack.Screen name = "Weather" component={WeatherScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

