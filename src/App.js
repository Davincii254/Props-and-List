import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Component to display a single item
const ListItem = ({ item }) => {
  return <li>{item}</li>;
};

// Component to display a list of items
const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

// Parent component to demonstrate props and event handling
const App = () => {
  // State to manage input value
  const [inputValue, setInputValue] = useState('');
  // State to manage list of items
  const [items, setItems] = useState([]);

  // Event handler for input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>React Basics</h1>
      {/* Input form with event handlers */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter an item..."
        />
        <button type="submit">Add</button>
      </form>
      {/* List component to display items */}
      <List items={items} />
    </div>
  );
};


export default App;
