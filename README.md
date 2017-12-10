# One
# UNO
> A multiplayer game for any client
>>One game
>>>our version of the popular card game uno

### Marc: not using game branch anymore
### Marc: Planning on starting with new branch game-0.0.0.1
### Marc: Install npm form website: "https://www.npmjs.com/"
### Marc: After installing you may need to reboot computer.
### Marc: Adding "npm init" to setup package.json
``` cmd
C:\srct\one>npm init
```
``` npm
This uility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.   Notice each field to be entered by
a user is sepated by a colon i.e. `:`.

Press ^C at any time to quit.
name: (one) One Uno Game
Sorry, name can only contain URL-friendly characters and name can no longer contain capital letters.
name: (one) One
Sorry, name can no longer contain capital letters.
name: (one)
version: (1.0.0) 0.0.0
description: One Uno Game
entry point: (game.js)
test command: test
git repository: (https://github.com/UserLevelUp/One.git)
keywords: uno game js node
author: UserLevelUp
license: (ISC)
About to write to C:\src\one\package.json:

{
  "name": "one",
  "version": "0.0.0",
  "description": "One Uno Game",
  "main": "game.js",
  "scripts": {
    "test": "test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/UserLevelUp/One.git"
  },
  "keywords": [
    "uno",
    "game",
    "js",
    "node"
  ],
  "author": "UserLevelUp",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/UserLevelUp/One/issues"
  },
  "homepage": "https://github.com/UserLevelUp/One#readme"
}

Is this ok? (yes) yes
```
``` cmd
C:\src\one>
```
### Next attempt to install express locally or globally
### Locally is for this directory only
### Globablly is for all directories on your computer

``` cmd
c:\src\one>npm install express
``` 

### After express is installed on a machine with npm and node
### Then type in the node command

``` cmd
c:\src\one>node app.js
```
``` node
> no error
```
### Now if you get no error it means that node is most likely running on your computer.
### If its running on your computer then it should be on localhost on port 3000 by default.
### Open up your web browser like Chrome or IE or Firefox and type this in url.

``` url
http://localhost:3000
```

## "Hello World"


Why does this work? Simple: Node is a command like prompt that is installed with npm.  Node uses Google's javascript engine to perform pretty much any command that a regular program can perform including web sockets, file manipulation and many other server or desktop specific tasks.  It also performs all of the javascript language specifics that a browser can perform with the exception that it is not in a browser so there is no DOM inherent in Node.  If this is incomplete research more about NPM and Node in a search engine.

### If you got this far you should notice that app.js is not included in index.html.  That is because this file only runs in node and starts the server and serves up the index.html and game.js file.  However it is very basic and straight forward right now.  Eventually it will need to be abstracted out a little so we can add many more files in a simpler and more logical way.  Well... maybe not simpler.

>> This readme was edited primarily in <a href="https://code.visualstudio.com/">VS Code</a>.
>>> Markdown help is located at this link: <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#blockquotes">Markdown cheatsheet</a>.

