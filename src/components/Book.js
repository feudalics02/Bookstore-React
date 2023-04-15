import 'material-symbols'
import React from "react";
import "../stylesheets/book.css"

export default function Book(props) {
    const [, setRender] = React.useState(false);

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
        if (wishlist[props.isbn]) {
            props.removeFavorite(props.isbn);
        }
        else {
            props.setFavorite(props.isbn);
        }
        setRender(prevState => !prevState);
    }

    function goToLink() {
        window.open(props.link, "_blank");
    }

    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    return (
        <div className="book">
            <span className="material-symbols-sharp" id="favorite"
                  style={{fontVariationSettings: wishlist[props.isbn] ? activeStyle : nonActiveStyle, color: wishlist[props.isbn] ? "crimson" : "black"}}
                  onClick={handleClick}>favorite</span>
            <span className="material-symbols-outlined" id="info" onClick={() => props.openModal({"id": props.id, "title": props.title, "description": props.description})}>info</span>
            <div className="wrap">
                <img className="image" onClick={() => console.log(props.isbn)} src={props.image} alt=""></img>
            </div>
            <label className="author">{props.author}</label>
            <label className="title">{props.title}</label>
            <button className="buy" onClick={goToLink}>Buy now</button>
        </div>
    );
}