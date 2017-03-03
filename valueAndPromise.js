 var attachTitle = (args) => {
   return 'DR. ' + args
 }
Promise.resolve('MANHATTAN')
.then(attachTitle)
.then((result) => console.log(result))
