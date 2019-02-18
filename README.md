# Note
This application is not hosted on the web but can be downloaded and run locally by following the instructions below.


# Overview

I have created this application using Angular 6, Node, and Express.js. There are two separate components, the front-end and back-end. This application utilizes the new Blizzard Dev Api (https://develop.battle.net).

  
# Instructions and Installation
1. This application will require Angular CLI and Node.js and npm to run locally. Node can be downloaded at https://nodejs.org/en/. Angular CLI can be installed with the following commad:
```sh
$ npm install -g @angular/cli
```
2. Unzip the project files (there will be two directories)
3. Open two terminal/command lines and cd into each of the directories
```sh
$ cd wow-edt
$ cd wow-edt-backend
```

4. Run the 'npm install' command in both terminals to install all packages
```sh
$ npm install
```

5. In the back-end terminal, run 'node server.js' to start the server
```sh
$ node server.js
```

6. n the front-end terminal, run 'ng serve --open' to open the application in a new browser tab
```sh
$ ng serve --open
```

7. Enter a character name and realm name and click 'Search' to see the results. (Tested with character name 'Regex' and realm name 'Dalaran')

# Requirements and Extra's

From the assignment, I have provided the following required character stats:

- Level of the character
- Health
- Strength
- Agility
- Intelligence
- Stamina
- Haste

As well as the following additional character stats:

- Damage
- Speed
- Mana Regen
- Armor
- Dodge
- Parry
- Block
- Crit
- Mastery
- Leech
- Versatility

I also provided all of the items (type, name) that were returned from the API response along with their image icon (There is currently to 'price' element for the items).

All of the images from the Photoshop file were added and styling was made as close to that file as possible. The stats section will show when the search is fired and close when you click on the 'X' icon.
