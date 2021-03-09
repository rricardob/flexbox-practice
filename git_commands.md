# Comandos Git :computer:

#### git init 
<p>este comando inicializa git en un proyecto</p>

#### git pull `origin` :arrow_right: `main`
<p>este comando permite descargar los cambios desde el repositorio indicando por ejemplo en este caso desde el origen main, main es la rama principal.</p>

#### git add 
<p>permite enviar los archivos al stage o area de preparación, este comando acepta diversos parametros entre ellos el mas comun el punto(.)</p>

#### git commit `-m "se añaden nuevos estilos referentes al encabezado"`
<p>crea una nueva confirmación que contenga el contenido actual del índice y el mensaje de registro dado que describe los cambios, este comando acepta diversos parametros entre ellos el mas usado es el -m que indica un mensaje que se puede agregar, ejemplo git commit -m "se modifico el index", se recomienda que los mensajes que van en el commit sean lo mas descriptivos posibles, pero sin ser demasiado largos.</p>

#### git push `origin` :arrow_right: `main`
<p>este comando permite enviar los cambios hacia un repositorio en la nube estableciendo la rama de origen y destino, en este caso desde nuestro origen local (rama en la que nos encontremos) hacia la rama remota</p>

#### git branch
<p>permite listar todas las ramas disponibles y por defecto marca la rama en la cual estamos trabajando</p>

#### git checkout
<p>por defecto nuestro repositorios solo se crean con una rama principal, en este caso es "main", si desearamos crear otra rama y situarnos en ella usamos 
<em><b> git checkout -b pruebas</b></em> muy util para poder navegar entre ramas y poder retroceder entre versiones diferentes de código</p>

---
#### **git config**
## git log

---
[documentación oficial ](https://git-scm.com/docs)
![alt text](https://miro.medium.com/max/650/1*zzvdRmHGGXONZpuQ2FeqsQ.png "Git")
