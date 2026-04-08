import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/237653638145" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-float"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={30} />
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}
