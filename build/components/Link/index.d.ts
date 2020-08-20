import * as React from 'react';
import { Text } from 'react-native';
import { NextProps, Web } from './types';
declare const Link: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    touchableOpacityProps?: import("react-native").TouchableOpacityProps | undefined;
    style?: import("react-native").TextStyle | undefined;
    routeName: string;
    params?: {} | undefined;
    web?: Web | undefined;
    native?: {} | undefined;
    isText?: boolean | undefined;
} & NextProps & React.RefAttributes<Text>>;
export default Link;
