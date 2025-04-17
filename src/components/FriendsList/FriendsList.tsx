import styled from '@emotion/styled';

interface Friend {
  id: string;
  name: string;
  imageUrl: string;
}

interface FriendsListProps {
  friends: Friend[];
}

const FriendsList = ({ friends }: FriendsListProps) => {
  return (
    <Container>
      <ScrollContainer>
        {friends.map((friend) => (
          <FriendItem key={friend.id}>
            <ProfileImage src={friend.imageUrl} alt={friend.name} />
            <FriendName>{friend.name}</FriendName>
          </FriendItem>
        ))}
      </ScrollContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  background: rgba(135, 206, 235, 0.1);
  border-bottom: 2px solid rgba(135, 206, 235, 0.2);
  overflow: hidden;
  position: relative;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 0 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  scroll-snap-type: x mandatory;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FriendItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 0 0 auto;
  width: calc((100% - (16px * 4)) / 5.5); // 5.5개의 프로필이 보이도록 설정 (gap 16px 4개 고려)
  min-width: 85px; // 최소 너비 설정
  scroll-snap-align: start;
`;

const ProfileImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 3px solid #87CEEB;
  padding: 3px;
  background: white;
  transition: all 0.3s ease;
  cursor: pointer;
  object-fit: cover;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(135, 206, 235, 0.5);
  }
`;

const FriendName = styled.span`
  font-size: 13px;
  color: #666;
  font-weight: 500;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default FriendsList; 