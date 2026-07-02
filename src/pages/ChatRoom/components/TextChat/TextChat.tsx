import "./TextChat.css";


interface TextChatProps {
    user: string;
    text: string;
    timestamp: Date;
}

export default function TextChat({user, text, timestamp}: TextChatProps) {
    return (
        <div className="text-chat-container">
            <div className="text-chat-header">
                <span className="text-chat-user">{user}</span>
                <span className="text-chat-timestamp">{timestamp.toLocaleString()}</span>
            </div>
            <div className="text-chat-message">
                {text}
            </div>
        </div>
    )
}