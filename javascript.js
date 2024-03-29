const addBookBtn = document.querySelector('.addBook');
const myBooks = document.querySelector('.myBooks');
const form = document.querySelector(".bookForm");



const fakeBook = {
  title: "James",
  author: "Me",
  read: false,
  pages: 435
}

const faceBook = {
  title : "Ohm",
  author: "Me2",
  read: true,
  pages: 238

}

let myLibrary = [fakeBook, faceBook]; //changed "const" to "let" so filter MyLibrary could work because myLibrary is getting edited


function Book (title,author,pages,read) {
  this.title = title;
  this.author = author ;
  this.pages = pages;
  this.read = read;
}


addBookBtn.addEventListener('click', addBookToLibrary); //once you click add book, it should send results to myLibrary Array

function addBookToLibrary(e) {
  const title = document.querySelector('#title').value ;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.getElementById('read').checked; //make sure to add value or youd have to everytime you mention the variable

 
  e.preventDefault();

  const input = new Book (title,author,pages,read); //need to make it where each submit creates a prototype of the book

  myLibrary.push(input);
  console.log(myLibrary);
  displayBooks(input); 
    
} //got the display to work. Doesn't show one book at a time, will show all of them now.
  

function displayBooks (){
  
  myBooks.textContent = " "; // this right here is IMPORTANT! It clears the content of the display, so when it loops MyLibrary, it only adds the new added book instead of having the already added books show up twice
  
  for (let i = 0  ; i < myLibrary.length  ; i++) { //loop over myLibrary
    const cards = document.createElement("div");
    cards.classList.add("cards");

      const bookName = document.createElement("h2");  //card elements 
      bookName.textContent =  myLibrary[i].title;
      
      const writer = document.createElement("h4");
      writer.textContent = "Author: " + myLibrary[i].author;  

      const numPages = document.createElement("h4");
      numPages.textContent =  myLibrary[i].pages + " pages"

      const readBtn = document.createElement("button");
      readBtn.classList.add("readBtn");
        if (myLibrary[i].read === true) {  //to target checkbox , add ".checked" and checked means true , unchecked means false
                                             
        green(readBtn);  //read button for each card display
      }else if (myLibrary[i].read === false) {
          red(readBtn);
      }


      const removeBtn = document.createElement("button");
      removeBtn.classList.add("removeBtn");
      removeBtn.textContent = "Remove";
    
   

      removeBtn.addEventListener('click', (e)=>{
        
        var target = e.target.parentNode.firstChild.textContent; //targets card heading/titleS

         myLibrary = myLibrary.filter(book => book.title != target) // !!!!! filter is the keyword I needed!! Removes the book with the same title as target which is the heading of the clicked on card                
         displayBooks(); //refreshes the display
       
      })

    readBtn.addEventListener('click', () => {  //toggles read btn status when clicked
      if (readBtn.textContent == "Read") {
        red(readBtn);
        myLibrary[i].read = false; //added this so it targets the readBtn and gives it a true or false value, not just textContent that shows read or unread

      }else if (readBtn.textContent == "Unread"){
        green(readBtn);
        myLibrary[i].read = true;  //So now the true or false won't change back to original status even if new book is added. Will stick to the status of when it is clicked on.

      }});

  cards.append(bookName, writer, numPages, readBtn, removeBtn); //"append" to upload multiple children
  myBooks.appendChild(cards);



}}//try making looop work with fake books in array then move to adding books thru user input.
displayBooks();




function green (button) {    //changes btn color to green or red
  button.textContent = "Read";     
  button.style.backgroundColor = "rgb(94, 234, 201)";    //green
  
}

function red (button) {
  button.textContent = "Unread";
  button.style.backgroundColor = "rgb(234, 94, 94)"; //red
  
}



//Problem 1: confused on how to start in general, how would the data typed trasnfer to js and then turn into an object that is pushed into an array
//Solution 1: first query selected the form elements and made sure to add ".value" at the end so now we have the user inputs value
//.value will get what the user has written

//Problem 2: How to make user inputs into one object 
//Solution 2: add event listener to add me button to initiate addBookToLibrary function to make user inputs into one object.


//Problem 3: How to display stuff that is in the array, would need to loop over it for sure. I tried myBooks.textContent = myLibrary but it displays [object Object] not the actual object properties just showing it is an object in the array.
// Solution 4: looped worked to show what is in the myLibrary array

//Problem 4: Everytime a book is added, it displays the whole array again instead of just adding the new one to th display. 
    // If i have two books on display and add one and submit, it will show 5 books. two original , plus the 2 original and the new one.
    //the loop iterates over the previously added books
//Solution #4 : Added "myBooks.textContent = "" to reset the display so it will only add the the newest book on display
  //Say it has book1 in the array, the displayBooks() resets the textContent to blank ""
  //Then it creates the card and appends it to myBooks
  //So now the book is on display, now when a another book is added, displayBooks() is initiated again
  //So myBooks.textContent = "" makes the display blank again and loops over the array and displays all the books in the array
  //But this happens instantly so book1 disappears but then book1 and book2 are added 
  //So now book1 will be in the same place as it was on the display and book2 next to it.
  //Instead of showing book1 book1 book2 like it would before bc the loop iterates over the previously added books


  //Problem #5 : The read status is changing all of them to the status of the newy added book
  //Solution #6 : Wasnt referring to the read status correctly. Instead of "if (read === true)"
     // I needed to use the read status of the current loop item so "myLibrary[i].read"


//Problem #6: the delete button keeps removing the first item in the array no matter which book u click delete on
    //It is not targeting the book that the delete button was clicked on
    //Only target the remove button of the card
//Solution #6 : Had to refer to "var target = e.target.parentElement.firstChild.textContent" which gets the h3 title of the book that remove was clicked on
    // Now that h3 title of clicked book is now targeted , can now use it.
    //In order to use findIndex(), a function has to be used inside the parenthesis. I tried putting the functino target in there but it would say "Ohm is not a function" bc Ohm was a sample book title
    // So now I had to create bookIndex function so I can use for findIndex()
    //bookIndex sees if target (the h3 heading title of the card that clicked remove) and myLibrary[i].title match
    //If they match, return myLibrary[i] so findIndex knows to look for that specific book in the array.
    // return target would NOT work bc target is the h3 "Ohm", findIndex cant look for html elements in an array,
    // and myLibrary[i].title would allow findIndex to look for the title property for each array book item
    //then finally bookIndex is sent to findIndex as findIndex(bookIndex);
    //when that index is found, I need to delete that book so I use myLibrary.splice(foundBook, 1);
  // this above solution DID NOT WORK!!

  //Solution #6:   myLibrary = myLibrary.filter(book => book.title != target) THIS WORKED
  // changed myLibrary from const to let so it can be modified
  //now it will filter all the books that do NOT have the same heading as the target and will put all of those books in the array
  //more like keep the non-matching books in the array. So the book that does match gets removed. 

//If there is only one button in a form, the browser will default use it as a way to send the user inputs somewhere
//So to stop the form from submitting to somewhere you use ".preventDefault();" 
// without .preventDefault, the form would submit once and refresh the page. Wouldnt be able to add multiple books


//Problem #7 : Read status chages to original status when new book is added
//Solution #7 : added "  myLibrary[i].read = true;" and "myLibrary[i].read = false" to the readBtn event listener so now it actually gives the true or false value to the button 
//Not only just changing the textContent but will change the value to true or false so the status wont go back to it's orignal status when new book is added .
//Because before it would only change the textContent but not the actual value, now the true or false is added so the status will only change when readBtn clicked on and will stay like that
//It wont go back to the orignal status when new book is added, will stay on the status if changed.


//let book = {
  //title ,
  //author,
  //pages ,
  //read
  //not recognizing the book title, authors etc.  Recognized after I put the querySelected elements inside the object
//}

//card.textContent = myLibrary.slice(-1); //" Title: " + myLibrary[i].title + " Author: " + myLibrary[i].author + " Pages: " + myLibrary[i].pages + " Read? " + myLibrary[i].read; 

//haveRead.addEventListener("click", () => {
      //read === checked 
     //  haveRead.textContent = ? "Read" :  "Not Read" ;
  
      //})



//myLibrary.forEach(input => {
     //trying to create a new card everytime a book is submitted.
  //  card.textContent = Object.values(input);
    
//});

 //return target.parentNode.remove(); // this removes the card visually but not from array 

//var target = e.target.parentElement.firstChild.textContent  ; //targets the h3 title of each card so I can match it with myLibrary[i].title
        //var targetTwo = e.target.parentElement.children[1].textContent; //target author of card, second child
        //console.log(target);        
        //console.log(targetTwo);

        ////true, if the h3 heading of the remove button and the book title (myLibrary[i].title) for the array item are the same
          //return myLibrary.target.remove();
         
            
          //FindIndex is coming out as -1 meaning not found or 0.
          //return the item in myLibrary and is then sent to findIndex above
        
      //  }  
  
      
       // var foundBook =  myLibrary.findIndex(bookIndex); //gets index of matched arrray book item. Hvae to put a function in the parenthesis of findIndex
        //console.log(foundBook);
        //myLibrary.splice(foundBook, 1); //deletes book for the one that clicked delete
        //displayBooks(); //this makes the book removed immediately rather than next time add book  is clicked