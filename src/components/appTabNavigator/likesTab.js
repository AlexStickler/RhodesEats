import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class likesTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>likesTab</Text>
            </View>
        );
    }
}

export default likesTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});