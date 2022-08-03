package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

// Create the book model (Struct)

// using struct as a class

type Book struct {
	ID     string  `json:"id"`
	Isbn   string  `json:"isbn"`
	Title  string  `json:"title"`
	Author *Author `json:"author"`
}

// Author struct

type Author struct {
	Firstname string `json:"firstname"`
	Lastname  string `json:"lastname"`
}

// Init book variable as slice Book struct
var books []Book

// Get all books

// every handler function should take response and request
func getBooks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(books)
}

// Get single book
func getBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r) // get any params

	// loop through books and find the one id
	for _, item := range books {
		if item.ID == params["id"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	json.NewEncoder(w).Encode(&Book{})
}

// Create a new book
func createBook(w http.ResponseWriter, r *http.Request) {

}

// Update a book
func updateBook(w http.ResponseWriter, r *http.Request) {

}

// Delete a book
func deleteBook(w http.ResponseWriter, r *http.Request) {

}

func main() {
	// Init the Router
	router := mux.NewRouter()

	// Add Mock Data - @todo - implement DB
	books = append(books, Book{
		ID:    "1",
		Isbn:  "4456",
		Title: "Book One",
		Author: &Author{
			Firstname: "John",
			Lastname:  "Doe"}})
	books = append(books, Book{
		ID:    "2",
		Isbn:  "4445",
		Title: "Book Two",
		Author: &Author{
			Firstname: "Steve",
			Lastname:  "Smith"}})

	// Route Handlers/ Establish Endpoints
	router.HandleFunc("/api/books", getBooks).Methods("GET")
	router.HandleFunc("/api/books/{id}", getBook).Methods("GET")
	router.HandleFunc("/api/books/", createBook).Methods("POST")
	router.HandleFunc("/api/books/{id}", updateBook).Methods("PUT")
	router.HandleFunc("/api/books/{id}", deleteBook).Methods("DELTE")

	log.Fatal(http.ListenAndServe(":8000", router))
}
