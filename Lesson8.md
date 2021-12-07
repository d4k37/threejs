
# Lesson 8 fullscreen and resizing


### Quando declarando o tamanho para a tela e pra pegar o **aspect ratio**, você pode substituir as dimensões 
```
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
```

### Porém quando você faz isso, o navegador ainda não coloca totalmente fullscreen, além de cortar um pedaço da tela. Se resolve com css
```
*{
    margin: 0;
    padding: 0;
}

html,
body{
    overflow: hidden;
}


.webgl{
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
}
```

### É preciso que quando o navegador seja redimensionado, a tela precisa acompanhar:
```
window.addEventListener('resize', ()=>{
   sizes.width = window.innerWidth
   sizes.height = window.innerHeight

   //update camera
   camera.aspect = sizes.width / sizes.height
   camera.updateProjectionMatrix()

   renderer.setSize(sizes.width, sizes.height)
})
```

### Se você tiver trabalhando com um pixel ratio maior que 1 os cantos dos objetos podem ter um blurry effect
### O pixel ratio corresponde a quantos pixels físicos você tem na tela pra uma unidade de pixel na parte do sortware
#### ALguns anos atrás, todas as telas tinham um pixel ratio de 1 e se você chegasse bem perto, poderia ver os pixels
#### Construtoras como a Apple viram uma oportunidade e começaram a construir telas com um pixel ratio de 2
#### Agora, algumas construtoras estão fazendo pixel ratios até mesmo maiores como 3 e até mais.
#### Um pr de 2  significa 4 vezes mais pixels pra renderizar. Um pr de 3 significa 9 vezes mais pixels pra renderizar. Os maiores pr estão geralmente nos dispositivos mais fracos, celulares
![image](https://user-images.githubusercontent.com/59730229/145090941-da2fbeb8-447b-4a1f-a89d-aed8e09b2616.png)

## Pra saber o pixel ratio, você pode usar window.devicePixelRatio
### Pra atualizar o renderizador de forma correta, podemos usar renderer.setPixelRatio(...)
### Também é preciso limitar o pixel ratio
```
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
```




