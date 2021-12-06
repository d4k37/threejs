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
 
 
