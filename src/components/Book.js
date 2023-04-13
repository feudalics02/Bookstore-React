import 'material-symbols'

export default function Book() {
    return (
        <div className="book">
            <span className="material-symbols-sharp" id="favorite">favorite</span>
            <span className="material-symbols-outlined" id="info">info</span>
            <div className="wrap">
                <img className="image"
                     src="https://books.google.com/books/content?id=vZTqFmlj6_EC&printsec=frontcover&img=1&zoom=5&source=gbs_api"
                     alt=""></img>
            </div>
            <label className="author">Andre Agassi</label>
            <label className="title">Open</label>
            <button className="buy">Buy now</button>
        </div>
    );
}