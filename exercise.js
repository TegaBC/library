
function book(title, author, pageAmount) {

    this.title = title;
    this.author = author;
    this.pageAmount = pageAmount

    return this;
}

const days50 = new book("50 Days", "Shimel B", 700)
console.log(days50)