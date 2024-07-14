import React from 'react'
import { useGLTF } from '@react-three/drei/native'

export default function Sphere(props) {
    const { nodes, materials } = useGLTF(require('./sphere.glb'))
    return (
        <group onClick={() => props.handleIsActive()} {...props} dispose={null} scale={2}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Basketball1.geometry}
                material={nodes.Basketball1.material}
            />
        </group>
    )
}