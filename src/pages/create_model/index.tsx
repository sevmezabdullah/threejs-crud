import { ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'

import { Button, TextInput } from '@react-native-material/core'
import styles from './styles'
import { Dropdown } from 'react-native-element-dropdown';
import { useList } from '../../context/listContext';
import SHAPES from '../../utils/shapes';
const data = [
    { label: 'Sphere', value: SHAPES.SPHERE },
    { label: 'Cylinder', value: SHAPES.CYLINDER },
    { label: 'Cube', value: SHAPES.CUBE },
    { label: 'Cone', value: SHAPES.CONE },

];

const CreateModel = ({ navigation }: { navigation: any }) => {
    const { addItem } = useList()
    const [name, setName] = useState('')
    const [type, setType] = useState<number | null>(null)
    return (
        <View  >
            <View style={styles.container}>
                <TextInput onChangeText={(e) => setName(e)} style={styles.input} label="Name" variant="outlined" />
                <Dropdown
                    onChange={(e) => {
                        if (e.value) {
                            setType(e.value)
                        }
                    }}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"

                    placeholder="Select a shape"
                    searchPlaceholder="Search..." placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    style={styles.dropdown}
                    itemTextStyle={styles.itemTextStyle}
                    data={data} />
            </View>

            <Button title="Create" onPress={() => {

                if (!name || name.length === 0 || !type || type === null) {
                    ToastAndroid.show('Name or type cannot be empty', ToastAndroid.SHORT);
                } else {
                    addItem({ name, type: type })
                    navigation.pop();
                }
            }} style={styles.button} />
            <Button color="red" titleStyle={styles.goBackTitle} title="Go Back" onPress={() => {
                navigation.pop();
            }} style={styles.goBackButton} />
        </View>
    )
}

export default CreateModel

