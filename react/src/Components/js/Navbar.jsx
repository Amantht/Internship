import '../css/nav.css'
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
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>
        </>
    );
}
export default navbar;