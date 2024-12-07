import ALXLogo from './ALX-logo.jpg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={ALX} alt="ALX-logo"></img>
                <h1>School dashboard</h1>
            </header>
            <div className="App-body">
                <p>
                    Login to access the full dashboard
                </p>
            </div>
            <div className="App-footer">
                <p>
                    Copyright 2020 - ALX  School
                </p>
            </div>
        </div>
    );
}

export default App;
