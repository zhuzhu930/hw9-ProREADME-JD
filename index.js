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
        name: "shortDescription",
        message: "Can you give us a short description of this app?",
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
    ).then((data) => {
    const filenameReadme = `${data.projectTitle.toLowerCase()}-readme.md`;

    const readmeGenerate = `
    # ${data.projectTitle}
    
    Designed by: ${data.name}
    
    ## Description
    
    ${data.shortDescription}
    
    - What was your motivation?
    - Answer: ${data.motivation}
    - Why did you build this project?
    - Answer: ${data.purpose}
    - What problem does it solve?
    - Answer: ${data.problem-solved}
    - What did you learn?
    - Answer: ${data.things-learned}
    
    ## Installation
    
    Please tell us the 3 simple steps for installing your app.
    
    - Step 1: ${data.step1}
    - Step 2: ${data.step2}
    - Step 3: ${data.step3}
    
    ## Usage
    
    - ${data.usageDescription}
    
    - Screenshots of the App
    
      Terminal side:
      ![Screenshots](assets/images/screenshot.png)
    
      VS code side:
      ![Screenshots](assets/images/screenshot.png)
    
      Generated Readme.md:
      ![Screenshots](assets/images/screenshot.png)
    
    ## Credits
    
    Collaborators:
    
    - Name: ${data.collaboratorName1}; GitHub Repo: ${data.GitHubProfile1}.
    - Name: ${data.collaboratorName2}; GitHub Repo: ${data.GitHubProfile2}.
    
    Third-party assets:
    
    - ${data.thirdpartyURLs}
    
    Tutorials:
    
    - ${data.tutorialURLs}
    
    ## License
    
    MIT License
    
    Copyright (c) ${data.licenseYear} ${data.licenseName}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    
    ---
    
    ## 🏆 Miscellaneous
    
    ## Badges
    
    ![Readme_Generator](https://img.shields.io/badge/Readme.md-Generator%20v1.0-blue)
    
    ## Features
    
    - ${data.features}
    
    ## How to Contribute
    
    - ${data.contribution}
    
    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
    ## Demo URL
    
    Please feel free to take a look at the demo video of this app:
    
    [Demo link](https://#)
    `

    fs.writeFile(filenameReadme, readmeGenerate, (err) => 
        err ? console.log(err) : console.log("Readme file is successfully generated!"));

});
