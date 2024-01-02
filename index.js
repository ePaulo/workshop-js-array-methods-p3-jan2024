// Import stylesheets
import './style.css'

// Imports for last workshop:
// import getMethods from './workshop2/get.js'
// import addMethods from './workshop2/add.js'
// import editMethods from './workshop2/edit.js'

// Imports for this workshop:
import deleteMethods from './delete.js'
import checkMethods from './check.js'
import evalMethods from './eval.js'


// Please review Array methods in the methods.txt file

/*
Array methods perform six basic functions:
1) Getting elements
2) Adding elements
3) Editing elements
4) Deleting elements
5) Checking elements
6) Evaluating elements
*/

// Write Javascript code!
const appDiv = document.getElementById('app')
appDiv.innerHTML = `<div>Maximize Console to see the log file.</div>`

// Use StackBlitz "split editor" option, look at two files at a time
// Suggest you focus on "Deleting", "Checking", "Evaluating" separately


// ============= TOPICS FOR THIS WORKSHOP =============
// 4) Deleting elements
// Open 
deleteMethods(appDiv)

// 5) Checking elements
checkMethods(appDiv)

// 6) Evaluating elements
evalMethods(appDiv)



// ============= TOPICS FROM THE LAST WORKSHOP =============
// 1) Getting elements
// Open get.txt AND get.js
// getMethods(appDiv)

// 2) Adding elements
// Open add.txt AND add.js
// addMethods(appDiv)

// 3) Editing elements
// Open edit.txt AND edit.js
// editMethods(appDiv)


