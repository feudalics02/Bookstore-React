import "../header.css"

export default function Header() {
    return (
            <div className="bar">
                <div className="name">BookStore</div>

                <div className="search-bar">
                    <input className="input" type="text" placeholder="Search"></input>
                    <i className="material-symbols-outlined" id="search-button">search</i>
                </div>

                <div className="buttons">
                    <button>Home</button>
                    <button>Wishlist</button>
                    <button id="browse">Browse
                        <span className="material-symbols-outlined" id="arrow-drop-down">arrow_drop_down</span>
                        <div className="dropdown-content">
                            <div id="crime">Crime</div>
                            <div>Fantasy</div>
                            <div>Horror</div>
                            <div>Adventure</div>
                            <div>Romance</div>
                            <div>Humour</div>
                            <div>Biography</div>
                            <div>History</div>
                            <div id="sports">Sports</div>
                        </div>
                    </button>
                </div>
            </div>
    );
}