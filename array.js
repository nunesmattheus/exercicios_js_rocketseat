const booksByCategory = [

    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            }
        ],
    },
    {
        category: "Inteligência emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],        
    },
];

const totalCategories = booksByCategory.length
console.log(totalCategories)

for(let cat of booksByCategory){
    console.log('Total de livros da categoria: ', cat.category)
    console.log(cat.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log("Total de autores: ", authors.length)
}

countAuthors()

function booksOfAugustoCury(){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === 'Augusto Cury'){
                books.push(book.title)
            }
        }
    }

    console.log("Livros do autor: ", books)
}

booksOfAugustoCury()

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}:  ${books.join(", ")}`)
}

booksOfAuthor('Robert T. Kiyosaki e Sharon L. Lechter')