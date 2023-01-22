/*
Write a function called extractValue which accepts an array of objects 
and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {


    return arr.reduce(function(acc, next, idx){
        //will return the acc from each callback function which we will define here
        acc[idx] = arr[idx][key]
        return acc
        //we are using the accumulator and writing with the iterable idx
        //so acc[0] = arr[0]['name] essentially assigns our accumulator and empty arrays first element as the value of our first array element under the key property which name was passed.


    },[]) //our second parameter is an empty array which will be the acc

    
    }

    //had to look at the solution for this one so let me take some notes to understand the functionality
    //the function is taking in an array and key
    //we are returning reduce on the array
    //for each iteration we push the accumulator (initialized in the second parameter as our empty array variable)
    //we then return our accumulator so that the next iteration can process it and its nextval. 
    // will try to rewrite this as my own now. wish me luck.


/*
Write a function called vowelCount which accepts a string and returns an object 
with the keys as the vowel and the values as the number of times the vowel appears in the string.
 This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){

    let insensitive = Array.from(str.toLowerCase())
    let vowels = "aeiou"

   return insensitive.reduce(function(acc,next){
    if(vowels.indexOf(next) !== -1){
    if(acc[next]){
        acc[next] += 1;

    } else {
        acc[next] = 1;

    }
} else {
    null  //if the next character ofthe array is not a vowel (indexOf !== -1) then do nothing
}
return acc //after updating our accumulator depending on the conditionals, we still have to return it from the callback to update
        
    },{}) //we will set our acc to an empty object which we want to populate 
    
    
  }

  /*this one I had to consult the solution as I was quite lost, but with some reference was able to build the function by myself
  I will walk through the process to help solidify my understanding 
  so we make the arrays and elimate case sensitivity in the first parts
  then we declare our reduce method.  which is going to use an annonymous callback function and what will be returned from the callback function will then
  become our accumulator. 
  My initial understanding of accumulators was with summing numbers and some string concatenation but to construct an object accumulatevly through reduce
  was a little bit exotic. 
  we used an empty object as the inital accumulator passing it in through the secondary parameter available in the callback of reduce. 
  acc[next] initially refers to the object[array[0]] aka the first character. 
  our conditional statement evaluates if object.array[0] is truthy, and if not with the else if will assign that key and the value of one to the object. 
  
  when we finish our if/else if statement we then return acc to update the accumulator and continue to the next stage of accumulation. 
  now we have an accumulator that will resember {array[0]: 1} aka an object with the first character established as a key and a value of one.
  in the sense that the character has been found once

  running through the method further if a key has already been declared within the object we increment its value by one. 
  we use an array of vowels and .indexOf to see if it does not return -1, to see if it is a vowel.
  and then when we have iterated through the entire string, we return our accumulator (aka our populated object)



/*
Write a function called addKeyAndValue which accepts an array of objects 
and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {

    return arr.reduce(function(acc,next,idx){
    
    acc[idx][key] = value; //our accumulator is an existing array, lets access it with index (starting at 0)
    //in other words, array item 0.key = assigned to value (adds the property to the object)

    return acc
//lets return and update our accumulator

    },arr) //we are initialiting this function with the array we passed in (we want to add to an existing array)
   

}


//we initalize our returned and reduced array, with the array that we pass into the function
//we tehn iterate through the array with the index, which will automatically iterate via the function 
//for each iteration we assign the value of the passed value to the key which we define as an argument in our initial function 
//we return our accumulated array on each iteration
/*



Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it.
 The partition function should run the callback function on each value in the array and if the result of the 
 callback function at that specific value is true, the value should be placed in the first subarray. 
 If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {

   return arr.reduce(function(acc,next){
    
    
    if(callback(next) === true){
        acc[0].push(next)
    } else {
        acc[1].push(next)
    }
    return acc

    },[[],[]]) //lets initialize our method with two arrays (we can locate them by acc[0] and acc[1] values passed into will be indexed one step deeper into the scope)



     

}

/*what happened here after consulting the solutions is that we reduce as a method to return two arrays, one meeting the criteria of the
callback and the other for those that do not pass. 

our conditional statement evaluates if next (after our initial accumulator of two empty arrays) evaluates to true, 
and if it does it will be pushed into element one of our accumulator (our passing array) and if it failse it will be passed into the
second array acc[1]
after either pushing action we return our new accumular and it will update and populate both arrays one element at a time
then the reduce function reaches the end and the two full partioned arrays are returned */