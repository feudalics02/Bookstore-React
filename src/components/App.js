import '../App.css';
import Header from "./Header";
import BookList from "./BookList";
import React from "react";

function App() {
    const [books, setBooks] = React.useState([]);
    const apiKey = "AIzaSyAEt2T83GMPhE_WG-p08skp8BFwRJIJQSA";

    function fetchData(term) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}+intitle:${term}&printType=books&filter=paid-ebooks&orderBy=relevance&maxResults=36&key=${apiKey}&langRestrict=en`)
            .then(data => data.json())
            .then(books => {
                setBooks(books.items);
            });
    }

    function fetchSubject(subject) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&printType=books&filter=paid-ebooks&orderBy=relevance&maxResults=36&key=${apiKey}&langRestrict=en`)
            .then(data => data.json())
            .then(books => {
                setBooks(books.items);
            });
    }

    function clearBooks() {
        setBooks([]);
    }

    return (
        <div className="App">
          <Header search={fetchData} searchSubject={fetchSubject} clearBooks={clearBooks}/>
          <BookList items={books}/>
        </div>
    );
}

export default App;
