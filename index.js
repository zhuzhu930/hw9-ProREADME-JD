const inquirer = require("inquirer");
const fs = require("fs");

//app design, using .prompt to prompt questions to users. .prompt takes an array, but inside the array, use objects. 
inquirer.prompt([
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation to build this app?",
    },
    {
        type: "input",
        name: "purpose",
        message: "Why did you build this project?",
    },
    {
        type: "input",
        name: "problem-solved",
        message: "What problem does it solve?",
    },
    {
        type: "input",
        name: "things-learned",
        message: "What did you learn?",
    },
    //Stop in here. 
    {
        type: "input",
        message: "Where are you from?",
        name: "location",
    },
    {
        type: "input",
        message: "Can you give us a short bio?",
        name: "bio",
    },
    {
        type: "input",
        message: "What's your LinkedIn URL?",
        name: "LinkedIn",
    },
    {
        type: "input",
        message: "What's your GitHub URL?",
        name: "GitHub",
    },
    {
        type: "checkbox",
        message: "What skills do you have in web development?",
        name: "skills",
        choices: ["HTML", "CSS", "JavaScript", "Node.js", "React"]
    },
    {
        type: "checkbox",
        message: "What hobbies do you have?",
        name: "hobbies",
        choices: ["oil painting", "watercolor painting", "cooking", "hiking", "reading"]
    },
]).then((data) => { // this is a promise. 
    //console.log(data);
    const filenameHTML = `${data.name.toLowerCase()}.html`;
    const filenameCSS = "style.css";
    const filenameReadme = "readme-generated.md"

    // const html = `<!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <link rel="stylesheet" href="style.css"/>
    //         <title>Document</title>
    //     </head>
    //     <body>
    //         <h1>Hi my name is ${data.name}.</h1>
    //         <p>I live in ${data.location}.</p>
    //         <p>This is my short bio:</p>
    //         <p>${data.bio}</p>
    //         <ul>
    //             <li>LinkedIn URL: <a>${data.LinkedIn}</a></li>
    //             <li>GitHub URL: <a>${data.GitHub}</a></li>
    //         </ul>
    //         <p>My skills in web development include: ${data.skills}.</p>
    //         <p>My hobbies include: ${data.hobbies}.</p>
    //     </body>
    //     </html>`

    // const css = `
    //     * {
    //         box-sizing: border-box;
    //     }
        
    //     body {
    //         margin: 0;
    //         padding: 0;
    //         font-family: Verdana, Geneva, Tahoma, sans-serif;
    //         background: darkgrey;
    //         text-align: center;
    //         color: white;
    //     }

    //     h1 {
    //         font-family: Cursive;
    //     }
        
    //     a {
    //         text-decoration: none;
    //         color: darkblue;
    //       }
    //     a:hover {
    //         color: #6633ff;
    //       }
    `

    fs.writeFile(filenameHTML, html, (err) => 
        err ? console.log(err) : console.log("success!"));
    
    // fs.writeFile(filenameCSS, css, (err) => 
    //     err ? console.log(err) : console.log("success!"));
});
