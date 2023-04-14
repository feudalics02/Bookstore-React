import Book from "./Book";
import React from "react";
import "../book.css"

export default function BookList({items}) {
    let key = 1;
    const newArray = [];
    items.forEach(book => {
        let author = (book.volumeInfo.authors && book.volumeInfo.authors.length > 0) ? book.volumeInfo.authors[0] : "";
        let title = book.volumeInfo.title ? book.volumeInfo.title : "";
        let thumbnail = book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "";
        let {buyLink} = book.volumeInfo;

        let props = {"title": title, "author": author, "image": thumbnail, "link": buyLink, "key": key++};
        if (author.length < 30 && title.length < 90) {
            newArray.push(<Book {...props}/>);
        }
    });

    return (
        <div id="books">
            {newArray}
        </div>
    );
}