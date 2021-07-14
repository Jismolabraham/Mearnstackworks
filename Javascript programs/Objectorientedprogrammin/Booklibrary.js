class BookLibrary
{
    books={
        "The Alchemist":{book_name:"The Alchemist",Author:"Paulo",Price:200,No_Copies:300,sold:200},
        "One night at call center":{book_name:"One night at call center",Author:"Chetan",Price:100,No_Copies:400,sold:150},
        "Waiting":{book_name:"Waiting",Author:"Ha-Jin",Price:300,No_Copies:300,sold:100},
        "Half Girlfriend":{book_name:"Half Girlfriend",Author:"Durj Dutt",Price:250,No_Copies:800,sold:500},
        "Five point someone":{book_name:"Five point someone",Author:"Chetan",Price:370,No_Copies:900,sold:200}
    }
    getBooks()
    {
        let books={
            "The Alchemist":{book_name:"The Alchemist",Author:"Paulo",Price:200,No_Copies:300},
            "One night at call center":{book_name:"One night at call center",Author:"Chetan",Price:100,No_Copies:400},
            "Waiting":{book_name:"Waiting",Author:"Ha-Jin",Price:300,No_Copies:300},
            "Half Girlfriend":{book_name:"Half Girlfriend",Author:"Durj Dutt",Price:250,No_Copies:800},
            "Five point someone":{book_name:"Five point someone",Author:"Chetan",Price:370,No_Copies:900}
        }
        return books
    }
    findbook(bookname)
    {
        let bookdetails=this.books;
        if (bookname in bookdetails)
        {
            // console.log(bookdetails);
            if (bookname == bookdetails[bookname]["book_name"])
            {
                return 1;
            }
            
        }
        else
        {
            return -1
        }
        
    }
    findcopy(bookname)
    {
        let bookdetails=this.books;
        if (bookname in bookdetails)
        {
            if (bookdetails[bookname]["No_Copies"]>0)
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
    }
    bookcopies(bookname)
    {
        let bookdetails=this.books
        if(bookname in bookdetails)
        {
            bookdetails[bookname]["No_Copies"]-=bookdetails[bookname]["sold"]
        }
        return this.books
    }
}
var book=new BookLibrary()
// console.log(book.getBooks());
var book1=book.findbook("Five point someone")
var res=book1==-1?"book not found":"book found"
console.log(res);
var copy=book.findcopy("Five point someone")
var res1=copy==1?"book available":"book not available";
console.log(res1);
var bal=book.bookcopies("The Alchemist")
console.log(bal);

