import Book from "./Book";
import React from "react";
import "../book.css"
import Modal from "./Modal";

export default function BookList({items, setFavorite, removeFavorite}) {
    const [show, setShow] = React.useState(false);
    const [modal, setModal] = React.useState({"id": -1, "title": "", "description": ""});

    let key = 1;
    const newArray = [];
    items.forEach(book => {
        let author = (book.volumeInfo.authors && book.volumeInfo.authors.length > 0) ? book.volumeInfo.authors[0] : "";
        let title = book.volumeInfo.title ? book.volumeInfo.title : "";
        let buyLink = book.volumeInfo.infoLink;
        let description = book.volumeInfo.description;
        let isbn = book.volumeInfo.industryIdentifiers ? book.volumeInfo.industryIdentifiers[0].identifier : -1;
        let thumbnail = "https://images.unsplash.com/photo-1589998059171-988d887df646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5MTc2Nzc1&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit";
        if (book.hasOwnProperty("volumeInfo") && book.volumeInfo.hasOwnProperty("imageLinks")) {
            thumbnail = book.volumeInfo.imageLinks.thumbnail;
        }

        let props = {
            "key": key++,
            "title": title,
            "author": author,
            "image": thumbnail,
            "link": buyLink,
            "description": description,
            "openModal": handleChange,
            "setFavorite": setFavorite,
            "removeFavorite": removeFavorite,
            "isbn": isbn
        };
        if (author.length < 30 && title.length < 80 && isbn !== -1) {
            newArray.push(<Book {...props}/>);
        }
    });

    function handleChange(data) {
        setModal(data);
        setShow(true);
    }

    function closeModal() {
        setModal({"id": -1, "title": "", "description": ""});
        setShow(false);
    }

    return (
        <div id="books">
            {newArray}
            {show && <Modal {...modal} close={closeModal}/>}
            <div id="overlay" style={{opacity: show ? 1 : 0, pointerEvents: show ? "all": "none"}} onClick={closeModal}></div>
        </div>
    );
}
