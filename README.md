# qa-end-to-end
the goal of this project aims at helping QA people to write maintainable automated end to end tests for web based applications with #JavaScript, #Protractor, #Selenium

## Why learning how to write automated Tests?
1. because its cool
2. because you are then much more valuable for your company
3. because repetitive tasks should be executed by a mashine
4. because your can compose your test cases with the actual source code
5. because your can export your test result reports in pretty much every format

## Before you even start
Take yourself some time to read about general programming concepts, JavaScript(ES2015 and newer), HTML5 and DOM-Selectors(css, xpath, etc...)

Try to **broadly** understand how Git works, and get a litte bit comfortable with the git bash or git cmd (which you have after the installation of Git)

If you are bored by now and dont want to continue then its fine! You then should propably go back to [Selenium IDE](https://www.seleniumhq.org/projects/ide/)(which kind of gets the same things done, but not realy though because your test cases are defined seperatly from your source code) or even manual regression testing... LOL

## Prerequisites
1. [Git](https://git-scm.com/) - source control management
2. [NodeJS](https://nodejs.org/en/) - javascript runtime environment
3. [Visual Studio Code](https://code.visualstudio.com/) - text editor (IDE)
4. [Java SDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) - you will need it for Selenium

*Note that after installing everything you may have to restart your Computer.*

## Installation
1. ### Start VSCode

2. ### In VSCode goto File -> Open Folder -> Select some folder where you want to put this Project

3. ### In VSCode goto Terminal -> New Terminal

4. ### Inside the Terminal clone this repository into your current folder
    ```sh
    git clone https://github.com/Olddude/qa-end-to-end.git "."
    ```

5. ### Install node packages
    ```sh
    npm install
    ```
    *wait untill all packages are installed*

6. ### In VSCode open another Terminal(dont close the old one, you will need two)

7. ### Inside the new Terminal update and start the Selenium Server
    ```sh
    npm run serve
    ```
    *make sure your Selenium Server is running, if the terminal freezes then close it and repeat the task*

8. ### Go back to the first Terminal and run the Specs
    ```sh
    npm run start
    ```

9. ### View the reports
    ```sh
    npm run view-report
    ```
