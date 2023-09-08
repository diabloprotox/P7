import WhiteLogo from '../../assets/logowhite.png'
import '../../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <img src={WhiteLogo} alt="Footer logo" />
            <span>© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer