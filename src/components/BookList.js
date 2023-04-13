import Book from "./Book";
import "../book.css"

export default function BookList() {
    return (
        <div id="books">
            <Book />
            <Book />
            <Book />
            <Book />
        </div>
    )
}