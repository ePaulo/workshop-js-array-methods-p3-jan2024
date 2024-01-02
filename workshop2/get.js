// =========== Methods that GET item(s) ===========

// example arrays:
let numbersArr = [2, 3, 1, 5, 4, 3, 9, 2, 8]
let numberOrig = [2, 3, 1, 5, 4, 3, 9, 2, 8]

let lettersArr = ['a', 'd', 't', 'w', 'h', 'j', 'b', 'e', 'f', 'd', 'k', 'm']
let letterOrig = ['a', 'd', 't', 'w', 'h', 'j', 'b', 'e', 'f', 'd', 'k', 'm']

export default function getMethods(appDiv) {
  appDiv.insertAdjacentHTML('beforeend', `<h2>Get Element(s)</h2>`)
  console.log('======== GET METHODS ========')
  console.log('Original numbers array: ', numberOrig)

  const getExamples = [
    '1) GET the last item in an array',
    '2) GET the smallest item in an array',
    '3) GET an item at a specified index',
    '4) GET items between specified indexes',
    '5) GET the first item that passes a specified test',
    '6) GET all items that pass a specified test',
  ]

  // ----------- 1) GET the last item in an array -----------
  appDiv.insertAdjacentHTML('beforeend', `<p>${getExamples[0]}</p>`)
  console.log('===', getExamples[0])
  // a) Mutating methods:
  console.log('pop() --> ', numbersArr.pop()) // removes/returns 8
  console.log('splice() --> ', numbersArr.splice(-1)) // removes/returns [2]
  console.log('changed array: ', numbersArr) // changed --> last two items removed
  numbersArr = [...numberOrig] // reset numbers array

  // b) Non-mutating methods:
  console.log('[] notation --> ', numbersArr[numbersArr.length - 1]) // 8
  console.log('at() --> ', numbersArr.at(-1)) // 8
  console.log('slice() --> ', numbersArr.slice(-1)) // [8]
  console.log(
    'toSpliced() --> ',
    numbersArr.toSpliced(0, numbersArr.length - 1)
  ) // [8]

  //
  // ----------- 2) GET the smallest item in an array -----------
  appDiv.insertAdjacentHTML('beforeend', `<p>${getExamples[1]}</p>`)
  console.log('===', getExamples[1])
  // a) Mutating methods:
  console.log('sort() + shift() --> ', numbersArr.sort().shift()) // 1
  console.log('changed array: ', numbersArr) // changed --> sorted and 1st item removed
  numbersArr = [...numberOrig] // reset numbers array

  // b) Non-mutating methods
  console.log('toSorted()[0] ---> ', numbersArr.toSorted()[0]) // 1
  console.log('toSorted().at() --> ', numbersArr.toSorted().at(0)) // 1
  console.log('toSorted().slice() --> ', numbersArr.toSorted().slice(0, 1)) // [1]

  //
  // ----------- 3) GET an item at a specified index -----------
  appDiv.insertAdjacentHTML('beforeend', `<p>${getExamples[2]}</p>`)
  console.log('===', getExamples[2])
  // a) Mutating methods:
  console.log('splice() --> ', numbersArr.splice(2, 1)) // [1]
  console.log('changed array: ', numbersArr) // changed --> 3rd item removed
  numbersArr = [...numberOrig] // reset numbers array to original

  // b) Non-mutating methods
  console.log('[] notation --> ', numbersArr[2]) // 1
  console.log('at() --> ', numbersArr.at(2)) // 1
  console.log('slice() --> ', numbersArr.slice(2, 3)) // [1]

  //
  // ----------- 4) GET items between specified indexes  -----------
  appDiv.insertAdjacentHTML('beforeend', `<p>${getExamples[3]}</p>`)
  console.log('===', getExamples[3])
  // a) Mutating methods:
  console.log('splice() --> ', numbersArr.splice(1, 3)) // [3, 1, 5]
  console.log('changed array: ', numbersArr) // changed --> 3 items removed
  numbersArr = [...numberOrig] // reset numbers array to original

  // b) Non-mutating methods
  console.log('slice() --> ', numbersArr.slice(1, 4)) // [3, 1, 5]

  //
  // ----------- 5) GET the first item that passes a specified test -----------
  appDiv.insertAdjacentHTML('beforeend', `<p>${getExamples[4]}</p>`)
  console.log('===', getExamples[4])
  // a) Mutating methods:
  let indexNumGt5 = numbersArr.findIndex((num) => num > 5) // 6
  console.log('findIndex() & splice() --> ', numbersArr.splice(indexNumGt5, 1)) // [9]
  console.log('changed array: ', numbersArr) // changed --> 1 item removed
  numbersArr = [...numberOrig] // reset numbers array to original

  // b) Non-mutating methods
  console.log(
    'find() --> ',
    numbersArr.find((num) => num > 5)
  ) // 9

  // ----------- 6) GET all items that pass a specified test -----------
  appDiv.insertAdjacentHTML('beforeend', `<p>${getExamples[5]}</p>`)
  console.log('===', getExamples[5])
  // a) Mutating methods:
  let indexNumGt3 = numbersArr.sort().findIndex((num) => num > 3)
  console.log(
    'sort(), findIndex(), splice() --> ',
    numbersArr.splice(indexNumGt3)
  ) // [4, 5, 8, 9]
  console.log('changed array: ', numbersArr) // changed --> sorted and 4 items removed
  numbersArr = [...numberOrig] // reset numbers array to original

  // b) Non-mutating methods
  console.log(
    'filter() --> ',
    numbersArr.filter((num) => num > 3)
  ) // [5, 4, 9, 8]
}
