const arr = [
    {
        bookName: "Don Quixote",
        bookAuthor: "Miguel de Cervantes",
        payed: false,
    },
    {
        bookName: "In Search of Lost Time",
        bookAuthor: "Marcel Proust",
        payed: true,
    },
]

arr.sort((a, b) => {
    if(a.bookName > b.bookName) return 1
    return -1
})

console.log(arr);
