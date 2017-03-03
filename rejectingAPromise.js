var promise = new Promise((resolve,reject) => {
  setTimeout( () => reject(new Error('REJECTED!')), 300 )
})

promise.then(
  (result) => { console.log('GOOD', result) },
  (error) => { console.log(error.message) }
)

promise.then((result) => {
  throw new Error()
  console.log('GOOD', result)
}).catch((error) => {
  console.log(error.message)
})
