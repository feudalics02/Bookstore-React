import 'material-symbols'
import React from "react";
import "../book.css"

export default function Book(props) {
    const [favorite, toggleFavorite] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const activeModal = <div className="modal-active" id="modal">
                            <div className="modal-header">
                                <div className="modal-title">{props.title}</div>
                                <div className="close-button">&times;</div>
                            </div>
                            <div className="modal-body">{props.description}</div>
                        </div>;

    const nonActiveModal = <div className="modal" id="modal">
                                <div className="modal-header">
                                    <div className="modal-title">{props.title}</div>
                                    <div className="close-button">&times;</div>
                                </div>
                                <div className="modal-body">{props.description}</div>
                           </div>;

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

    function openModal() {
        setShow(true);
    }

    function closeModal() {
        setShow(false);
    }


    return (
        <div className="book">
            <span className="material-symbols-sharp" id="favorite"
                  style={{fontVariationSettings: favorite ? activeStyle : nonActiveStyle, color: favorite ? "crimson" : "black"}}
                  onClick={handleClick}>favorite</span>
            <span className="material-symbols-outlined" id="info" onClick={openModal}>info</span>
            <div className="wrap">
                <img className="image" src={props.image} alt=""></img>
            </div>
            <label className="author">{props.author}</label>
            <label className="title">{props.title}</label>
            <button className="buy" onClick={goToLink}>Buy now</button>
            {show ? activeModal : nonActiveModal}
            <div id="overlay" style={{opacity: show ? 1 : 0, pointerEvents: show ? "all": "none"}} onClick={closeModal}></div>
        </div>
    );
}