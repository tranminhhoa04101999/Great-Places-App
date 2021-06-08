import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlacesListScreen from '../screens/PlacesListScreen';
import MapScreen from '../screens/MapScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import Color from '../constant/Color';

const Stack = createStackNavigator();
const MainScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle:{
                    backgroundColor: Color.primary,
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    elevation: 5,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    height: 50
                },
                headerTintColor: 'white',
                headerTitleAlign: 'center',
            }}>
                <Stack.Screen name='PlacesListscreen' component={PlacesListScreen} options={{
                    title: 'Các Địa Điểm'
                }} />
                <Stack.Screen name='MapScreen' component={MapScreen} />
                <Stack.Screen name='NewPlaceScreen' component={NewPlaceScreen} options={{
                    title: 'Add Place'
                }} />
                <Stack.Screen name='PlaceDetailScreen' component={PlaceDetailScreen} options={{
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};


export default MainScreen;