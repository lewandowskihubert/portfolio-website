import "./footer.css"
import { SocialIcon } from "react-social-icons"


const Footer:React.FC = () => {
    return (
        <div className="footer-container">
            <div className="footer-socialmedia">
                <div><SocialIcon url="https://github.com/lewandowskihubert" target="_blank"></SocialIcon></div>
                <div><SocialIcon url="https://www.linkedin.com/in/hubert-lewandowski00/" target="_blank"></SocialIcon></div>
                <div><SocialIcon url="https://stackoverflow.com/users/22267924/hubert" target="_blank"></SocialIcon></div>
                 </div>

        </div>
    )
}

export default Footer