var inquirer = require('inquirer');
const { inherits } = require('util');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
{
	type: 'input',
	name: 'title',
	message: "Enter Title of Project",
	validate: function (answer) {
           if(answer.length < 1){
		return console.log("Project title is required!");
		}
		return true;
	}
},
{
	type: 'input',
	name: 'description',
	message: "Enter Project Description",
	validate: function (answer) {
		if(answer.length < 1){
		return console.log("Project Description is required!");
		}
		return true;
	}
},
{
	type: 'input',
	name: 'installation',
	message: "Enter Intallation Guide",
	validate: function (answer) {
		if(answer.length < 1){
		return console.log("Installation guide is required!");
		}
		return true;
	}
},
{
	type: 'input',
	name: "usage",
	message: "Enter Usage",
	validate: function (answer) {
		if(answer.length < 1){
		return console.log("Usage guide is required!");
		}
		return true;
	}
},
{
	type: 'input',
	name: "contribute",
	message: "Enter Contributing Guidelines",
	validate: function (answer) {
		if(answer.length < 1){
		return console.log("Conributing guidelines are required!");
		}
		return true;
	}
},
{
	type: 'list',
	name: 'license',
	message: "Choose a License from list",
	choices: ['MIT License','Apache License','GNU GPL v3']
},
{
	type: 'input',
	name: 'test',
	message: "Enter test instructions",
	validate: function (answer) {
		if(answer.length < 1){
		return console.log("Test instruction is required!");
		}
		return true;
	}
},
{
	type: 'input',
	name: 'username',
	message: "Enter your GitHub username",
	validate: function (answer) {
		if(answer.length < 1){
		return console.log("Github username is required!");
		}
		return true;
	}
},
{
	type: 'input',
	name: 'email',
	message: "Enter your email address",
	validate: function (answer) {
		if(answer.length < 1){
		return console.log("Email address is required!");
		}
		return true;
	}
}
];

function writeToFile(fileName,data){
	fs.writeFile(fileName,data,err =>{
		err ? console.log(err) : console.log('README file has been created!');
	});
}

const writeFileAsync = util.promisify(writeToFile);

async function init() {
	try{
		const userInput = await inquirer.prompt(questions);
		console.log("You entered: ", userInput);

		console.log("Creating your README file now....");
		const markdownG = generateMarkdown(userInput);
		const fileName = `${userInput.title}.md`;
		
		await writeFileAsync(fileName,markdownG);
		console.log(markdownG);
} catch (error){
		console.log(error);
	}
};

init();