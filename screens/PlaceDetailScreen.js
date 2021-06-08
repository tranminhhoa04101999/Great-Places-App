import React, { useEffect } from 'react';
import {View,StyleSheet} from 'react-native';


const PlaceDetailScreen = ({props,navigation,route}) =>{
    const {placeId,placeTitle} = route.params;

    useEffect(()=>{
        navigation.setOptions({
            title: 'Details of '+ placeTitle
        })
    },[]);

    return(
        <View>

        </View>
    )
};

const styles = StyleSheet.create({
    
});

export default PlaceDetailScreen;
