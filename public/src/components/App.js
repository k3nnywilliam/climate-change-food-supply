import React, { Component, Fragment } from 'react';
import './App.css';
import BarChart from './BarChart.js';
import {data} from './DataVariables.js';

class App extends Component {
    render() {
        const width = 1200;
        const height = 600;
        
        return [
            <Fragment>
                <div><img src="images/wheat.jpg" /></div>
                <p>Photo by <a
                    href="https://unsplash.com/@erwanhesry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erwan
                    Hesry</a> on <a
                        href="https://unsplash.com/s/photos/wheat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

                </p>
                <div id="title">Maize Production</div>
               
                 <BarChart filename={data.maize_data} datacol={data.maize_col} suptitle={data.maize_title} width={width} height = {height} />
                 <BarChart filename={data.rice_data} datacol={data.rice_col} suptitle={data.rice_title} width={width} height={height} />
                 <BarChart filename={data.wheat_data} datacol={data.wheat_col} suptitle={data.wheat_title} width={width} height={height} />
               
            </Fragment>
        ];
    }
}

export default App;