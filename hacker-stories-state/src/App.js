import logo from './logo.svg';
import './App.css';


const welcome = {

  greetingMsg: 'Hello There',
  title: 'React Sample',

}

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

/**
 * 
 * @returns  does the map function return result for each element in the array?
 * it does but a function cannot return more than once for a call.
 * <p><b>the array.map function returns a 'new' array with modified elements  </b></p>
 */
const ListAuthors = () => 
(
<ul>
  {
    listOfAuthorsGS.map(function (item) 
    {
    return <li key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>

      </span>
      <span>
        {item.author}

      </span>
      <span>
        {item.title}
      </span>
      <span>
        {item.num_comments}
      </span>
    </li>;
  })}

</ul>
);



/**
 * 
 * This function reads the details of the listOfAuthors array via properties
 */
 const ListAuthorsInProps = (props) => 
 (
 <ul>
   {
    props.list.map(function (item) 
     {
     return <li key={item.objectID}>
       <span>
         <a href={item.url}>{item.title}</a>
        </span>
       <span>
         {item.author}
 
       </span>
       <span>
         {item.title}
       </span>
       <span>
         {item.num_comments}
       </span>
     </li>;
   })}
 
 </ul>
 );

 
/**
 * 
 * @returns common mistake is to pass return type of function instead of the function itself
 * so onChange={handleChange} is correct onChange={handleChange()} is wrong.
 */
const Search = ()=> {
  
  const handleChange = (event) => {
    console.log(event.target.value);
  }

    return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
);
}



function App() {

  /**
   * Same As listOfAuthorsGS but the scope is limited to App component
   */
  const listOfAuthors = [
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


  return (
    <div>
      <h1>Sample that will explain how to use 'State'</h1>
      <Search />
      <hr />
      <ListAuthorsInProps list={listOfAuthors} />
      <hr />
      <ListAuthors />

    </div>
  );
}

function getTitle(title) {
  return title;
}

export default App;
