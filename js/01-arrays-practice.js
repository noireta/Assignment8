let namesMovies = [];
let movies = [];
let favoriteMovies =[];
let leastFavMovies = [];
let latMovies =     [];
let multiDim = [];


//STEP 1
console.log('.............STEP1 Results...........');

namesMovies = ['Parasite', 'Tenet', 'The Outpost', 'Onward','Little Women'];
console.log(namesMovies[2]);

//STEP 2
console.log('.............STEP2 Results...........');

  movies = new Array(5);
  console.log(movies.length);

  movies [0] = 'Parasite';
  movies [1] = 'Tenet';
  movies [2] = 'The Outpost';
  movies [3] = 'Onward';
  movies [4] = 'Little Women';
  
  console.log(movies[0]);
  

 //STEP 3
console.log('.............STEP3 Results...........');

movies [0] = 'Parasite';
movies [1] = 'Tenet';
movies [2] = 'Jojo Rabbit';
movies [3] = 'The Outpost';
movies [4] = 'Onward';
movies [5] = 'Little Women';

console.log(movies.length)


 //STEP 4
 console.log('.............STEP4 Results...........');

let moviesName = ['Parasite', 'Tenet', 'The Outpost', 'Onward','Little Women'];
delete moviesName[0];               			
console.log( moviesName);



 //STEP 5
console.log('.............STEP5 Results...........');

 favoriteMovies = ['Parasite', 'Tenet', 'The Outpost', 'Onward','Little Women','The Witches', 'Greenland'];
for (let movie in favoriteMovies ){
    console.log(favoriteMovies[movie]);
}


//STEP 6
console.log('.............STEP6 Results...........');

 favoriteMovies = ['Parasite', 'Tenet', 'The Outpost', 'Onward','Little Women','The Witches', 'Greenland'];
for (let i of  favoriteMovies) {
	console.log(i);				
}


//STEP 7
console.log('.............STEP7 Results...........');

favoriteMovies = ['Parasite', 'Tenet', 'The Outpost', 'Onward','Little Women','The Witches', 'Greenland'];
    for (let i of favoriteMovies.sort()){
      console.log(i);
 }
 	

// //STEP 8
console.log('.............STEP8 Results...........');

 leastFavMovies = ['La Dolce Vita','Casuggh', 'Bambu'];
console.log("Movies I like \n")
for (let movie in favoriteMovies ){
  console.log(favoriteMovies[movie]);
}

console.log("Movies I regret watching \n")
    for (let movie in leastFavMovies ){
  console.log(leastFavMovies[movie]);
}

 //STEP 9
 console.log('.............STEP9 Results...........');


    movies = favoriteMovies.concat(leastFavMovies);
     for (let i of  movies.reverse()){
         console.log(i);   

}

//STEP 10
console.log('.............STEP10 Results...........');

 latMovies = movies.pop();
console.log(latMovies);

//STEP 11

console.log('.............STEP11 Results...........');

let firstItems = movies.shift();
console.log(firstItems);

//STEP 12

console.log('.............STEP12 Results...........');

 movies = [];
movies [0] = 'Parasite';
movies [1] = 'Tenet';
movies [2] = 'Jojo Rabbit';
movies [3] = 'The Outpost';
movies [4] = 'Onward';
movies [5] = 'Little Women';

movies.splice(1, 3,'Legacy Of Lies ' , 'The Courier', 'Karnan');
console.log(movies);

 //STEP 13

console.log('.............STEP13 Results...........');

 multiDim = [['Parasite',1],['enet',2],['The Outpost',3],['ward',4],['Little Women',5]];

let displayMovies = multiDim.filter((item) =>{
  item.filter((asdf) =>{
    if (typeof asdf === 'string'){
      console.log(asdf);
    }

  });
  
});

 //STEP 14
console.log('.............STEP14 Results...........')

let stringArray =['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];
 
    let showEmployee = function( ...empArray){
      console.log('Employees: \n');
      for(let i= 0 ; i <empArray.length ; ++i) {
      console.log(empArray[i]);
     
     }
            
    };
    
    showEmployee(...stringArray);
   
//STEP 15
console.log('.............STEP15 Results...........');

function filterValues (testData) {
  let expResult = testData.filter((item) => { 
    if(
      (item === false)||(item === null)||(item === 0)||(item === '')
      
    ){
      return false;
    }else{
      return true;

    }
    
  });

    return expResult;
};

    console.log(filterValues([58,'', 'abcd',true,null, false,0 ]));
   

//STEP 16
console.log('.............STEP16 Results...........');


function random_item(items)
{

return items[Math.floor(Math.random()*items.length)];
     
}

var items = [1, 22, 30, 4, 55, 68, 71, 82, 9, 10];
console.log(random_item(items));


//STEP 17
console.log('.............STEP17 Results...........');

function largestNum(arr){
let largest = arr[0];
for (let i = 0; i < arr.length; i++){
     if ( arr[i] >= largest ){
       largest = arr[i];
     }
  }

  return largest;
}
let larNum = largestNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 20]);
console.log(larNum);




