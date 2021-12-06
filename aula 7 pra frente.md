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
 - Near and Far (qualquer objeto ou parte dele mais perto que **near** ou mais longe que **far** não vai aparecer
 - 
