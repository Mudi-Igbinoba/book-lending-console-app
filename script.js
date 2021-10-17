const books = ["Twilight by Stephanie Meyer", "Harry Potter: The Complete Collection by J.K. Rowling", "Red Queen by Victoria Aveyard", "Shadow and Bone by Leigh Bardugo","The Inheritance Games by Jennifer Lynn Barnes","Children Of Blood and Bone by Tomi Adeyemi"];
  const borrowedBook = [];
  const menu = ["View Books", "Borrow A Book", "View Borrowed Books", "Return A Book", "Exit"];
  
  const viewMenu = () => {
      console.log(`-------------------------------------------------------\n`);
    for(let i = 0; i < menu.length; i++){
      console.log(`${i + 1}. ${menu[i]} \n`)
    }
    const selectMenu = prompt("Select An Item: ");

    if (selectMenu == 1){
      displayBook();
      viewMenu();
    } else if (selectMenu == 2){
      displayBook();
      borrowBook();
      viewMenu();
    } else if (selectMenu == 3) {
      displayBorrowed();
      viewMenu();
    } else if (selectMenu == 4){
      returnBook();
      viewMenu();
    } else {
      console.log(`PLEASE INPUT A VALID MENU NUMBER!`)
      viewMenu();
    }
  }

  const displayBook = () => {
    console.log(`-------------------------------------------------------\n`)
    console.log("Books in the library are:");
      for(let i = 0; i < books.length; i++){
      console.log(`${i + 1}. ${books[i].toUpperCase()} \n`)
    }
  };

  const borrowBook = () => {
    let borrow = books.splice(prompt("Please Enter Book Number: "), 1);
    borrowedBook.push(borrow);
    console.log(`Dear ${name}, you have borrowed ${borrow}\n`)
  };

  const displayBorrowed = () => {
    if (borrowedBook.length == 0){
      console.log(`Dear ${name} you have not borrowed any book!\n`)
    } else {
    console.log(`-------------------------------------------------------\n`)
    console.log(`Dear ${name}, you borrowed:`)
    for(let i = 0; i < borrowedBook.length; i++){
      console.log(`${i + 1}. ${borrowedBook[i]} \n`)
    }
    }
  };

  const returnBook = () => {
    displayBorrowed();
    let returned = borrowedBook.splice(prompt("Please Enter Book Number You Want To Return: "), 1);
    books.push(returned);
    console.log(`Dear ${name}, you have returned ${returned}\n`)
  }

  const name = prompt('Please enter your name: ').toUpperCase();
  const greeting = console.log(`\nWELCOME TO THE RUTH'S LIBRARY ${name} \n`);

viewMenu();