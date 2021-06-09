import React, { useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';
import * as PlaceActions from '../store/places-action';

const PlacesListScreen = ({ props, navigation, route }) => {
    const listPlaces = useSelector(state => state.places.places);
    const dispatch = useDispatch();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () =>
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item iconName='add' title='Add' onPress={() => navigation.navigate('NewPlaceScreen')} ></Item>
                </HeaderButtons>
            ,
        });
    }, []);

    useEffect(()=>{
        dispatch(PlaceActions.setPlace());
    },[dispatch]);

    return (
        <FlatList data={listPlaces} keyExtractor={item => item.id} renderItem={data => {
            return (
                <PlaceItem
                    image={data.item.imageUri}
                    title={data.item.title}
                    address={null}
                    onSelect={() => navigation.navigate('PlaceDetailScreen',{
                        placeTitle: data.item.title,
                        placeId : data.item.id,
                    })}
                />
            );
        }} />
    )
};

const styles = StyleSheet.create({

});

export default PlacesListScreen;
