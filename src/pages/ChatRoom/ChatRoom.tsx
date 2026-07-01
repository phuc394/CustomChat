import {useParams} from "react-router-dom";


export default function ChatRoom() {
    const { id } = useParams<{id : string}>();
    const chatRoomId = id;
    return (
        <div className="chat-room-container">
            <h1 className="chat-room-title">Chat Room {chatRoomId}</h1>
        </div>
    )
}