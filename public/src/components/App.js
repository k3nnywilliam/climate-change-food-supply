import React, { Component, Fragment } from 'react';
import './App.css';
import BarChart from './BarChart.js';

class App extends Component {
    render() {
        let maize_data = "data/maize_top_ten.csv";
        let rice_data = "data/rice_top_ten.csv";
        let wheat_data = "data/wheat_top_ten.csv";
        let maize_col  = "MZ_2000";
        let rice_col  = "RI_2000";
        let wheat_col  = "WH_2000";

        let maize_title = "Top 10 countries of maize production average 2000 to 2006 in t (FAO)";
        let rice_title = "Top 10 countries of rice production average 2000 to 2006 in t (FAO)";
        let wheat_title = "Top 10 countries of wheat production average 2000 to 2006 in t (FAO)";

        return [
            <Fragment>
                <div><img src="images/wheat.jpg" /></div>
                <p>Photo by <a
                    href="https://unsplash.com/@erwanhesry?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Erwan
                    Hesry</a> on <a
                        href="https://unsplash.com/s/photos/wheat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

                </p>
                <div id="title">Maize Production</div>
               
                 <BarChart filename={maize_data} datacol={maize_col} suptitle={maize_title} />
                 <BarChart filename={rice_data} datacol={rice_col} suptitle={rice_title} />
                 <BarChart filename={wheat_data} datacol={wheat_col} suptitle={wheat_title} />
               
            </Fragment>
        ];
    }
}

export default App;