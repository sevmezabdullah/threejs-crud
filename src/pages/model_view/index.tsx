import { TouchableOpacity, View } from 'react-native'


import Cube from '../../models/cube';

import { Canvas, } from '@react-three/fiber';

import React, { useCallback, useState } from 'react';
import useControls from 'r3f-native-orbitcontrols';
import SHAPES from '../../utils/shapes';
import Cone from '../../models/cone';
import Cylinder from '../../models/cylinder';
import Sphere from '../../models/sphere';



import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'
import { Text } from 'react-native';


const ModelView = ({ route, navigation }: any) => {
    const shapeType = route.params?.shapeType
    const [isActive, setIsActive] = useState(false)

    const [OrbitControls, events] = useControls()
    const handleIsActive = () => {
        setIsActive(!isActive)
    }
    return (
        <View style={{ flex: 1 }} {...events} >
            <TouchableOpacity onPress={() => {
                navigation.pop()
            }} style={{ alignItems: 'flex-end', marginEnd: 10, marginTop: 10 }}>
                <View >
                    <FontAwesomeIcon size={36} icon={faClose} />
                </View>
            </TouchableOpacity>

            {isActive && <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 30, color: 'black' }}>{Object.keys(SHAPES).find(key => SHAPES[key] === shapeType)}</Text>
            </View>}

            <Canvas>
                <OrbitControls enableRotate enablePan={true} enabled={true} />
                <directionalLight intensity={2} position={[0, 0, 1]} args={['#9e9e9e', 2]} />

                {shapeType === SHAPES.CUBE && <Cube handleIsActive={handleIsActive} />}
                {shapeType === SHAPES.CONE && <Cone handleIsActive={handleIsActive} />}
                {shapeType === SHAPES.CYLINDER && <Cylinder handleIsActive={handleIsActive} />}
                {shapeType === SHAPES.SPHERE && <Sphere handleIsActive={handleIsActive} />}
            </Canvas>



        </View>
    )
}

export default ModelView

