'use strict';

import React from 'react';
import {render} from 'react-dom';

const App = React.createClass({
    render:function(){
        return <div>
            hello world
        </div>
    }
});
render(<App/>, document.getElementById("content"));
