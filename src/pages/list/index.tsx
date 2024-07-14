import { FlatList, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'


import { Button } from '@react-native-material/core';
import ListItem from '../../components/list_item'
import PAGES from '../../utils/pages_const'

import { useList } from '../../context/listContext'
const List = ({ navigation }: any) => {

    const { list } = useList()
    return (
        <View style={styles.container}>

            <View style={styles.listContainer}>
                <FlatList data={list} renderItem={({ item }) => <ListItem navigation={navigation} item={item} />} />
            </View>
            <Button title="Create" style={styles.button} onPress={() => navigation.push(PAGES.CreateModel)} />

        </View>
    )
}

export default List

