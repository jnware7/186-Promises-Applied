
var alwaysThrows = (integer) => {
  throw new Error('OH NOES ERROR at -> '+integer)
}

var iterate = (integer) => {
  console.log(integer)
  if (integer >= 5) throw new Error('whoaaaa 5 is huge')
  return integer + 1
}

Promise.resolve(0)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(error => {
    console.log('FROM CATCH', error)
    return 0
  })
  .then(iterate)
  .then(iterate)
  .then(iterate)
