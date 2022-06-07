
const functions = {
    sum : (string) => string.length,
    add:(strings)=> strings.split('').reverse().join(''),
    capitalize:(strins)=>strins.charAt(0).toUpperCase()+ strins.slice(1)
  
    
}



module.exports = functions 
