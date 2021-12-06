import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

const group = new THREE.Group()
group.position.y= -1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xff0000}),
)

group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'blue'}),
)
cube2.position.set(2, 0, 0)
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 'green'}),
)
cube3.position.set(-2, 0, 0)
group.add(cube3)



// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// // mesh.position.x = 0.7
// // mesh.position.y = -0.6
// // mesh.position.z = 1
// //o set coloca os 3 valores do axis de uma vez
// mesh.position.set(0.7, -0.6, 1)


// scene.add(mesh)
// //mesh.position.normalize()

// //scale

// mesh.scale.set(2, 0.5, 0.5)


// //rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.set(Math.PI * 0.25, Math.PI * 0.25, 0)


//axes helper
const axesHelper = new THREE.AxisHelper(2)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// camera.lookAt(mesh.position)

//pegando a distancia da camera para o objeto(mesh)
//console.log(mesh.position.distanceTo(camera.position));
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)