function crazyCase(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if(i % 2 === 1){
      newStr = newStr + str.charAt(i).toUpperCase()
    } else {
      newStr = newStr + str.charAt(i).toLowerCase()
    }
  }
  return newStr

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
  let reversed = ''
  for (let i = str.length -1;i >= 0; i--){
    reversed = reversed + str.charAt(i)
  }

  return reversed


 }

function crazyCase2ReturnOfCrazyCase(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if(i % 2 === 1){
      newStr = newStr + str.charAt(i).toUpperCase()
    }  else {
    newStr = newStr + str.charAt(i).toLowerCase()
    }
  }
  return newStr
  }

function titleCase(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if(str[i-1] === ' '|| i === 0){
      newStr = newStr + str[i].toUpperCase()
    }else {
      newStr = newStr + str[i].toLowerCase()
    }
  
}
return newStr
}
function onlyVowels(str) {
let newStr = '' 
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i).includes('a')){
      newStr = newStr + str.charAt(i)
    }else if(str.charAt(i).includes('e')){
      newStr = newStr + str.charAt(i)
    }else if(str.charAt(i).includes('i')){
      newStr = newStr + str.charAt(i)
    }else if(str.charAt(i).includes('o')){
      newStr= newStr + str.charAt(i)
    }else if(str.charAt(i).includes('u')){
      newStr = newStr + str.charAt(i)
    }
  }
  return newStr
}
function crazyCase3SonOfCrazyCase(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if(i % 2 === 1){
      newStr = newStr + str.charAt(i).toUpperCase()
    } else {
      newStr = newStr + str.charAt(i).toLowerCase()
    }
  }
  return newStr
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