import React, { Component, Fragment } from 'react';
import './App.css';
import BarChart from './BarChart.js';
import {data} from './DataVariables.js';

import img from './images/wheat.jpg';
import maize_data from "./csv_files/maize_top_ten.csv";
import rice_data from "./csv_files/rice_top_ten.csv";
import wheat_data from "./csv_files/wheat_top_ten.csv";

class App extends Component {
    render() {
        const width = 1200;
        const height = 600;
        
        return [
            <Fragment>
                <div><img src={img} /></div>
                <p>Photo by <a
                    href="https://unsplash.com/@erwanhesry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erwan
                    Hesry</a> on <a
                        href="https://unsplash.com/s/photos/wheat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

                </p>
                <div id="title">Maize Production</div>
               
                 <BarChart filename={maize_data} datacol={data.maize_col} suptitle={data.maize_title} width={width} height = {height} />
                 <BarChart filename={rice_data} datacol={data.rice_col} suptitle={data.rice_title} width={width} height={height} />
                 <BarChart filename={wheat_data} datacol={data.wheat_col} suptitle={data.wheat_title} width={width} height={height} />
               
            </Fragment>
        ];
    }
}

export default App;