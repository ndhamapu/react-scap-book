import logo from './logo.svg';
import './App.css';
import * as React from 'react';





/**
 * listOfAuthorsGS = global scope value, other list has component scope i.e defined inside App
 */
const listOfAuthorsGS = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },

];


const App = () => {
 
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
  );

  const filteredAuthors = listOfAuthorsGS.filter((author) =>
    author.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


React.useEffect(() => {
  localStorage.setItem('search', searchTerm);
}, [searchTerm]);

const handleSearch = (event) => {

  setSearchTerm(event.target.value);
};

return (
  <div>
    <h1> react useEffect with localStorage</h1>
    <Search search={searchTerm} onSearch={handleSearch} />
    <hr />
    <ListAuthorsInProps listParam={filteredAuthors} />
    <hr />
    
  </div>
);
};

/**
 * 
 * This function reads the filtered list passed via listParam variable in Properties from parent omponent App
 */
const ListAuthorsInProps = ({listParam}) =>
(
  <ul>
    {
      listParam.map((item) => (
        <Item key={item.objectID} item={item} />
      ))
    }
  </ul>
);


/**
 * 
 * @returns common mistake is to pass return type of function instead of the function itself
 * so onChange={handleChange} is correct onChange={handleChange()} is wrong.
 */
const Search = ({ search, onSearch }) => (

  <div>
    <label htmlFor="search">Search: </label>
    <input
      id="search"
      type="text"
      onChange={onSearch} />
  </div>

);

const Item = ({ item }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
);



export default App;
