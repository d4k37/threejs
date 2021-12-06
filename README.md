# threejs curso de 3d com webgl

Lesson 01 -- Introduction
vai ter blender


Lesson 02
o que é webgl e porque usar three.js
da pra fazer todo tipo de coisa

WEBGL == JAVASCRIPT API
basicamente renderiza triângulos em super velocidade
usa a GPU no computador pra funcionar
pode ser usado pra 2d mas o foco é 3d

a CPU calcula bem rápido também mas é um cálculo por vez
a GPU é um pouco mais lenta mas faz milhares de cálculos paralelos


## Lesson 03 -- creating basic scene
 ### Precisamos de 3 elementos pra começar:
 #### UMA CENA QUE CONTÉM OS OBJETOS
 
 #### OS OBJETOS
 
 Criar um objeto é criar um 'mesh'
 É preciso criar o material 'MeshBasicMaterial
 Seria mostrar a cor
 
 º geometrias primitivas
 
 ºmodelos prontos importados
 
 ºpartículas
 
 ºluzes etc
 
#### UMA CÂMERA

não é visível

serve como um ponto de vista quando renderizar

pode ter várias e trocar entre elas

um exemplo é PerspectiveCamera

a perspective camera tem uns parametros

ºcampo de visao
ºem graus
ºtambémn é chamado de 'fov'

O ASPECT RATIO

Ele é o width dividido pelo height

Crie uma varfiavel SIZES tendo valores temporarios

 
#### UM RENDERIZADOR
 
 Renderizar uma cena de uma câmera
 
 result draw into canvas?
 
 canvas é um elemento html que vc pode desenhar coisas
 
 WEBGLRENDEREE
 
 
##LESSON4 
Só ensinando a usar o webpack pra compilar

##Lesson -5 Transformar objetos

###Existem 4 propriedades pra transformar os objetos:

Posição

Scale

Rotation

Quaternion (é um tipo de rotação)

###Todas as classes que vem do Object3D tem essas propriedades como PerspectiveCamera ou Mesh

###Essas propriedades serão compilkadas em matrizes (matrices) você não precisa aprender matriz

#POSITION
Se usa axis (x, y, z)
O axis de um objeto não está alinhado com a câmera

###Position vem de Vector3 que tem vários métodos, como usar a posição no comprimento de um vetor

#SCALE
se usa axis também

objeto.scale.set(1, 1, 1)


#ROTATION
você pode usar a propriedade ROTATION e QUATERNION, se você muda em um, ele automaticamente muda o outro

objeto.rotation

o y gira horizontal

o z gira diagonal

o x gira pra frente e pra trás

QUando você usa as propriedades de rotação pra um fps,  por exemplo, é preciso mudar a ordem com que ele roda os objetos, pois mudando primeiro o x, quando mudar o y vai ser um efeito estranho, então você muda pra YXZ com reorder

#mesh.rotation.reorder('YXZ')

#O quaternion fixa isso
QUaternion também expressa rotation, mas em uma forma mais matemática, não veremos isso agora


#LOOKAT
Instâncias do Object3D tem o método lookAt(...) onde seu -z vira pro objeto que você colocou
camera.lookAt(objeto.position)

#GROUP
Você pode colocar objetos dentro de grupos e usar position, rotation e scale no grupo



# Lesson 6 - Animations

## Animar em Three.js é como fazer stop motion
 - Mova o objeto
 - tire uma foto
 - mova o objeto mais um pouco
 - tire outra foto
 - adinfinitum
### A maioria das telas funcionam a 60 frames por segundo, mas nem sempre a sua animação vai ser assim indepentente do framerate

### É preciso atualizar os objetos e renderizar em cada frame.
### Da pra fazer isso em uma função com **window.requestAnimationFrame(...)**


## REQUESTANIMATIONFRAME

### O propósito dessa função é chamar a função dada ao próximo frame
### vamos chamar a mesma função em cada frame

[code]

const tick = () =>
{
    console.log('tick');

    window.requestAnimationFrame(tick)
}

tick()

[/code]



















