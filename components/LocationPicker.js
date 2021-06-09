import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Platform, PermissionsAndroid, Alert, ActivityIndicator } from 'react-native';
import Color from '../constant/Color';
import Geolocation from 'react-native-geolocation-service';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import MapPreview from '../components/MapPreview';
// import Geolocation from '@react-native-community/geolocation';

const LocationPicker = () => {
    const [location, setLocation] = useState();
    const [isFetching, setIsFetching] = useState(false);

    const red = () => {
        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(resutl => {
            if (resutl === RESULTS.GRANTED) {
                getUserLocationHandler()
            }
        })
    };

    const getUserLocationHandler = async () => {
        setIsFetching(true);
        await Geolocation.getCurrentPosition(
            (postion) => {
                setLocation({
                    lat: postion.coords.latitude,
                    lng: postion.coords.longitude
                })
            },
            (err) => {
                Alert.alert('Error get Location', 'lấy vị trí hiện tại đang lỗi !!', [{ text: 'OK' }]);
            },
            { timeout: 5000 }
        );
        setIsFetching(false);
    };

    return (
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview} location={location} >
                {isFetching ? <ActivityIndicator size='large' color={Color.primary} /> : <Text>no location chosen yet !!</Text>}
            </MapPreview>
            <Button title='get user location' color={Color.primary} onPress={red} />
        </View>
    )
};

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15,
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,
    },

});

export default LocationPicker;