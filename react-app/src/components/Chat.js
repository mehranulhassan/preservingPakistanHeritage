import React from 'react';
import './chat.css';
import whatsappIcon from '../components/Assets/whatsapp_icon.png';  // Add an appropriate WhatsApp icon

const Chat = () => {
    const whatsappNumber = '+923037190868';

    const openWhatsAppChat = () => {
        const url = `https://wa.me/${whatsappNumber.replace('+', '')}`;
        window.open(url, '_blank');
    };

    return (
        <div className='chat'>
            <h2>Chat with Us</h2>
            <button className='whatsapp-button' onClick={openWhatsAppChat}>
                <img src={whatsappIcon} alt='WhatsApp' className='whatsapp-icon' />
                Chat on WhatsApp
            </button>
        </div>
    );
};

export default Chat;
