
const addBookBtn = document.querySelector('.addBook');
const myBooks = document.querySelector('.myBooks');

const myLibrary = [];

addBookBtn.addEventListener('click', addBookToLibrary); //once you click add book, it should send results to myLibrary Array


function Book (title,author,pages,read) {
  this.title = title;
  this.author = author ;
  this.pages = pages;
  this.read = read;
}



function addBookToLibrary(e) {
  const title = document.querySelector('#book_name').value ;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read'); //make sure to add value or youd have to everytime you mention the variable

  e.preventDefault();

  const input = new Book (title,author,pages,read);

  //need to make it where each submit creates a prototype of the book
  

}


//function showBooks (){
  //  for (let i = 0; i >= myLibrary.length - 1 ; i++) {
    //    console.log([i]);
   // }
//}

//showBooks() ;

//Problem 1: confused on how to start in general, how would the data typed trasnfer to js and then turn into an object that is pushed into an array
//Solution 1: first query selected the form elements and made sure to add ".value" at the end so now we have the user inputs value
//.value will get what the user has written

//Problem 2: How to make user inputs into one object 
//Solution 2: add event listener to add me button to initiate addBookToLibrary function to make user inputs into one object.


//How to display stuff that is in the array, would need to loop over it for sure.
//


//If there is only one button in a form, the browser will default use it as a way to send the user inputs somewhere
//So to stop the form from submitting to somewhere you use ".preventDefault();"

//Problem 4: It is not properly reading correctly if the book has been read or not when box is checked

let book = {
  title ,
  author,
  pages ,
  read
  //not recognizing the book title, authors etc.  Recognized after I put the querySelected elements inside the object
}

myLibrary.push(" Title: " + book.title + " Author: " + book.author + " Pages: " + book.pages + " Read? " + book.read);
myBooks.textContent = myLibrary; 
console.log(myLibrary);