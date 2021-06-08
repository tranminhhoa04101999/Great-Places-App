import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TextInput, Button, Alert} from 'react-native';
import Color from '../constant/Color';
import {useDispatch} from 'react-redux'
import * as PlaceAction from '../store/places-action';
import ImagePicker from '../components/ImagePicker';

const NewPlaceScreen = ({props,navigation,route}) => {
    const [title, setTitle] = useState('');
    const [img,setImg] = useState();
    const dispatch = useDispatch();

    const changeTextHandler = text => {
        if(text.length <= 0){
            Alert.alert('ecec')
        }
        setTitle(text);
    };

    const onAddHandler = () => {
        dispatch(PlaceAction.addPlace(title,img));
        navigation.goBack();
    };

    const takeImg = (img)=>{
        setImg(img);
    };

    return (
        <ScrollView>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.title} >Title</Text>
                    <TextInput style={styles.input} onChangeText={text => changeTextHandler(text)} />
                </View>
                <ImagePicker onTakeImg={takeImg} />
                <View>
                    <Button title='Add' onPress={onAddHandler} />
                </View>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    form: {
        flex: 1,
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        color: '#888'
    },
    input: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        fontSize: 20
    },
    inputContainer: {
        marginTop: 10,
        marginBottom: 15,
        marginHorizontal: 20,
    }
});

export default NewPlaceScreen;
