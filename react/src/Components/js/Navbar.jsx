import '../css/nav.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
function navbar(){
    return(
        <>

    <nav className="navbar">
        <div className="max-width">
            <div className="logo"><a href="#">Intern<span>ship</span></a></div>
            <ul className="menu">
                <li><a href="/homepage" className="menu-btn">Home</a></li>
                <li><a href="/about" className="menu-btn">About us</a></li>
                <li><a href="/contact" className="menu-btn">Contact</a></li>
               
            </ul>
            <div className="search-container" style={{ position:'absolute', right:50 }}>
                <li style={{ float: 'right' }}><a href="/login"><i className="fa-solid fa-user fa-xl" style={{color: "#ffffff"}}></i>
                </a></li>
            </div>

        </div>
    </nav>
        </>
    );
}
export default navbar;