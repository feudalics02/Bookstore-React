import React from "react";
import "../book.css"

export default function Modal(props) {
    return (
        <div className="modal-active" id="modal">
            <div className="modal-header">
                <div className="modal-title">{props.title}</div>
                <div className="close-button" onClick={props.close}>&times;</div>
            </div>
            <div className="modal-body">{props.description}</div>
        </div>
    );
}