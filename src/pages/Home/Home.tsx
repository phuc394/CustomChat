import "./Home.css";
import ChatCard from "./components/ChatCard";
import { Link } from "react-router-dom";  
import { useTranslation } from "react-i18next";

interface ChatRoom {
  id: number;
  name: string;
  creator: string;
  currentUsers: number;
  maxUsers: number;
}


export default function Home() {
  const { t } = useTranslation();
  const mockChatRooms : ChatRoom[] = [
    {
      id: 1,
      name: "General Chat",
      creator: "Alice",
      currentUsers: 10,
      maxUsers: 20
    },
    {
      id: 2,
      name: "Gaming Chat",
      creator: "Bob",
      currentUsers: 5,
      maxUsers: 15
    },
    {
      id: 3,
      name: "Music Chat",
      creator: "Charlie",
      currentUsers: 8,
      maxUsers: 12
    }
  ];
  return (
    <div className="home-container">
      <h1 className="home-title">{t('homeTitle')}</h1>
      <div className="chat-rooms-container">
        {mockChatRooms.map((chatRoom) => (
          <Link key = {chatRoom.id} to={`/chatroom/${chatRoom.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
            <ChatCard id={chatRoom.id} title={chatRoom.name} creator={chatRoom.creator} currentUsers={chatRoom.currentUsers} maxUsers={chatRoom.maxUsers} />
          </Link>
        ))}
      </div>

    </div>
  )
   
}