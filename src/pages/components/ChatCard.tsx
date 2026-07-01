import "./ChatCard.css";

interface ChatCardProps {
    id: number;
    title: string;
    creator: string;
    currentUsers: number;
    maxUsers: number;
}

export default function ChatCard({title, creator, currentUsers, maxUsers }: ChatCardProps) {
  return (
    <div className="chat-card">
      <h3 className="chat-title">{title}</h3>
      <div className="chat-footer">
        <p className="chat-meta">{creator}</p>
        <span className="chat-users">{currentUsers}/{maxUsers} users</span>
      </div>
    </div>
  );
}
