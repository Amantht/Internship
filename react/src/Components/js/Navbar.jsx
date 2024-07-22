import '../css/nav.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import kutumba from '../Images/kutumba bhoj 1.png'
function navbar(){
    return(
        <>

    <nav className="navbar">
        <div className="max-width">
        <div className="logo">
                <a href="/">
        <img src={kutumba} alt="Logo Image" />

             </a>
            </div>
            <ul className="menu">
                <li><a href="/homepage" className="menu-btn">Home</a></li>
                <li><a href="/about" className="menu-btn">About us</a></li>
                <li><a href="/contact" className="menu-btn">Contact</a></li>
               
            </ul>
            <div className="login-container" style={{ position: 'absolute', right: 60 }}>
            <ul className="no-marker-list">
                <li>
        <a href="/login">
        <i className="fa-solid fa-user fa-xl" style={{ color: "#0b0b0b" }}></i>
        </a>
    </li>
  </ul>
</div>


        </div>
    </nav>
        </>
    );
}
export default navbar;