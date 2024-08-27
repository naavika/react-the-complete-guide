import React, {useState, useCallback, useMemo} from 'react';

import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {
  const [ListTitle, setListTitle] = useState('My List');
  const [isAscending, setIsAscending] = useState(true);

  
  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  },[]);

  const toggleOrderHandler = useCallback(() => {
    setIsAscending((prevState) => !prevState);
  }, []);

  const ListItems = useMemo(() => {
    const items = [5, 3, 1, 10, 9];
    return isAscending ? items.sort((a, b) => a - b) : items.sort((a, b) => b - a);
  }, [isAscending]);

  

  return (
    <div className="app">
      <DemoList title = {ListTitle} items = {ListItems}/>
      <Button onClick = {changeTitleHandler}>Change List Title</Button>
      <Button onClick={toggleOrderHandler}>
        {isAscending ? 'Change to Descending Order' : 'Change to Ascending Order'}
      </Button>
    </div>
  );
}

export default App;
