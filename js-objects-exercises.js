// NORMAL MODE ( 0 - 6)


// Part 0

// Write a function called flipColor. This function may be
// used to change the color of a tile in a game. It should
// take as input an object. If that object's color property
// has the value blue, it should change it to red, and
// vice-versa.


var tile = {
    width: "200px",
    height: "200px",
    background: "black",
    color: "blue"
}
var flipColor = function(obj){

   if(obj.color === 'blue'){

      obj.color = 'red';
   }
   else if (obj.color === 'red'){
      obj.color = 'blue'
   }

return obj

}

var tile2 = flipColor(tile)
console.assert(tile2.color === "red")
console.assert(flipColor(tile2).color === "blue")


// Part 1

// Write a function called getFullNames that takes an array
// of objects with first and last names and returns an array
// of strings, where each string is a customer's full name.
var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]
var getFullNames = function(cusArr){
	var arrOfNames = []
    var fullName = ''

	for(var i = 0; i < cusArr.length; i++){



     arrOfNames.push(fullName= cusArr[i].first + ' '+ cusArr[i].last)

    }
    return arrOfNames

}
console.assert(getFullNames(customers)[1] === "John Smith")
console.assert(getFullNames(customers)[3] === "Jack White")
// Part 2
// Write a function that accepts an an array of strings
// with first and last names and returns an array of objects
// that each have the property `firstName` and `lastName` and
// corresponding value

var realNinjas = [
  'Chuck Norris',
  'Jackie Chan',
  'Lucy Liu',
  'Billy Blanks',
  'Michelle Yeoh',
  'Jet Li'
]
var createListOfObjects = function(arrOfStr){
   var empArr = [];

	var finArr = [];
   for(var i = 0; i < arrOfStr.length; i++){
          var empObj = {};
       var empArr = arrOfStr[i].split(' ')

      empObj.firstName = empArr[0];
       empObj.lastName = empArr[1];

           finArr.push(empObj)


   }
    return finArr
}

var ninjaListOfObjects = createListOfObjects(realNinjas)

console.assert(typeof ninjaListOfObjects[0] === "object")
console.assert(ninjaListOfObjects[0].firstName === "Chuck")
console.assert(ninjaListOfObjects[1].lastName === "Chan")
console.assert(ninjaListOfObjects[3].firstName === "Billy")



// Part 3

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. The dog *constructor*
// (which is, almost, what this is) should take a name input, and the dog should receive the
// assigned name.
var generateDog = function(dogNm){
var newDog = {};
    newDog.name = dogNm
    newDog.legs = 4
    newDog.weight = "100lbs"
    newDog.color = 'black'
    newDog.speak = function(spkStr){
      var spkStrSplit = spkStr.split(' ');
      var rrrStr = "";
      var rrrArr = [];

      for(var i = 0; i < spkStrSplit.length; i++){

        var wordSplit = spkStrSplit[i].split('');
        wordSplit[0] = 'r'

        var rWord = wordSplit.join('')

        rrrArr.push(rWord);
      }

      var rrrStr = rrrArr.join(" ")
      return rrrStr;
    }

    return newDog;
}

var dog = generateDog('rex')


console.assert(dog.legs === 4)
console.assert(dog.name === 'rex')

var dog = generateDog('carl')
console.assert(dog.name === 'carl')


// Give the dog a method called .speak(). speak() should receive a string as input and
// return a new version of that string where the first letter of every word is replaced
// with the letter 'r'.

console.assert(dog.speak('hello hommie'))
console.assert(dog.speak('i love you') === 'r rove rou')
console.assert(dog.speak('so hungry') === 'ro rungry')


// Part 4

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.

// e.g:
// pluck(stooges, 'name') should yield the array, ['moe','larry','curly']



var pluck = function(arrOfObj, prop){

   var arrOfProp = [];

   for(var i = 0; i < arrOfObj.length; i++){
      arrOfProp.push(arrOfObj[i][prop])
   }


      return arrOfProp
}


var stooges = [
   {name: 'moe', age: 40, hairStyle: "bowl cut" },
   {name: 'larry', age: 50, hairStyle: "balding"},
   {name: 'curly', age: 60, hairStyle: "buzzed"}
]

console.assert( pluck(stooges, 'name')[0] === 'moe' )
console.assert( pluck(stooges, 'hairStyle')[2] === "buzzed" )
console.assert( pluck(stooges, 'age')[2] === 60 )



// Part 5

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

// Note that your counts should NOT be case-sensitive.

var sampleText = "I'm tired of trying to find happiness through lies and self-medicating. If you need me, I'll be at the bar. The only thing I found in the fridge was a dead dove in a bag. But anyhoo, can you believe that the only reason the club is going under is because it's in a terrifying neighborhood? Oh, I'm sorry, I forgot… your wife is dead! They once called me the worst audience participant Cirque du Soleil ever had. \
I need a fake passport, preferably to France. I like the way they think. Oh, COME ON! YOU'RE the Chiclet! Not me. Caw ca caw, caw ca caw, caw ca caw! It's ok. You be with Yam. So did you see the new Poof? His name's Gary and we don't need anymore lawsuits. If this were a Lifetime Moment of Truth movie, this would be our act break. But it wasn't. Michael, look, this has got to stop. I mean, flattered? Yes. Interested? Not tonight. \
I'm foolish and I'm funny and I'm needy. Am I needy? Are you sure I'm not needy? 'Cause I feel needy sometimes. Obviously this blue part here is the land. \
Let's see some bananas and nuts! This was a big get for God. They don't allow you to have bees in here. I want to cry so bad, but I don't think I can spare the moisture. No, Pop-pop does not get a treat, I just brought you a [bleep]ing pizza. It walked on my pillow! I'll buy you a hundred George Michaels that you can teach to drive! A group of British builders operating outside the O.C."
// input string
var getCounts = function(str){
   var newObj = {};
   var wordList = str.split(" ")

   for(var i = 0; i < wordList.length; i++){
      var word = wordList[i].toLowerCase();

      word = (removePunc(word))
      if(typeof newObj[word] === 'undefined'){

         newObj[word] = 1;

      }else{newObj[word] = newObj[word] + 1 }
   }

      return newObj
}
// PART 2 FUNCTION
var removePunc = function(str){

   var strSeperated = str.split("")
   var puncDumpStr = []
   var noMorePuncArr = []
   var noMorePuncStr = ""
   for(var i = 0; i < strSeperated.length; i++){

      if(strSeperated[i] === "." || strSeperated[i] === "?" || strSeperated[i] === "!" || strSeperated[i] === ","){

         puncDumpStr.push(strSeperated[i])
      }else{noMorePuncArr.push(strSeperated[i])}
      noMorePuncStr = noMorePuncArr.join("")
   }

   return noMorePuncStr
}
var wordFrequencyObject = getCounts(sampleText)


console.assert( wordFrequencyObject.need === 3 )
console.assert( wordFrequencyObject.you === 9 )

// EXPLORER MODE - PART 2
//-----------------------------
console.assert(wordFrequencyObject.needy === 4)
console.assert(wordFrequencyObject.caw === 6)


// Part 6

// Write a function called reverseObject(). It should take as input an object,
// and it should output a new object where the keys and values are reversed.

var reverseObject = function(obj){
      var newObj = {}

      for(var prop in obj){
         var newProp = obj[prop]
         newObj[newProp] = prop

      }


   return newObj
}
var object = {
    occupants: 4,
    apartment_no: "2b",
    structural_integrity: "failing"
}

var reversed = reverseObject(object)
console.assert( reversed['2b'] === 'apartment_no' )

//******************************
// ADVENTURE MODE ( 7 - 10 )

// Part 7

// Write a function called reverseAll(). It should take as input an array of
// objects, and it should output an array of objects with the keys and values
// reversed.


var reverseAll = function(arrOfObj){

var arrFlipd = []
   for(var i = 0; i < arrOfObj.length; i++){
      var objToFlip = arrOfObj[i]
      var flipdObj = {};
      for(prop in objToFlip){

         var newProp = objToFlip[prop]

         flipdObj[newProp] = prop

      }
      arrFlipd.push(flipdObj)

   }

   return arrFlipd
}

var users = [
   { willis: 'president@gmail.com',hobby: 'basketball' , favoriteFood: "pate" },
   { benzo: 'bonjourben@yahoo.com', hobby:'dealmaking' , favoriteFood: "steak" },
   { yammer: 'yeb@aol.com', hobby: 'portraiture',  favoriteFood: "croissant" }
]
// should yield: [{'president@gmail.com': 'obama',basketball: 'hobby'}, ....]

var flippedUsers = reverseAll(users)

console.assert( flippedUsers[0]['president@gmail.com'] === 'willis' )
console.assert( flippedUsers[1]['bonjourben@yahoo.com'] === 'benzo' )
console.assert( flippedUsers[1].dealmaking === 'hobby' )
console.assert( flippedUsers[2].croissant === 'favoriteFood' )


// Part 9

// Create an object that has a name attribute and a method called personalize.
// personalize should take a function as input. when personalize is called,
// an introductory string should be inserted before the input function's
// return value. Use the example in the console.assert to understand
// exactly how you should write the method. Including the period!


var politeObject = {
    name: "Frank",
    personalize: function(func){
   return "Hi, my name is " + this.name + ", and the result is " + func() + "."
}
}

var tellEm = function() {
    return "I know what is going on here"
}

var promoteJS = function(){
   return "JavaScript is quite amazing"
}

var personalizedResult = politeObject.personalize(tellEm)
var anotherPersonalNote = politeObject.personalize(promoteJS)

console.assert( personalizedResult === "Hi, my name is Frank, and the result is I know what is going on here." )
console.assert( anotherPersonalNote === "Hi, my name is Frank, and the result is JavaScript is quite amazing." )

 //  you may need to use the special `this` keyword for this problem.


 // part 10
 //
 // Write a function where() that takes two inputs, a list of objects and
 // a properties object. It should return a new list containing only those
 // objects that meet the key-value conditions in the properties object.

var where = function(arrOfObj, fullObj){
               var simplifiedList = []

   for(var i = 0; i < arrOfObj.length; i++){
         var hasAllPropValues = true
         var singleObj = arrOfObj[i]


         for(var prop in fullObj){

            if(fullObj[prop] != singleObj[prop]){

               hasAllPropValues = false
            }

         }

         if(hasAllPropValues === true){
            matchingObj = singleObj

            simplifiedList.push(matchingObj)

         }


   }
   return simplifiedList

}

 var plays = [
     { title: "Cymbeline", author: "Shakespeare", year: 1623 },
     { title: "The Tempest", author: "Shakespeare", year: 1623 },
     { title: "Some Shitty Poem", author: "TS Eliot", year: 1623 },
     { title: "Seventeenth Century Religion", author: "Canterbury", year: 1623 },
     { title: "Hamlet", author: "Shakespeare", year: 1603 },
     { title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600 },
     { title: "Macbeth", author: "Shakespeare", year: 1620 },
     { title: "Death of a Salesman", author: "Arthur Miller", year: 1949 },
     { title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949 }
 ]

 var sh8sprQuery = where(plays, {author: "Shakespeare"})
 console.assert( sh8sprQuery instanceof Array )
 console.assert( sh8sprQuery.length === 5 )
 console.assert( sh8sprQuery[0]['title'] === "Cymbeline" )


 var sh8sprQuery2 = where(plays, {author: "Shakespeare", year: 1611})
 console.assert( sh8sprQuery2.length === 0 )


 var sh8sprQuery3 = where(plays, {author: "Shakespeare", year: 1623})
 console.assert( sh8sprQuery3.length === 2 )


 var midCentPlays = where(plays, {year: 1949})
 console.assert( midCentPlays.length === 2 )
