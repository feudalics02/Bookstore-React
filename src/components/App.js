import '../stylesheets/App.css';
import Header from "./Header";
import BookList from "./BookList";
import React from "react";

function App() {
    const [books, setBooks] = React.useState([]);
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || {});
    const apiKey = "AIzaSyAEt2T83GMPhE_WG-p08skp8BFwRJIJQSA";

    function fetchData(term) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}+intitle:${term}&printType=books&filter=paid-ebooks&orderBy=relevance&maxResults=36&key=${apiKey}&langRestrict=en`)
            .then(data => data.json())
            .then(books => {
                if (books.totalItems > 0) {
                    setBooks(books.items);
                }
            });
    }

    function fetchSubject(subject) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&printType=books&filter=paid-ebooks&orderBy=relevance&maxResults=36&key=${apiKey}&langRestrict=en`)
            .then(data => data.json())
            .then(books => {
                if (books.totalItems > 0) {
                    setBooks(books.items);
                }
            });
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
          <Header search={fetchData} searchSubject={fetchSubject} clearBooks={clearBooks} getWishlist={getWishlist}/>
          <BookList items={books} setFavorite={setFavorite} removeFavorite={removeFavorite}/>
        </div>
    );
}

export default App;
