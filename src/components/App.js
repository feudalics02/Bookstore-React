import '../App.css';
import Header from "./Header";
import BookList from "./BookList";
import React from "react";

function App() {
    const [books, setBooks] = React.useState([]);
    const apiKey = "AIzaSyAEt2T83GMPhE_WG-p08skp8BFwRJIJQSA";

    function fetchData(title) {
        console.log(`https://www.googleapis.com/books/v1/volumes?q=${title}+intitle:${title}&printType=books&filter=paid-ebooks&orderBy=relevance&maxResults=36&key=${apiKey}&langRestrict=en`);
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}+intitle:${title}&printType=books&filter=paid-ebooks&orderBy=relevance&maxResults=36&key=${apiKey}&langRestrict=en`)
            .then(data => data.json())
            .then(books => {
                setBooks(books.items);
            });
    }

    return (
        <div className="App">
          <Header search={fetchData}/>
          <BookList items={books}/>
        </div>
    );
}

export default App;
