const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


inquirer.prompt([
    {
        type: "input",
        message: "What is the developers github profile?",
        name : "username"

    },
    {
        type: "list",
        message: "What is your favorite color?",
        name: "colorFav",
        choices: [
            "red",
            "pink",
            "blue",
            "green"
        ]
    }
]).then(function(data){
    const {username, colorFav} = data;
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(response){
        // console.log(response.data);
        const {avatar_url, name, location: locCurrent, url, bio, public_repos, followers, following} = response.data;
        console.log(avatar_url);
    })
})




const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {

}

// init();
