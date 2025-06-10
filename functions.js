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


module.exports = {
    getInitials,
    createSlug,
    average
}