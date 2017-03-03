console.log('A')
// new Promise((resolve,reject) => {
//   console.log('B')
//   resolve('PROMISE RESULT')
//   console.log('C')
// })
Promise.resolve('PROMISE RESULT')
.then((result) => {
  console.log('D', result)
})
.then((result) => {
  console.log('E', result)
})
.then((result) => {
  console.log('F', result)
})
console.log('G')
