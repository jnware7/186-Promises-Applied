const JSONParseAsAPromise = (json) =>{
  return new Promise((resolve, reject)=>{
    try {
      const data = JSON.parse(json)
      resolve(data)
    } catch(error) {
      reject(error)
    }
  })
}
JSONParseAsAPromise('{"hello",,,"world"}')
  .then(
    data => {
      console.log('Parsed json ->', data)
    },
    parseError => {
      console.log('JSON Parse Error ->', parseError)
    }
  );
