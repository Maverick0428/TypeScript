import React from 'react';
import { Card, CardContent } from '@mui/material';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <Card>
      <CardContent>{todo.text}</CardContent>
    </Card>
  );
};

export default TodoItem;