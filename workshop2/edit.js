// =========== Methods that EDIT item(s) ===========

// example arrays:
let numbersArr = [2, 3, 1, 5, 4, 3, 9, 2, 8]
let numberOrig = [2, 3, 1, 5, 4, 3, 9, 2, 8]

let lettersArr = ['a', 'd', 't', 'w', 'h', 'j', 'b', 'e', 'f', 'd', 'k', 'm']
let letterOrig = ['a', 'd', 't', 'w', 'h', 'j', 'b', 'e', 'f', 'd', 'k', 'm']

export default function editMethods(appDiv) {
  appDiv.insertAdjacentHTML('beforeend', `<h2>Edit Element(s)</h2>`)
  console.log('======== EDIT METHODS ========')
  console.log('Original numbers array: ', numberOrig)

  // ----------- 1) EDIT the item at a specified index -----------
  console.log('=== 1) EDIT the item at a specified index')
  // for example: change the array's first number to be 77
  // a) Mutating methods
  numbersArr[0] = 77
  console.log('[] notation --> ', numbersArr)
  // try using splice()
  console.log('changed array: ', numbersArr) // replaced first item
  numbersArr = [...numberOrig] // reset numbers array

  // b) Non-mutating methods
  console.log('with() --> ', numbersArr.with(0, 77))
  // try using toSpliced()

  //
  // ----------- 2) EDIT the first item with specified value  -----------
  console.log('=== 2) EDIT the first item that has a specified value')
  // for example: edit the first instance of number 9 to be number 7
  let indexOf9 = numbersArr.indexOf(9)
  // a) Mutating methods
  numbersArr[indexOf9] = 7
  console.log('[] notation --> ', numbersArr)
  // try using splice() to change the same index to -7
  // console.log('changed array: ', numbersArr)
  numbersArr = [...numberOrig] // reset numbers array

  // b) Non-mutating methods
  console.log('with() --> ', numbersArr.with(indexOf9, 7))
  console.log('toSpliced() --> ', numbersArr.toSpliced(indexOf9, 1, 7))

  //
  // ----------- 3) EDIT items between specified indexes -----------
  console.log('=== 3) EDIT items between specified indexes')
  // for example: edit values at indexes 1, 2, 3 to be numbers 11, 12, 13
  // a) Mutating methods
  numbersArr.splice(1, 3, 11, 12, 13)
  console.log('splice() --> ', numbersArr)
  numbersArr = [...numberOrig] // reset numbers array

  // b) Non-mutating methods
  console.log(numbersArr.toSpliced(1, 3, 11, 12, 13))

  //
  // ----------- 4) EDIT some items based on their value -----------
  console.log('=== 4) EDIT some items based on their value')
  // for example: for any number < 5, add 10 to that number
  // a) Mutating methods
  numbersArr.forEach((num, i) => {
    if (num < 5) numbersArr[i] += 10
  })
  console.log('forEach() --> ', numbersArr)
  numbersArr = [...numberOrig] // reset numbers array

  // b) Non-mutating methods
  const editSome = numbersArr.map((num) => {
    if (num < 5) return num + 10
    else return num
  })
  console.log('map() -->', editSome)

  //
  // ----------- 5) EDIT all items -----------
  console.log('=== 5) EDIT all items')
  // for example: double the value of each number
  // a) Mutating methods
  numbersArr.forEach((num, i) => (numbersArr[i] = num * 2))
  console.log('forEach() --> ', numbersArr)
  numbersArr = [...numberOrig] // reset numbers array

  // b) Non-mutating methods
  const editAll = numbersArr.map((num) => num * 2)
  console.log('map() --> ', editAll)
}
