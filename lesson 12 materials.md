# Materials

Materiais são usados pra colocar uma cor em cada pixel visível da geometria. O algorítmo e escrito em programas chamados shaders. Nós não precisamos escrever nos shaders e nós podemos usar materiais prontos

# Setup
## Preparar a cena

# 3 meshes composto de 3 diferentes geometrias: MeshBasicMaterial


```
const material = new THREE.MeshBasicMaterial({color: 0xff0000})

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
```

# Girar os objetos com a função tick

```
        bola.rotation.y = 0.1 * elapsedTime
        plano.rotation.y = 0.1 * elapsedTime
        torus.rotation.y = 0.1 * elapsedTime

        bola.rotation.x = 0.1 * elapsedTime
        plano.rotation.x = 0.1 * elapsedTime
        torus.rotation.x = 0.1 * elapsedTime
```

# Adicionar as texturas

```
const textureLoader = new THREE.TextureLoader()

const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
const alphaColorTexture = textureLoader.load('/textures/door/alpha.jpg')
const ambientOcclusionColorTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const heightColorTexture = textureLoader.load('/textures/door/height.jpg')
const normalColorTexture = textureLoader.load('/textures/door/normal.jpg')
const metlanessColorTexture = textureLoader.load('/textures/door/metalness.jpg')
const roughnessColorTexture = textureLoader.load('/textures/door/roughness.jpg')

const matcapTexture = textureLoader.load('/textures.matcaps/1.png')
const gradientTexture = textureLoader.load('/textures.gradients/3.png')
```

# MeshBasicMaterial
Map vai aplicar a textura na superfície da geometria
```
material.map = doorColorTexture
```
# Da pra combinar color e map
```
material.color = new THREE.Color('#EE0000')
```


# MeshMatcapMaterial

## Vai mostrar uma cor usando os normals como referência pra pegar a cor certa em uma textura que se parece com uma esfera
## Ele vai pegar das cores que estão na textura, e colocar nas formas, vai pegar a cor certa de acordo com a posição da geometria em relação a câmera

# MeshStandadMaterial
## Usa um renderizador fisicamente baseado em princípios (PBR) 
## Como o MeshLambertMaterial e MeshPhongMaterial, ele tem suporte a luzes mas com um algorítmo mais realista e melhores parâmetros como roughness e metalness


```
const material = new THREE.MeshStandardMaterial()
```

# Dat.Gui pra mudar as propriedades do material

```
gui.add(material, 'metalness').min(0).max(1).step)0.0001)
gui.add(material, 'roughness').min(0).max(1).step)0.0001)
```
# aoMap
## Pra mudar as propriedades da textura

# Licença CCO
## VOcê pode fazer o que quiser com o conteúdo deles sem precisar creditar os autores
