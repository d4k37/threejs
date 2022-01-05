
# Nós precisamos poder debugar facilmente
# Depende do desenvolvedor, do designer e até mesmo do cliente
# Vai ajudar encontrar as perfeitas cores, velocidades, quantidades etc
# Precisamos de uma UI debug na tela
# Podemos ter a nossa própria ou usar uma biblioteca
 
* dat.GUI (vamos usar esse. É o mais usado, mas tentem usar o outro)
* control-panel
* ControlKit
* Guify
* Oui 

# dat.GUI 
##### Te da controles sobre câmera, órbita, post processing, cores, sombras, física do ambiente como adicionar gravidade. A debug ui serve pra testar diferentes valores no projeto
##### Adicione o repositório e então importe no script
```
import * as dat from 'dat.gui;

const gui = new dat.GUI
```

## Existem diferentes tipos de elementos que você pode adicionar no painel ui
* Range - for the numbers with minimum and maximum value
* Color - for colors of various formats
* Text - to simples texts
* CHeckbox - for boolean
* Select - for choice or list values
* Button - trigger functions
* Folder - organize elements of the panel

### Pra adicionar, se usa ``` gui.add(...) ```` pra adicionar o elemento. O primeiro parâmetro é um objeto e o segundo a propriedade que você quer chanar
```
gui.add(mesh.position, 'y', -3, 3, 0.01)
gui.add(mesh.position, 'x', -3, 3, 0.01)
gui.add(mesh.position, 'z', -3, 3, 0.01)
```

### Também podemos usar **min(...)**, **max(...)**, e **step(...)

```
gui.add(mesh.position, 'y').min(-3).max(3).step(0.01)
```
