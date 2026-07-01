import "./Home.css";
import ChatCard from "./components/ChatCard";

interface ChatRoom {
  id: number;
  name: string;
  creator: string;
  currentUsers: number;
  maxUsers: number;
}


export default function Home() {
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
      <h1 className="home-title">Home</h1>
      <div className="chat-rooms-container">
        {mockChatRooms.map((chatRoom) => (
          <ChatCard id={chatRoom.id} title={chatRoom.name} creator={chatRoom.creator} currentUsers={chatRoom.currentUsers} maxUsers={chatRoom.maxUsers} />
        ))}
      </div>

    </div>
  )
   
}