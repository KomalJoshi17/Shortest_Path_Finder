import React from 'react';
import './styles/App.css';
import { SomeComponent } from './components';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My React App</h1>
            </header>
            <main>
                <SomeComponent />
            </main>
        </div>
    );
};

export default App;