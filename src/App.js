import { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] =  useState([]);
  const [input , setInput] = useState('');

  // when the app loads we need to listen to the databse and fetch new tods as they get added/removed
  useEffect(() => {
   db.collection('todos').orderBy('timestamp' , 'desc').onSnapshot(snapshot => {
     // console.log(snapshot.docs.map(doc => doc.data().todo));
     setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
   })
  }, [])

  // const [state, setstate] = useState();
  
  const addTodo = (event) => {    
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    // setTodos([...todos , input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Launch Titans!</h1>
      <form>
       
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
      </form>
      

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          // <li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
