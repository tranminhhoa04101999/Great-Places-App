import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { ActionSheet, Root } from 'native-base';
import ImagePickerA from 'react-native-image-crop-picker';
import Color from '../constant/Color';




const ImagePicker = (props) => {
    const [uriImg, setUriImg] = useState('s');

    const chonAnh = () => {
        ImagePickerA.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setUriImg(image.path);
            props.onTakeImg(image.path);
        });
    };
    const chupAnh = () => {
        ImagePickerA.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setUriImg(image.path);
            props.onTakeImg(image.path);
        });

    };

    const addImage = () => {
        const Buttons = ['Chụp ảnh', 'Chọn ảnh từ máy', 'Cancel'];
        ActionSheet.show(
            { options: Buttons, cancelButtonIndex: 2, title: 'Chọn một bước ảnh !' },
            index => {
                switch (index) {
                    case 0:
                        chupAnh();
                        break;
                    case 1:
                        chonAnh();
                        break;
                    default:
                        break;
                }
            }
        );
    };

    return (
        <Root>
            <View style={styles.screen}>
                <View style={styles.imagePreview}>
                    {uriImg.length > 1 ? null : <View style={styles.text}><Text >chưa có ảnh !!</Text></View>}
                    <Image style={styles.image} source={{ uri: uriImg }} />
                </View>
                <Button title="Chọn ảnh" color={Color.primary} onPress={addImage}></Button>
            </View>
        </Root>
    )
};

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagePreview: {
        width: '100%',
        height: 200,
        borderBottomWidth: 1,
        borderColor: 'grey',
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        marginTop: 150
    }
});

export default ImagePicker;