import React from 'react'
import { useGLTF } from '@react-three/drei/native'

export default function Cone(props) {
    const { nodes, materials } = useGLTF(require('./cone.glb'))
    return (
        <group onClick={() => props.handleIsActive()} {...props} dispose={null}>
            <group position={[2.338, 0, 0]} scale={0.713}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_1.geometry}
                    material={materials['Material.002']}
                />
            </group>
            <group position={[4.34, 0, 0]} scale={0.487}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002.geometry}
                    material={materials['Material.001']}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002_1.geometry}
                    material={materials['Material.002']}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials['Material.001']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane_1.geometry}
                material={materials['Material.002']}
            />
        </group>
    )
}