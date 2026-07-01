import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";


export default function ChatRoom() {
    const { id } = useParams<{id : string}>();
    const chatRoomId = id;
    const { t } = useTranslation('chatroom');
    return (
        <div className="chat-room-container">
            <h1 className="chat-room-title">
                {chatRoomId ? t('chatRoomTitle', { id: chatRoomId }) : t('chatRoomTitle', { id: '' })}
            </h1>
        </div>
    )
}