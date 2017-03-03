var promise = new Promise((resolve,reject)=>{
  resolve('YOU MADE IT')
})
.catch((error)=> {
  console.log(error.message)
})

var promise1 = Promise.resolve('YOU MADE IT')
var promise1 = Promise.reject(new Error('whooops'))
