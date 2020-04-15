import React from 'react';

import {StyleSheet, Text, View} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    bulletPoint: {
        width: 10,
        fontSize: 10,
    },
    itemContent: {
        flex: 1,
        fontSize: 10,
        fontFamily: 'Lato Bold',
    },
});

const List = ({children}) => children;

// TODO For every item a new number
export const Item = ({children}) => (
    <View style={styles.item}>
        <Text style={styles.bulletPoint}>1. </Text>
        <Text style={styles.itemContent}>{children}</Text>
    </View>
);

export default List;
