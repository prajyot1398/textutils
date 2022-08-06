import logo from './logo.svg';
import './App.css';

let myName = "Prajyot";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <nav>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </nav>
          <h1>Hello {myName}</h1>
          <p>Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Totam temporibus nesciunt blanditiis minus illo 
          impedit non, at recusandae corporis officia veniam perspiciatis sapiente cumque
          quaerat numquam tenetur aliquid. Veritatis, cum quas.</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Prajyot Jadhav
        </a>
      </header>
    </div>
  );
}

export default App;
