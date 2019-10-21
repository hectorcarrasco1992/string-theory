function crazyCase(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if(i % 2 === 1){
      newStr = newStr + str.charAt(i).toUpperCase()
    } else {
      newStr = newStr + str.charAt(i)
    }
  }
  return newStr.toLowerCase()

}
    
    



  



function ciEmailify(name) {
  
  for (let i = 0;i < name.length;i++ ){
   name = name.replace(' ','.')
    }

    return name.toLowerCase() + '@codeimmersives.com'

    
    
  }
  

function exclaim(str) {
  for (let i = 0; i < str.length; i++){

    str = str.replace('?', '!')
    str = str.replace('.', '!')
  }

   return str
}
function reverse(str) {
   let reversed = ""
   for (let i = str.length -1;i > 0;i--){
    reversed = reversed + str[i]
  }
  return reversed


 }

function crazyCase2ReturnOfCrazyCase() {
}

function titleCase() {
}

function onlyVowels() {
}

function crazyCase3SonOfCrazyCase() {
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}