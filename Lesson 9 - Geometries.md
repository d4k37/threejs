
# O que é uma geometria?

## Vértices
### Vértices são coordenadas em um espaço
### Vértices são ligados e criam o que chamamos de faces, que são os triângulos que se formam para criar a superfície do objeto
### Pode criar 'teias' e partículas
### Quando se usa os vértices para criar partículas, cada ponto vira uma partícula, e adiciona mais propriedades ao vértice além das coordenadas
![image](https://user-images.githubusercontent.com/59730229/148063768-9ab30903-0cca-4c36-af46-37099cb94a66.png)


## Geometrias

### As geometrias podem vir da classe **BufferGeometry**, que tem vários métodos para ser chamada como **translate(...)**, rotateX(...), normalize(...), etx
### Para ter uma geometria você precisa criar uma teia de vertices
#### É bom saber que o BufferGeometry tem essas geometrias nativas, que podem ser chamadas com conhecimento na documentação
#### Combinando essas geometrias é possível criar objetos complexos, mas pra objetos complexos talvez seja melhor usar um software de modelagem 3D e importar o objeto

### Existem 6 parâmetros
* Width
* Height
* depth
* widthSegments: Quantas subdivisões tem no axis x
* heightSegments: Quantas subdivisões tem no axis y
* depthSegments: Quantas subdivisões tem no axis z

#### Por exemplo, uma superfície com uma subdivisão de 1, terá 2 triângulos, já uma subdivisão de 2 terá 8 triângulos
![image](https://user-images.githubusercontent.com/59730229/148067137-31d259be-d687-4178-8276-b6382d8b5937.png)
#### Porque precisar de mais triângulos em uma superfície? Porque só assim é possível criar formas, posicionando os vértices e fazendo 'relevo' em relação a superfície
![image](https://user-images.githubusercontent.com/59730229/148067494-d2a9007b-66db-4aae-8c0d-85d56de9c08c.png)

##### Para mostrar as subdivisões use **wireframe: true** no **material**
