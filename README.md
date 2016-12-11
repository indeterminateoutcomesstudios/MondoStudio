# [![MondoStudio](docs/img/logo-1.png)](https://github.com/MondoStudio/MondoStudio)

[![Build Status](https://travis-ci.org/MondoStudio/MondoStudio.svg?branch=master)](https://travis-ci.org/MondoStudio/MondoStudio)

For RPG passionates and for whom has great ideas to develop a roll-playing game,
who has no idea how to develop a game and still looking for way to do that,
MondoStudio is an online Roll-playing game creator that has a simple web interface to
design and produces a game logic. Unlike others tools to build a RPG, MondoStudio is
totally online, it is possible work with a team working on the same project and it
is totally free to use.

## Development setup

Pre-requisites:
  - node `~> 6.1.0`
  - npm `~> 3.10.7`
  - angular-cli `~> 1.0.0-beta.22-1`

Follow these steps to install:

    git clone https://github.com/MondoStudio/MondoStudio.git
    cd MondoStudio

Update [Firebase Credentials](https://firebase.google.com/docs/web/setup#add_firebase_to_your_app):

    bin/firebase-credentials.sh

There is a promptless way to generate the Firebase Credentials config:

    bin/firebase-credentials.sh <PROJECT_ID> <API_KEY> <SENDER_ID>

This command will ask you to input few information about your firebase web app credentials.
After inserting all needed keys, run the following command to continue the setup:

    npm install

### Server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will
automatically reload if you change any of the source files.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/`
directory. Use the `-prod` flag for a production build.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
