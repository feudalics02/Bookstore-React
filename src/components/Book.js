import 'material-symbols'
import React from "react";
import "../book.css"

export default function Book(props) {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || {});
    const [favorite, toggleFavorite] = React.useState(wishlist.hasOwnProperty(props.isbn));

    const nonActiveStyle =
        "'FILL' 0,\n" +
        "'wght' 600,\n" +
        "'GRAD' 0,\n" +
        "'opsz' 48";

    const activeStyle =
        "'FILL' 1,\n" +
        "'wght' 600,\n" +
        "'GRAD' 0,\n" +
        "'opsz' 48";

    function handleClick() {
        console.log(favorite);
        if (favorite) {
            props.removeFavorite(props.isbn);
        }
        else {
            props.setFavorite(props.isbn);
        }
        toggleFavorite(prevState => !prevState);
        console.log(favorite);
    }

    function goToLink() {
        window.open(props.link, "_blank");
    }

    return (
        <div className="book">
            <span className="material-symbols-sharp" id="favorite"
                  style={{fontVariationSettings: favorite ? activeStyle : nonActiveStyle, color: favorite ? "crimson" : "black"}}
                  onClick={handleClick}>favorite</span>
            <span className="material-symbols-outlined" id="info" onClick={() => props.openModal({"id": props.id, "title": props.title, "description": props.description})}>info</span>
            <div className="wrap">
                <img className="image" src={props.image} alt=""></img>
            </div>
            <label className="author">{props.author}</label>
            <label className="title">{props.title}</label>
            <button className="buy" onClick={goToLink}>Buy now</button>
        </div>
    );
}