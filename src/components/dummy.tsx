import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const dummy = () =>
    <View style={styles.container}>
        <Text>dummy</Text>
    </View>;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default dummy;
