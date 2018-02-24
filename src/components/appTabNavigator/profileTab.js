import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class profileTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>profileTab</Text>
            </View>
        );
    }
}

export default profileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});