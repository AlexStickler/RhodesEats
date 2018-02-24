import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class homeTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>homeTab</Text>
            </View>
        );
    }
}

export default homeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});