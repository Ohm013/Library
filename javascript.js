//First confused on how to start in general, how would the data typed trasnfer to js and then turn into an object that is pushed into an array
//Solution: first query selected the form elements and made sure to add ".value" at the end so now we have the user inputs value
//.value will get what the user has written

// Problem 2: How to make user inputs into one object 


//How to display stuff that is in the array, would need to loop over it for sure.
//


//If there is only one button in a form, the browser will default use it as a way to send the user inputs somewhere
//So to stop the form from submitting you use ".preventDefault();"
const addBookBtn = document.querySelector('.addBook');
const title = document.querySelector('#book_name').value ;
const author = document.querySelector('#author').value;
const pages = document.querySelector('#pages').value;
const read = document.querySelector('#read').value; //make sure to add value or youd have to everytime you mention the variable
const myBooks = document.querySelector('.myBooks');


const myLibrary = [];

function Book () {
  

}




addBookBtn.addEventListener('click', addBookToLibrary); //once you click add book it should send results to myLibrary Array

function addBookToLibrary(e) {

    e.preventDefault();

    let book = {
        title: title ,
        author: this.author,
        pages: this.pages ,
        read: this.read 

        
    }
    console.log(title);
    myLibrary.push(book);
    myBooks.textContent = myLibrary;

}


//function showBooks (){
  //  for (let i = 0; i >= myLibrary.length - 1 ; i++) {
    //    console.log([i]);
   // }
//}

//showBooks() ;
