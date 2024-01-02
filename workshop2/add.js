// =========== Methods that ADD item(s) ===========

// example arrays:
let numbersArr = [2, 3, 1, 5, 4, 3, 9, 2, 8]
let numberOrig = [2, 3, 1, 5, 4, 3, 9, 2, 8]

let lettersArr = ['a', 'd', 't', 'w', 'h', 'j', 'b', 'e', 'f', 'd', 'k', 'm']
let letterOrig = ['a', 'd', 't', 'w', 'h', 'j', 'b', 'e', 'f', 'd', 'k', 'm']

export default function addMethods(appDiv) {
  appDiv.insertAdjacentHTML('beforeend', `<h2>Add Element(s)</h2>`)
  console.log('======== ADD METHODS ========')
  console.log('Original numbers array: ', numberOrig)

  // ----------- 1) ADD item(s) at start of array -----------
  console.log('=== 1) Add [11, 12] to start of the numbers array')
  // a) Mutating methods
  console.log('unshift() --> ', numbersArr.unshift(11, 12)) // adds items, returns array length
  console.log('splice --> ', numbersArr.splice(0, 0, 11, 12)) // re-adds items
  console.log('changed array: ', numbersArr) // changed --> added 2 items twice
  numbersArr = [...numberOrig] // reset numbers array to original

  // b) Non-mutating methods
  console.log('spread (...) syntax --> ', [11, 12, ...numbersArr]) // [11, 12, 2, 3, …]
  console.log('concat() --> ', [11, 12].concat(numbersArr)) // [11, 12, 2, 3, …]
  console.log('toSpliced() --> ', numbersArr.toSpliced(0, 0, 11, 12)) // [11, 12, 2, 3, …]

  //
  // ----------- 2) ADD item(s) to end of array -----------
  console.log('=== 2) Add [21, 22] to end of the numbers array')
  // a) a) Mutating methods
  console.log('push() --> ', numbersArr.push(21, 22)) // adds items, returns array length
  console.log('splice() --> ', numbersArr.splice(numbersArr.length, 0, 21, 22)) //
  console.log('changed array: ', numbersArr) // changed --> added 2 items twice
  numbersArr = [...numberOrig] // reset numbers array to original

  // b) Non-mutating methods
  console.log('concat() --> ', numbersArr.concat(11, 12)) // […, 2, 8, 11, 12]
  console.log('spread (...) syntax --> ', [...numbersArr, 11, 12]) // […, 2, 8, 11, 12]
  console.log(
    'toSpliced() --> ',
    numbersArr.toSpliced(numbersArr.length, 0, 21, 22)
  )

  //
  // ----------- 3) ADD item(s) into middle of array -----------
  console.log('=== 3) Add [6, 7] at index 2 of our numbers array')
  // a) a) Mutating methods
  console.log('splice() --> ', numbersArr.splice(2, 0, 6, 7)) // adds items, returns []
  console.log('changed array: ', numbersArr) // changed --> added 2 items
  numbersArr = [...numberOrig] // reset numbers array to original

  // b) Non-mutating methods
  console.log('toSpliced() --> ', numbersArr.toSpliced(2, 0, 6, 7)) // [2, 3, 6, 7, …]

  //
  // ----------- 4) ADD items from one array to another array -----------
  console.log('=== 4) Add letters array items to numbers array')
  // a) a) Mutating methods
  console.log('push() --> ', numbersArr.push(...lettersArr)) // returns length of numbersArr
  console.log('changed array: ', numbersArr) // changed --> added items in letters array
  numbersArr = [...numberOrig] // reset numbers array to original

  // b) Non-mutating methods
  console.log('concat() --> ', numbersArr.concat(lettersArr)) // [2, 3, …, "k", "m"]
  console.log('spread --> ', [...numbersArr, ...lettersArr]) // [2, 3, …, "k", "m"]
}
