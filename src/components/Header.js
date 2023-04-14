import "../header.css"
import React from "react";

export default function Header({search}) {
    const [text, setText] = React.useState("");

    const categories = ["Crime", "Fantasy", "Horror", "Adventure", "Romance", "Humour", "Biography", "History", "Sports"];
    const dropdown = categories.map(category => <div id={category.toLowerCase()}>{category}</div>);

    function handleChange(event) {
        const {value} = event.target;
        setText(value);
    }

    return (
            <div className="bar">
                <div className="name">BookStore</div>

                <div className="search-bar">
                    <input className="input" type="text" placeholder="Search" value={text} onChange={handleChange}></input>
                    <i className="material-symbols-outlined" id="search-button" onClick={() => search(text)}>search</i>
                </div>

                <div className="buttons">
                    <button>Home</button>
                    <button>Wishlist</button>
                    <button id="browse">Browse
                        <span className="material-symbols-outlined" id="arrow-drop-down">arrow_drop_down</span>
                        <div className="dropdown-content">
                            {dropdown}
                        </div>
                    </button>
                </div>
            </div>
    );
}