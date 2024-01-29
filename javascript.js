
const addBookBtn = document.querySelector('.addBook');
const myBooks = document.querySelector('.myBooks');
const form = document.querySelector(".bookForm")



const fakeBook = {
  title: "James",
  author: "Me"
}

const faceBook = {
  title : "Ohm",
  author: "Me2"

}

const myLibrary = [fakeBook, faceBook];


function Book (title,author,pages,read) {

  this.title = title;
  this.author = author ;
  this.pages = pages;
  this.read = read;
}


addBookBtn.addEventListener('click', addBookToLibrary); //once you click add book, it should send results to myLibrary Array

function addBookToLibrary(e) {
  const title = document.querySelector('#book_name').value ;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read'); //make sure to add value or youd have to everytime you mention the variable

  e.preventDefault();

  const input = new Book (title,author,pages,read); //need to make it where each submit creates a prototype of the book

  myLibrary.push(input);
  console.log(myLibrary);
  form.reset(); 
  


 
      //card.textContent = myLibrary.slice(-1); //" Title: " + myLibrary[i].title + " Author: " + myLibrary[i].author + " Pages: " + myLibrary[i].pages + " Read? " + myLibrary[i].read; 
    
} //got the display to work. Doesn't show one book at a time, will show all of them now.
  



function displayBooks (){
  for (let i = 0  ; i < myLibrary.length  ; i++) {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.textContent = " Title: " + myLibrary[i].title + " Author: " + myLibrary[myLibrary.length-1].author + " Pages: " + myLibrary[i].pages + " Read? " + myLibrary[myLibrary.length -1].read;  ;
    myBooks.appendChild(card);
    console.log(card);

}} //try making looop work with fake books in array then move to adding books thru user input.





//myLibrary.forEach(input => {
     //trying to create a new card everytime a book is submitted.
  //  card.textContent = Object.values(input);
    
//});



//Problem 1: confused on how to start in general, how would the data typed trasnfer to js and then turn into an object that is pushed into an array
//Solution 1: first query selected the form elements and made sure to add ".value" at the end so now we have the user inputs value
//.value will get what the user has written

//Problem 2: How to make user inputs into one object 
//Solution 2: add event listener to add me button to initiate addBookToLibrary function to make user inputs into one object.


//Problem 3: How to display stuff that is in the array, would need to loop over it for sure. I tried myBooks.textContent = myLibrary but it displays [object Object] not the actual object properties just showing it is an object in the array.
// Solution 4: looped worked to show what is in the myLibrary array

//Problem 4: Everytime a book is added, it displays the whole array again instead of just adding the new one to th display. 
// If i have two books on display and add one and submit, it will show 5 books. two original , plus the 2 original and the new one.

//If there is only one button in a form, the browser will default use it as a way to send the user inputs somewhere
//So to stop the form from submitting to somewhere you use ".preventDefault();"

//Problem 4: It is not properly reading correctly if the book has been read or not when box is checked

//let book = {
  //title ,
  //author,
  //pages ,
  //read
  //not recognizing the book title, authors etc.  Recognized after I put the querySelected elements inside the object
//}

//myLibrary.push(" Title: " + book.title + " Author: " + book.author + " Pages: " + book.pages + " Read? " + book.read);
//myBooks.textContent = myLibrary; 
//console.log(myLibrary);