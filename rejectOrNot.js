var promies = new Promise((resolve,reject)=>{
  resolve('I FIRED')
  console.log('B')
  reject(breakSometing())
  console.log('C')
})
.then(
  (response) => {console.log(response)},
  (Error) => {console.log(Error.message)}
)
