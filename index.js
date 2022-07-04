// Code your solution here 
function findMatching(collection, string){
    return collection.filter((possibleMatch) => possibleMatch.toLowerCase() === string.toLowerCase())
}
console.log("~~~~~~~~~~")
function fuzzyMatch(collection, testString){
    return collection.filter((possibleMatch) => possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
}
console.log("~~~~~~~~~~")
function matchName(collection, query){
    return collection.filter((entry) => entry.name === query)
}