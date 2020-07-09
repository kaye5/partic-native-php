# Partic- web 2 project
## Continue from web 1 project. add backend with native PHP with react as frontend.
---
### Installation
1.  Clone this repo to you xampp htdocs folder. it's should look like this ```C:\xampp\htdocs\partic```.
2.  Run ./partic.sql script for your database.
3.  Setup ./config.php to your needs.
4.  Start Xampp apache and mysql server. you can skip turning on mysql if you have mysql service running.
5.  Make you way to partic client directory using CLI.
```cd C:\xampp\htdocs\partic\client```.
6.  Run command below
```sh
$ yarn install
$ yarn start
```
OR
```
$ npm install
$ npm start
```
7. React dev server should be running on port 3000.
8.  so go to [http://localhost:3000](http://localhost:3000) on your brwoser.
> You need to have yarn or npm and xampp installed on your machine. npm came inside nodejs installation. refer to this [Node js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) for installation. pick one of them.
for xampp  installation refer to this [Xampp](https://www.apachefriends.org/index.html)
### Structure
-  ```/api/...``` Restfull endpoints.
-  ```/lib/...``` Library function.
-  ```/config.php``` App configuration.
-  ```/sql/...``` SQL script.
-  ```/client/``` Frontend