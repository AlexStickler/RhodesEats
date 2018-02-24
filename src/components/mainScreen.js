//react imports
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

//imports
import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

//tabs
import homeTab from './appTabNavigator/homeTab'
import addMediaTab from './appTabNavigator/addMediaTab'
import likesTab from './appTabNavigator/likesTab'
import profileTab from './appTabNavigator/profileTab'
import searchTab from './appTabNavigator/searchTab'

class mainScreen extends Component {

    static NavigationOptions = {

        headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft:10 }} />,
        title: "Rhodes Eats",
        headerRight: <Icon style={{ paddingRight:10 }} name="ios-send-outline" />
    }

    render() {
        return (
            <AppTabNavigator />
        );
    }
}

export default mainScreen;

const AppTabNavigator = TabNavigator({

    homeTab: {
        screen: homeTabs
    },
    searchTab: {
        screen: searchTab
    },
    addMediaTab: {
        screen: addMediaTab
    },
    likesTab: {
        screen: likesTab
    },
    profileTab: {
        screen: profileTab
    }
})

const homeTabs = StackNavigator({
    //screens
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});