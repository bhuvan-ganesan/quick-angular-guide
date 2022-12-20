<div align="center">
  <h1>Angular - Getting Started</h1>
<sub>Author:
<a href="https://www.linkedin.com/in/bhuvanaganesan-l-2209047a" target="_blank">Bhuvan Ganesan</a><br>
</sub>
</div>

## What is Angular ?

Angular is a **Javascript** Framework build with Typescript, which allow to create reactive **Single-Page-Application (SPAs)**

Learning angular needs few basic skills 
1. HTML: Acknowledge the basics of both HTML and Semantic HTML.
2. CSS: Learn the basics of CSS, Flexbox, CSS grid, responsive web design and media queries.
3. JavaScript: In JavaScript We need syntax, basic operations, DOM manipulation, AJAX, Hoisting, Event Bubbling, Prototypes, ECMAScript and other new features.

## Setup

### IDE

VS Code https://code.visualstudio.com/

### NodeJS

Go to nodejs.org and download the latest **stable** version, Uninstall old versions on your machine first.

We can check if node is installed on our local machine by opening our device terminal or command prompt.

```sh
$ node -v
v18.0.0
```

```sh
$ npm -v
v8.0.0
```

Alternative ways to Install / Update **npm**:
```sh
npm install -g npm  
```
Installing the **Angular CLI**:

. https://angular.io/cli
. https://www.freecodecamp.org/news/npm-cheat-sheet-most-common-commands-and-nvm/

```sh
npm install -g @angular/cli 
```

### Create your first Angular Project 
```sh
ng new <your-app-name> 
```
Answer few question to step project 

1. If your project need routing i.e Is it multiple pages Press **y** for yes and **n** for no 
```sh
? Would you like to add Angular routing? (y/N) 
```
2. Choose Stylesheet format move your arrow to choose and press enter

```sh
? Which stylesheet format would you like to use? (Use arrow keys)
> CSS
  SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org                                             ]
```

**It will take few minutes (For first time it will take more than 5 - 10 minutes)** 

Once It's completed run below command to run the application 
```sh
cd <my-app>
ng serve
```

### Development Tools 
Below tools help in increase in productive etc.
1. Setup your Angular Devtools https://angular.io/guide/devtools 
2. Add below VS Code plugin 
   - Angular Language Service https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
   - Nx Console https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console
   - Angular Schematics https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics
3. List of all supported version https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3  
4. About Package.json https://heynode.com/tutorial/what-packagejson/#:~:text=Recap-,The%20package.,entry%20point%20to%20our%20package
5. About git https://git-scm.com/docs/git
6. About gitignore https://git-scm.com/docs/gitignore#:~:text=A%20gitignore%20file%20specifies%20intentionally,gitignore%20file%20specifies%20a%20pattern.






