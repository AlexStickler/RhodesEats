import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class searchTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>searchTab</Text>
            </View>
        );
    }
}

export default searchTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});