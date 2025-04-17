import styled from '@emotion/styled';
import { useState } from 'react';
import FriendsList from '../components/FriendsList/FriendsList';
import DatePicker from '../components/DatePicker/DatePicker';
import TodoList from '../components/TodoList/TodoList';
import todoongiLogo from '../assets/todoongi_logo.png';

// 더미 데이터
const dummyFriends = [
  { id: '1', name: 'Me', imageUrl: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: '민지', imageUrl: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: '하니', imageUrl: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: '다니엘', imageUrl: 'https://i.pravatar.cc/150?img=4' },
  { id: '5', name: '혜인', imageUrl: 'https://i.pravatar.cc/150?img=5' },
  { id: '6', name: '채원', imageUrl: 'https://i.pravatar.cc/150?img=6' },
  { id: '7', name: '지수', imageUrl: 'https://i.pravatar.cc/150?img=7' },
  { id: '8', name: '제니', imageUrl: 'https://i.pravatar.cc/150?img=8' },
  { id: '9', name: '로제', imageUrl: 'https://i.pravatar.cc/150?img=9' },
  { id: '10', name: '리사', imageUrl: 'https://i.pravatar.cc/150?img=10' },
  { id: '11', name: '윈터', imageUrl: 'https://i.pravatar.cc/150?img=11' },
  { id: '12', name: '카리나', imageUrl: 'https://i.pravatar.cc/150?img=12' }
];

type TodoCategory = '일반' | '근로' | '공부' | '약속';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: TodoCategory;
}

const dummyTodos: Todo[] = [
  { id: '1', text: '알고리즘 공부하기', completed: false, category: '일반' },
  { id: '2', text: '운동가기', completed: true, category: '일반' },
  { id: '3', text: '장보기', completed: false, category: '일반' },
  { id: '4', text: '이메일 확인하기', completed: false, category: '일반' },
  { id: '5', text: '프로젝트 회의', completed: false, category: '근로' },
  { id: '6', text: '책 읽기', completed: false, category: '공부' },
];

const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todos, setTodos] = useState<Todo[]>(dummyTodos);

  const handleToggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleAddTodo = (category: TodoCategory) => {
    const newTodo: Todo = {
      id: String(Date.now()),
      text: '',
      completed: false,
      category
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <Container>
      <Header>
        <LogoContainer>
          <LogoImage src={todoongiLogo} alt="Todoongi Logo" />
        </LogoContainer>
      </Header>
      <Content>
        <FriendsList friends={dummyFriends} />
        <DatePicker
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
        <TodoList
          todos={todos}
          onToggleTodo={handleToggleTodo}
          onAddTodo={handleAddTodo}
        />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: linear-gradient(180deg, #E6E6FA 0%, #F0F8FF 100%);
  padding-bottom: 100px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  margin-bottom: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  height: 170px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  overflow-x: hidden;
  
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export default MainPage; 