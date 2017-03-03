var when300msPasses = new Promise((fulfill,reject) => {
  setTimeout( () => {
    fulfill('FULFILLED!')
  }, 300)
})

when300msPasses.then((response) => {
  console.log(response)
})
