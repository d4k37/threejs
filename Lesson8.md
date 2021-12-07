
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

### 
