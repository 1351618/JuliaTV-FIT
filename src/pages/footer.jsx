import React from "react";
import WhatsappIcon from '../images/whatsapp_icon.png';
import PhoneIcon from '../images/phone_icon.png';
import TelegramIcon from '../images/telegram_icon.png';
import InstagramIcon from '../images/instagram_icon.png';


class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <a href="tel:+1234567890"><img src={PhoneIcon} alt="" /></a>
                <a href="/"><img src={TelegramIcon} alt="" /></a>
                <a href="https://instagram.com/julia____tv?igshid=NTc4MTIwNjQ2YQ=="><img src={InstagramIcon} alt="" /></a>
                <a href="/"><img src={WhatsappIcon} alt="" /></a>
            </div>
        )
    }
}

export default Footer;