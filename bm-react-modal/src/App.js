import './App.css';
import BmModal from '../src/lib/components/BmModal';
function App() {
  let custom = {
    messageText: 'pklklj',
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <BmModal {...custom}></BmModal>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
