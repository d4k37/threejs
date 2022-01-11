# Texturas

#### Texturas são imagens que cobrem a superfície das geometrias. Existem vários tipos com diferentes efeitos.


## Cor (ou ALBEDO)
* É o tipo mais simples
* É aplicado a geometria

## Alpha
* Imagem em escala de cinza
* Branco visível
* Preto não visívwel

## Height ( ou displacement)
* Escala de cinza
* Move os vértices pra criar um efeito
* Precisa de muitas subdivisões de vértices
* Essa textura deixa a superfície 'granulada/rugosa'

## Normal
* Adiciona detalhes
* Não precisa de subdivisão
* Os vértices não se movem
* Melhor performance que adicionar a textura HEIGHT que pecisa de bem mais subdivisões

## Ambient Occlusion
* Cinza
* Adiciona sombras falsas
* Não é físicamente preciso
* Ajuda a criar contraste e ver detalhes

## Metalness
* Cinza
* Branco é metálico
* Preto é não metálico
* É usado mais para reflexos

## Roughness
* Cinza
* pranco é parrudo
* preto é suave
* Mais usado para dissipação da luz

# Existem vários outros tipos mas esses são os principais

# Princípio PBR (physically based rendering)
* Muitas técnicas seguem direções reais pra terresultados realistas
* Está se tornando o padrão para renderizadores realistas.
* Muitos programas, bibliotecas e engines estão usando

# Pegando a URL da imagem

* coloque a textura de imagem na pasta '/src' e importe

### Usar a imagem em javascript nativo

```
import textureimg from '../static/textures/minecraft.png'


const image = new Image()
const texture = new THREE.Texture(image)

image.onload = () =>{
   texture.needsUpdate = true
}

image.src = '/textures/minecraft.png'

const material = new THREE.MeshBasicMaterial({ map: texture })
```

# UV Unwrapping

## Você tem o objeto 3D, com as coordenadas dos vértices, e tem a imagem 3D, nela contendo as coordenadas das texturas para os vértices
### As coordenadas uv são geradas pelo THREEJS, 
### Se você criar sua própria geometriea você precisa especificar as suas coordenadas UV.

# Transformar a textura

### Podemos repetir uma textura usando a propriedade 'repeat'. É um Vector2 com propriedades de x e y.

```
colorTexture.repeat.x = 1
colorTexture.repeat.y = 1
colorTexture.wrapS = THREE.RepeatWrapping
colorTexture.wrapT = THREE.RepeatWrapping
colorTexture.offset.x = 0.5
colorTexture.offset.y = 0.5
colorTexture.rotation = Math.PI * 0.25
colorTexture.center.x = 0.5
colorTexture.center.y = 0.5
```

# Filtering and Mipmapping

### Mipmapping é uma técnica que consiste em criar a metade de uma versão menor da textura até montar a textura
#### São versões da textura em baixa resolução, elas são enviadas para a GPU 
#### Ela vai usar as texturas com baixa resolução quando o pixel do objeto está menos visível

# Filtering Minification
#### Acontece quando os pixels da textura são menores que os pixels do renderizador
#### Da pra munar a minification filter da textura usando a propriedade minFilter com esses 6 valores:
![image](https://user-images.githubusercontent.com/59730229/148977240-0a2e01de-29c3-4a26-a1db-b22c2e23e44e.png)


## Texturas muito pequenas costumam ficar borradas ao se esticarem, o que acaba sendo melhor que uma textura pixelada;

## Com a propriedade magFilter da pra corrigir

## A propriedade NearestFilter da uma boa para performance e framerate

## Quando se usa magFilter e NearestFilter não é necessário usar Mipmaps, já que provavelmente você está usando uma textura com baixa resolução.

