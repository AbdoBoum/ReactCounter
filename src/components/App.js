import React from 'react';

import Counter from './Counter';

class App extends React.Component {
    render() {
        return (
            <div className="container mt-5 text-center h3">
                <Counter seconds={40}/>
                <Counter seconds={45}/>
                <Counter seconds={50}/>
            </div>
        );
    }
}

export default App;
