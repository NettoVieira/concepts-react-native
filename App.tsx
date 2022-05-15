import React, {
  useState,
  useCallback,
  useEffect,
  useRef
} from 'react';

import { Home } from './src/screens/Home';

export default function App() {
  const [text, setText] = useState({
    title: 'teste'
  });

  const teste = useRef('teste')

  useEffect(() => {
    setText({
      title: 'teste'
    })
  }, []);

  // function handleGo() {
  //   console.log('ok')
  // }

  const handleGo = useCallback(() => {
    setText({
      title: 'ola'
    })
  }, []);

  return (
    <Home 
      title={text.title} 
      onPress={handleGo}
    />
  );
}