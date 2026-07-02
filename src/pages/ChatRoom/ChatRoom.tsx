import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import TextChat from "./components/TextChat/TextChat";
import './ChatRoom.css';


interface Message {
    chatId: number;
    user: string;
    text: string;
    timestamp: Date;
}


export default function ChatRoom() {

    const mockMessages: Message[] = [
        {
            chatId: 1,
            user: "Alice",
            text: "Hello everyone!",
            timestamp: new Date(),
        }, 
        {
            chatId: 2,
            user: "Bob",
            text: "Hi Alice! How are you?",
            timestamp: new Date(),
        },
        {
            chatId: 3,
            user: "Charlie",
            text: "Hey guys, what's up?",
            timestamp: new Date()
        }
    ]
    const { id } = useParams<{id : string}>();
    const chatRoomId = id;
    const { t } = useTranslation('chatroom');
    return (
        <div className="chat-room-container">
            <h1 className="chat-room-title">
                {chatRoomId ? t('chatRoomTitle', { id: chatRoomId }) : t('chatRoomTitle', { id: '' })}
            </h1>
            <div className="chat-room-messages">
                {mockMessages.map((message, index) => (
                    <TextChat key={index} user={message.user} text={message.text} timestamp={message.timestamp} />
                ))}
            </div>
        </div>
    )
}