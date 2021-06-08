import {HeaderButton,Item} from 'react-navigation-header-buttons';
import Color from '../constant/Color';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react'

const customHeaderButton = props => {
    return <HeaderButton {...props} IconComponent={Icon} iconSize={23} color='white' ></HeaderButton>
};

export default customHeaderButton;