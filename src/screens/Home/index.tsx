import React from 'react';

import { 
  Container, 
  Title, 
  Button
} from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export function Home({title, onPress}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Button title='Go' onPress={onPress}/>
    </Container>
  );
}
