import { Text, View } from 'react-native'
import React from 'react'
import { Model } from '../../types'
import styles from './styles'
import { Button } from '@react-native-material/core';
import PAGES from '../../utils/pages_const';
import { useList } from '../../context/listContext';
import SHAPES from '../../utils/shapes';

interface Props {
    item: Model,
    navigation: any
}
const ListItem = ({ item, navigation }: Props) => {
    const { deleteItem } = useList()
    return (
        <View style={styles.container}>
            <View style={styles.informations}>
                <View style={styles.row}>
                    <Text style={styles.property}>ID </Text>
                    <Text style={styles.value}>{item.id}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.property}>Name  </Text>
                    <Text style={styles.value}>{item.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.property}>Type </Text>
                    <Text style={styles.value}>{Object.keys(SHAPES).find(key => SHAPES[key] === item.type)}</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <Button title="Delete" titleStyle={{ color: 'white' }} color="red" onPress={() => {
                    deleteItem(item.id)
                }} />

                <Button title="3D View" onPress={() => {
                    navigation.push(PAGES.ModelView, { shapeType: item.type })
                }} />

            </View>

        </View>
    )
}

export default ListItem

