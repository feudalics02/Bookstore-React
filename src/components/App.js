import '../stylesheets/App.css';
import Header from "./Header";
import BookList from "./BookList";
import React, { useState, useEffect } from "react";

function App() {
    const [books, setBooks] = useState([]);
    const [term, setTerm] = useState("");
    const [subject, setSubject] = useState("");
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || {});
    const apiKey = "";

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}+intitle:${term}&printType=books&filter=paid-ebooks&orderBy=relevance&maxResults=36&key=${apiKey}&langRestrict=en`)
            .then(data => data.json())
            .then(books => {
                if (books.totalItems > 0) {
                    setBooks(books.items);
                }
            });
    }, [term]);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&printType=books&filter=paid-ebooks&orderBy=relevance&maxResults=36&key=${apiKey}&langRestrict=en`)
            .then(data => data.json())
            .then(books => {
                if (books.totalItems > 0) {
                    setBooks(books.items);
                }
            });
    }, [subject]);

    function changeTerm(term) {
        setTerm(term);
    }

    function changeSubject(subject) {
        setSubject(subject);
    }

    function getWishlist() {
        let array = [];
        let promises = [];

        for (let isbn in wishlist) {
            let promise = fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${apiKey}`)
                .then(data => data.json())
                .then(book => array.push(book.items[0]));
            promises.push(promise);
        }

        Promise.all(promises).then(() => setBooks(array));
    }

    function setFavorite(isbn) {
        wishlist[isbn] = true;
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    function removeFavorite(isbn) {
        delete wishlist[isbn];
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }

    function clearBooks() {
        setBooks([]);
    }

    return (
        <div className="App">
          <Header search={changeTerm} searchSubject={changeSubject} clearBooks={clearBooks} getWishlist={getWishlist}/>
          <BookList items={books} setFavorite={setFavorite} removeFavorite={removeFavorite}/>
        </div>
    );
}

export default App;
