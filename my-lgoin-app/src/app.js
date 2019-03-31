import React from 'react';
import View from './View';

class App extends React.Component {
    constructor(props) { //构造函数
        super(props);
        this.state = {
            text : 'This is TEXT!'
        }
    }
    render(){
        return(<div>{this.state.text}</div>)
    }
}
export default App;
