#!/usr/ bin/env node

// import the 'inquirer' moudule,whiCh is a command line interface for node.js
import inquirer from "inquirer"
import { nextTick } from "process"
//declare a constant 'answer'  and assign it to the result of inquirer.prompt function
const answer:{
    sentence: string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter your sentence to count the word:"
    }
])
const word = answer.sentence.trim().split(" ")

// print teh array of word to the console
console.log(word);
//print the 'word' count of teh sentence to teh console
console.log(`your sentence word count is ${word.length}`);