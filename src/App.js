import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import Theme from './components/Theme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider>
          <Theme />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
