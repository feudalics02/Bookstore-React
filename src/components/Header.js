import "../header.css"
import React from "react";

export default function Header({search, clearBooks, searchSubject}) {
    const [text, setText] = React.useState("");

    const categories = ["Fiction", "History", "Biography", "Religion", "Psychology", "Science", "Education", "Philosophy"];
    const dropdown = categories.map(category => <div id={category.toLowerCase()} onClick={() => searchSubject(category)}>{category}</div>);

    function handleChange(event) {
        const {value} = event.target;
        setText(value);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            search(text);
        }
    }

    return (
            <div className="bar">
                <div className="name" onClick={clearBooks}>BookStore</div>

                <div className="search-bar">
                    <input className="input" type="text" placeholder="Search" onKeyDown={handleKeyDown} value={text} onChange={handleChange}></input>
                    <i className="material-symbols-outlined" id="search-button" onClick={() => search(text)}>search</i>
                </div>

                <div className="buttons">
                    <button onClick={clearBooks}>Home</button>
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