import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/native'

export default function Cylinder(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF(require('./cylinder.glb'))

    return (
        <group onClick={() => props.handleIsActive()} ref={group} {...props} dispose={null} scale={3}>
            <group name="Scene">
                <group name="Cy">
                    <mesh
                        name="Cylinder"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder.geometry}
                        material={materials['https://www.cgtrader.com/halocan27 :D']}
                        position={[0, 0.446, 0]}
                    />
                </group>
            </group>
        </group>
    )
}