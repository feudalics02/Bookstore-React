import 'material-symbols'
import React from "react";

export default function Book(props) {
    const [favorite, toggleFavorite] = React.useState(false);

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
        toggleFavorite(prevState => !prevState);
    }

    function goToLink() {
        window.open(props.link, "_blank");
    }

    return (
        <div className="book">
            <span className="material-symbols-sharp" id="favorite"
                  style={{fontVariationSettings: favorite ? activeStyle : nonActiveStyle, color: favorite ? "crimson" : "black"}}
                  onClick={handleClick}>favorite</span>
            <span className="material-symbols-outlined" id="info">info</span>
            <div className="wrap">
                <img className="image" src={props.image} alt=""></img>
            </div>
            <label className="author">{props.author}</label>
            <label className="title">{props.title}</label>
            <button className="buy" onClick={goToLink}>Buy now</button>
        </div>
    );
}