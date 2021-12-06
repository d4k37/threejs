# Lession 7

#Camera

### Camera é uma classe abstrata, você não deveria usar ela diretamente



# Array Camera

### ArrayCamera renderiza a cena de várias câmeras em áreas específicas do render



# Stereo Camera

### StereoCamera renderiza a cena por duas cameras que imitam os olhos criando um **efeito parallax**
### Se usa cm VR, óculos 3d e cardboard



# Cube Camera

### CubeCamera faz 6 renderizações, cada uma apontando pra uma direção diferente
### Pode usar isso pra renderizar ao redor das coisas como um mapa, reflexo e sombra



# ORTHOGRAPHIC CAMERA
### OrthographicCamera renderiza a cena sem perspectiva



# Perspective Camera
### PerspectiveCamera properties

 - Field of view (vertical vision angle, in degrees, também chamado de **fov**) Recomendado entre 45 e 75
 - Aspect Ratio (o width do render dividido pelo height do render, o **Delta**)
 - Near and Far (qualquer objeto ou parte dele mais perto que **near** ou mais longe que **far** não vai aparecer)
 
 # Orthographic Camera
 ### Properties
 
  - A diferença pra PerspectiveCamera é a falta de perspectiva
  - Ao invés de field of view, ela provê o quão longe a camera pode ser vista em cada direção(**left, right, top, e bottom**)
  - E **near** e **far**
  
  
  # Mover a camera com o mouse
  ## Primeiro precisamos saber as coordenadas do mouse no canvas
   - use o evento **mousemove** com **addEventListener** e pegue o **event.clientX** e o **event.clientY**

 ```
 // Cursor

window.addEventListener('mousemove', (event)=>
{
    console.log(event.clientY);
})
```
## Esses valores são em pixel e é melhor os ajustar, queremos um valor de amplitude 1 (**de 0 a 1**) que pode ser negativo e positivo
```

const cursor = {
    x: 0,
    y: 0
}
window.addEventListener('mousemove', (event)=>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5

    console.log(cursor.y);
})
```

## Agora é só atualizar o **position** da camera na função **tick** com as coordenadas do cursor
## O axis **y** precisa ser negativo porque o **cursor.y** é positivo quando indo pra baixo enquanto o **y** do Three.js é positivo quando indo pra cima
## Pra mover a camera ao redor do centro da cena use 
 - Math.sin()
 - Math.cos()
 - Math.PI
 
 
 
 
 # Controls
 ## DeviceOrientationControls
  - Vai automaticamente pegar a orientação do seu dispositivo se ele, OS e navegador permitem e girar a camera de acordo
  - É útil pra criar universos imersivos e experiencias em VR
  
  ## FlyControls
   - Habilita o movimento da camera como se você estivesse em uma nave
   - Você pode rodar os 3 axis, ir pra frente e pra trás
   
   
   ## FirstPersonControls
   - É como o FlyControls, mas com um axis fixado, não é como jogos de FPS
   - É mais como um pássaro ou avião que não pode tombar
   
   
   ## PointerLockControls
   - Esse sim parece fps
   - Usa o a API pointer lock JavasCript
   - É difícil de usar e quase só usa o pointer lock e camera rotation
   
   ## OrbitControls
   - Da pra fazer os movimentos de um mapa, por exemplo, é mais sobre movimento de câmera
   ```import  {OrbitControls}  from 'three/examples/jsm/controls/OrbitControls.js'```
   
   ## TrackballControlls
   - É como **OrbitControls** sem o limite de ângulo vertical

   ## TransformControls
   - Não tem nada a ver com camera
   - É mais pra mover objetos
   
   ## DragControls
   - É pra mover objetos também
   
   
