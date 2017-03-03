const first = () => Promise.resolve('hot dogs')
const sayYouLike = (food) => "i like "+food

first()
  // .then( (food) => {
  //   return sayYouLike(food)
  // })
  .then(sayYouLike)
  .then( (message) => {
    console.log(message)
  })
