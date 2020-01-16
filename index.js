const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML.js")
const pdf = require('html-pdf');

let color;

const colors = {
    green: {
      wrapperBackground: "#E6E1C3",
      headerBackground: "#C1C72C",
      headerColor: "black",
      photoBorderColor: "#black"
    },
    blue: {
      wrapperBackground: "#5F64D3",
      headerBackground: "#26175A",
      headerColor: "white",
      photoBorderColor: "#73448C"
    },
    pink: {
      wrapperBackground: "#879CDF",
      headerBackground: "#FF8374",
      headerColor: "white",
      photoBorderColor: "#FEE24C"
    },
    red: {
      wrapperBackground: "#DE9967",
      headerBackground: "#870603",
      headerColor: "white",
      photoBorderColor: "white"
    }
  };


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
        switch (colorFav) {
            case "red":
                color = colors.red;
                break;
            case "pink":
                color = colors.pink;
                break;
            case "blue":
                color = colors.blue;
                break;
            case "green":
                color = colors.green;
        }
        const testing = generateHTML.generateHTML(response.data, color);
        const options = { format: 'Letter' };
        pdf.create(testing).toFile(`${username}.pdf`,function(error, result){
            if (error) return console.log(error);
            console.log(`Profile created at ${username}.pdf`);
        })

    })
})


function writeToFile(fileName, data) {
 
}

function init() {

}

// init();

//testing zone
