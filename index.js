console.log("Hello World")

var inquirer = require('inquirer');
const { inherits } = require('util');

const questions = [
{
	type: 'input',
	name: 'Title',
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
	name: 'Description',
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
	name: 'Installation',
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
	name: "Usage",
	message: "Enter Usage",
	validate: function (answer) {
		if(answer.length < 1){
		return console.log("Usage guide is required!");
		}
		return true;
	}
},
{
	type: 'list',
	name: 'License',
	message: "Choose a License from list",
	choices: ['MIT License','Apache License','Eclipse License','The Unlicense']
},
{
	type: 'input',
	name: 'Instructions',
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
}
];

async function init() {
	try{
		const userInput = await inquirer.prompt(questions);
		console.log("You entered: ", userInput);
} catch (error){
		console.log(error);
	}
};

init();