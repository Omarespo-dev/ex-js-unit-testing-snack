function getInitials(name){
    return name.slice(0,2)
}


function createSlug(string){
   return string.toLowerCase()
}


function average(arr){
    const somma = arr.reduce((acc, currentElement) => {
        return (acc + currentElement) 
    },0)

    const media = somma / arr.length
    return media
}

function createSlug2(string){
    return string.replaceAll(" " ,"-").toLowerCase()
}


function isPalindrome(str){
    const splitStringReversedJoin = str.split("").reverse().join('')

    if (str.toLowerCase() === splitStringReversedJoin.toLowerCase()) {
        return true
    }else{
        return false
        
    }

}


function createSlug3(title){
   
    if(title === ""){
        throw new Error("Il titolo e vuoto");
    }else if (!title){
        throw new Error("Il titolo non e valido");
    }
}

function findPostById(arr,id){
    return arr.find(post => post.id === id)
}
module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome,
    createSlug3,
    findPostById
}