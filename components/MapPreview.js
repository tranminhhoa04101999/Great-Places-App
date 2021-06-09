import React from 'react';
import { View, StyleSheet, Text,Image } from 'react-native';


const MapPreview = (props) => {

    let imgUrl;
    if(props.location)
    {
        imgUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=400x200&markers=color:blue%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=AIzaSyBUvEwJS7zq1K45hzkGffF2Henoni08iRU`;
    }
    console.log(imgUrl);
    return (
        <View style={{...styles.mapPreview,...props.style}}>
            {props.location ? <Image source={{uri: imgUrl}} style={styles.mapImg} />  : props.children }
        </View>
    )
};

const styles = StyleSheet.create({
    mapPreview:{
        justifyContent:'center',
        alignItems: 'center'
    },
    mapImg:{
        width: '100%',
        height: '100%',
    }
});

export default MapPreview;