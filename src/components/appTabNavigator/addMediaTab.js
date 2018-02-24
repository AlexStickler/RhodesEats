import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class addMediaTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>addMediaTab</Text>
            </View>
        );
    }
}

export default addMediaTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});