import React from 'react';
import {render} from 'react-dom';

import Item from "./item.jsx";
import List from "./list.jsx";

render(<List url="/api/users"/>, document.getElementById('app'));
