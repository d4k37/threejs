import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Sphere, TextureLoader } from 'three'
import * as dat from 'dat.gui'


//debug

const gui = new dat.GUI()
gui.add(material, 'metalness').min(0).max(1).step(0.0001)
gui.add(material, 'roughness').min(0).max(1).step(0.0001)

// texturas

const textureLoader = new THREE.TextureLoader()

const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
const alphaColorTexture = textureLoader.load('/textures/door/alpha.jpg')
const ambientOcclusionColorTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const heightColorTexture = textureLoader.load('/textures/door/height.jpg')
const normalColorTexture = textureLoader.load('/textures/door/normal.jpg')
const metlanessColorTexture = textureLoader.load('/textures/door/metalness.jpg')
const roughnessColorTexture = textureLoader.load('/textures/door/roughness.jpg')

const matcapTexture = textureLoader.load('/textures/matcaps/3.png')
const gradientTexture = textureLoader.load('/textures/gradients/5.png')
gradientTexture.minFilter = THREE.NearestFilter
gradientTexture.magFilter = THREE.NearestFilter
// gradientTexture.generateMipmaps = false


/**
 * Base
 */
// const material = new THREE.MeshMatcapMaterial()
// material.matcap = matcapTexture
// Canvas

const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//objects
// const material = new THREE.MeshBasicMaterial()
//  material.map = doorColorTexture
//  material.wireframe = true
//  material.opacity = 0.5
//  material.transparent = true
// material.side = THREE.DoubleSide
// material.alphaMap = alphaColorTexture

// const material = new THREE.MeshNormalMaterial()
// material.flatShading = true

// const material = new THREE.MeshMatcapMaterial()
// material.matcap = matcapTexture

const material = new THREE.MeshStandardMaterial()


const bola = new THREE.Mesh(
    new THREE.SphereBufferGeometry(0.5, 16, 16),
    material
)
bola.position.x = -1.5
const plano = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1, 1),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusBufferGeometry(0.3, 0.2, 16, 32),
    material
)
torus.position.x = 1.5



scene.add(bola, plano, torus)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{



    const elapsedTime = clock.getElapsedTime()

        // atualizar objetos
        bola.rotation.y = 0.1 * elapsedTime
        plano.rotation.y = 0.1 * elapsedTime
        torus.rotation.y = 0.1 * elapsedTime

        bola.rotation.x = 0.1 * elapsedTime
        plano.rotation.x = 0.1 * elapsedTime
        torus.rotation.x = 0.1 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()