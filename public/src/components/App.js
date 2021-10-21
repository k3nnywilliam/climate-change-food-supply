import React, { Component, Fragment } from 'react';
import './App.css';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import BarChart from './BarChart.js';
import LineChart from './LineChart.js';

class App extends Component {
    render() {
        return [
            <Fragment>
                <div><img src="images/wheat.jpg" /></div>
                <p>Photo by <a
                    href="https://unsplash.com/@erwanhesry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erwan
                    Hesry</a> on <a
                        href="https://unsplash.com/s/photos/wheat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

                </p>
                <div id="title">Maize Production</div>
                <div>
                    <BarChart />
                </div>
            </Fragment>
        ];
    }
}

export default App;