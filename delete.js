export default function deleteMethods(appDiv) {
  console.log('======== DELETE METHODS ========')

  // example arrays:
  let numbersArr = [2, 3, 1, 5, 4, 3, 9, 2, 8]
  let numberOrig = [2, 3, 1, 5, 4, 3, 9, 2, 8]
  console.table(numbersArr)

  // Methods that delete items can be either mutating or non-mutating

  // Delete item(s)
  const example1 = '1) delete first item'
  console.group(example1)
  //  methods that change the array
  console.log('answer 1a')
  //  methods that creating a new array
  console.log('answer 1b')
  console.groupEnd(example1)

  //  2) delete last item
  const example2 = "2) delete last item'"
  console.group(example2)
  //  methods that change the array
  console.log('answer one')
  //  methods that creating a new array
  console.log('answer two')
  console.groupEnd(example2)

  //  3) delete a group of items based on index
  const example3 = '3) delete a group of items based on index'
  console.group(example3)
  //  methods that change the array
  console.log('answer one')
  //  methods that creating a new array
  console.log('answer two')
  console.groupEnd(example3)

  //  4) delete a group of items based on what the item is
  console.log('4) delete a group of items based on what the item is')
  //  methods that change the array
  console.log('answer one')
  //  methods that creating a new array
  console.log('answer two')
}
