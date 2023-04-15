import Book from "./Book";
import React from "react";
import "../book.css"

export default function BookList({items}) {
    let key = 1;
    const newArray = [];
    items.forEach(book => {
        let author = (book.volumeInfo.authors && book.volumeInfo.authors.length > 0) ? book.volumeInfo.authors[0] : "";
        let title = book.volumeInfo.title ? book.volumeInfo.title : "";
        let buyLink = book.volumeInfo.infoLink;
        let description = book.volumeInfo.description;
        let thumbnail = "https://images.unsplash.com/photo-1589998059171-988d887df646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5MTc2Nzc1&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit";
        if (book.hasOwnProperty("volumeInfo") && book.volumeInfo.hasOwnProperty("imageLinks")) {
            thumbnail = book.volumeInfo.imageLinks.thumbnail;
        }

        let props = {"key": key++, "title": title, "author": author, "image": thumbnail, "link": buyLink, "description": description};
        if (author.length < 30 && title.length < 80) {
            newArray.push(<Book {...props}/>);
        }
    });

    return (
        <div id="books">
            {newArray}
        </div>
    );
}