import styled from '@emotion/styled';
import React, { useState } from 'react';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: '일반' | '근로' | '공부' | '약속';
}

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onAddTodo: (category: Todo['category']) => void;
  onDeleteTodo?: (id: string) => void;
  onUpdateTodo?: (id: string, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ 
  todos, 
  onToggleTodo, 
  onAddTodo,
  onDeleteTodo = () => {},
  onUpdateTodo = () => {}
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const categories: Todo['category'][] = ['일반', '근로', '공부', '약속'];
  
  const getCategoryIcon = (category: Todo['category']) => {
    switch (category) {
      case '일반': return '📝';
      case '근로': return '💼';
      case '공부': return '📚';
      case '약속': return '🤝';
    }
  };

  const todosByCategory = categories.reduce((acc, category) => {
    acc[category] = todos.filter(todo => todo.category === category);
    return acc;
  }, {} as Record<Todo['category'], Todo[]>);

  const handleEditStart = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleEditSave = (id: string) => {
    if (editText.trim()) {
      onUpdateTodo(id, editText.trim());
    }
    setEditingId(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter') {
      handleEditSave(id);
    }
  };

  return (
    <Container>
      {categories.map(category => (
        <CategorySection key={category}>
          <CategoryHeader>
            <CategoryTitle>
              <CategoryIcon>{getCategoryIcon(category)}</CategoryIcon>
              {category}
            </CategoryTitle>
            <AddButton onClick={() => onAddTodo(category)}>+</AddButton>
          </CategoryHeader>
          <TodoItems>
            {todosByCategory[category].map(todo => (
              <TodoItem key={todo.id}>
                <Checkbox
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggleTodo(todo.id)}
                />
                {editingId === todo.id ? (
                  <TodoInput
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onBlur={() => handleEditSave(todo.id)}
                    onKeyPress={(e) => handleKeyPress(e, todo.id)}
                    autoFocus
                  />
                ) : (
                  <TodoText 
                    completed={todo.completed}
                    onClick={() => handleEditStart(todo)}
                  >
                    {todo.text}
                  </TodoText>
                )}
                <DeleteButton onClick={() => onDeleteTodo(todo.id)}>⋯</DeleteButton>
              </TodoItem>
            ))}
          </TodoItems>
        </CategorySection>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 80px; // 하단 네비게이션 바를 위한 여백

  
`;

const CategorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 2px solid #f0f0f0;
`;

const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 34px;
  font-weight: 600;
  color: #333;
`;

const CategoryIcon = styled.span`
  font-size: 20px;
`;

const AddButton = styled.button`
  background: none;
  border: none;
  color: #87CEEB;
  font-size: 24px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(135, 206, 235, 0.1);
    transform: scale(1.1);
  }
`;

const TodoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #87CEEB;
`;

const TodoInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 16px;
  color: #333;
  padding: 4px 8px;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    background: rgba(135, 206, 235, 0.1);
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #999;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  opacity: 0;
  transform: translateX(-10px);

  ${TodoItem}:hover & {
    opacity: 1;
    transform: translateX(0);
  }

  &:hover {
    color: #666;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const TodoText = styled.span<{ completed: boolean }>`
  flex: 1;
  color: ${props => props.completed ? '#999' : '#333'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  font-size: 30px;
  transition: all 0.2s ease;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;

  &:hover {
    background: rgba(135, 206, 235, 0.1);
  }
`;

export default TodoList; 