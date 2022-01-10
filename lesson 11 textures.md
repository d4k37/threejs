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
