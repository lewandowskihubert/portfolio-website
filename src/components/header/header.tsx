
import "./header.css"
const Header:React.FC = () => {

    return (
        <div className="header-wrapper">
            
        <div className="header-content">
            <img src="../src/assets/memoji.png" title="memoji" />
            <h1>Lorem ipsum Lorem ipsum</h1>
         
           <button  className="button-contact"> <a href="#contactme">Contact me</a> </button>
            </div>
        </div>
    )

}

export default Header