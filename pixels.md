
# Pixelação

## O que é esse 'efeito escada' com que alguns objetos 3D se apresentam?
### Tem a ver com os pixels, mais especificamente o pixel ratio (proporção de pixel)
### Pixel Ratio
É uma proporção matemática que descreve como a largura de um pixel em uma imagem digital se compara a altura desse pixel. A maioria dos sistemas de imagem digital exibe uma imagem como uma grade de pequenos pixels quadrados.
O pixel ratio corresponde a quantos pixels físicos você tem na sua tela para uma unidade de pixel visível na parte do software que está renderizando


O 'efeito escada' aparece quando a tela em que você está vendo o objeto 3D tem um pixel ratio maior que 1. 

Até poucos anos atrás, todas as telas tinham um pixel ratio de 1 e se você chegasse pertinho, dava pra ver os pixels.

Montadoras de telas como a Apple viram aí uma oportunidade e começaram a fazer telas com o pixel ratio de 2.

Hoje existem telas com pixel ratios até maiores, que geralmente são as telas mobile (o que não faz sentido)

Um pixel ratio de 2 significa 4 vezes mais pixels pra renderizar, e um pixel ratio de 3 quer dizer 9 vezes mais pixels pra renderizar.


Por exemplo, em uma imagem renderizada em uma tela fictícia de apenas 100 pixels em um pixel ratio de 1, a sua GPU vai renderizar 100 pixels,  pois cada pixel real equivale a um pixel renderizado.
Já uma mesma tela de 100 pixels, mas com um pixel ratio de 2, é como se cada pixel real fosse dividido ao meio, e agora a GPU pudesse renderizar 2 pixels no espaço físico de 1 pixel. Nesse caso será desenhado 200 pixels na tela.

Em teoria quanto maior o pixel ratio, mais suave será a aparência das linhas de um desenho, deixando pra trás esse 'efeito escada'


Quando renderizando uma imagem no webgl através do threejs, fica claro que por padrão ela é renderizada com o pixel ratio de 1 já que sempre aparece esse 'efeito escada' nos objetos. Como renderizar uma imagem aproveitando todos os pixel ratio dos monitores:
