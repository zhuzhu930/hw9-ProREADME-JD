const inquirer = require("inquirer");
const fs = require("fs");

//app design, using .prompt to prompt questions to users. .prompt takes an array, but inside the array, use objects. 
inquirer.prompt([
    //Description queries: 
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
    //Installation queries: 
    {
        type: "input",
        message: "Please tell us the 3 simple steps for installing your app? Step 1 is...",
        name: "step1",
    },
    {
        type: "input",
        message: "Step 2 is...?",
        name: "step2",
    },
    {
        type: "input",
        message: "Step 3 is...?",
        name: "step3",
    },
    //Usage queries: 
    {
        type: "input",
        message: "Could you briefly describe how to use this app?",
        name: "usageDescription",
    },
    //Credits queries: 
    //collaborators: 
    {
        type: "input",
        message: "Do you have any collaborators? If you do, please list his/her name.",
        name: "collaboratorName1",
    },
    {
        type: "input",
        message: "What's this collaborator's GitHub profile?",
        name: "GitHubProfile1",
    },
    {
        type: "input",
        message: "Do you have another collaborator? If you do, please list his/her name.",
        name: "collaboratorName2",
    },
    {
        type: "input",
        message: "What's this collaborator's GitHub profile?",
        name: "GitHubProfile2",
    },
    // Third party assets: 
    {
        type: "input",
        message: "Did you use any third party assets? If you do, please list the URLs.",
        name: "thirdpartyURLs",
    },
    // Tutorials: 
    {
        type: "input",
        message: "Did you watch any tutorials? If you do, please list the URLs.",
        name: "tutorialURLs",
    },
    // License queries: 
    {
        type: "input",
        message: "In what year did you design this app?",
        name: "licenseYear",
    },
    {
        type: "input",
        message: "What is your full name?",
        name: "licenseName",
    },
    // Feature queries: 
    {
        type: "input",
        message: "Can you give us a short description of the features?",
        name: "features",
    },
    // Contribution queries: 
    {
        type: "input",
        message: "Can you tell us how to contribute to this app?",
        name: "contribution",
    }],
    ).then((data) => { // this is a promise. 
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
