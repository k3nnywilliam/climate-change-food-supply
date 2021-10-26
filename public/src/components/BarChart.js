import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import * as d3 from 'd3';


class BarChart extends Component {
    constructor(props) {
        super(props);
    }

    chartRef = React.createRef();

    componentDidMount() {
        const ctx = this.chartRef.current.getContext("2d");

        const mydatacol = String(this.props.datacol);
        const mydatatitles = String(this.props.suptitle);

        d3.csv(this.props.filename).then(function (data) {

            const country_labels = data.map(function (d) { return d['countries'] });
            const df = data.map(function (d) { return +d[mydatacol] });
            let country_colors = [
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)',
                'rgba(201, 203, 207)',
                'rgba(60, 80, 202)',
                'rgba(230, 50, 100)',
                'rgba(245, 50, 50)'
            ]

            new Chart(ctx, {
                type: 'bar',
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: mydatatitles,
                            padding: {
                                top: 10,
                                bottom: 30
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: true,
                    showScale: false,
                    legend: {
                        display: true
                    },
                    scales: {
                        x: {

                            title: {
                                display: true,
                                text: 'Countries',
                                align: 'center',
                                padding: 10
                            }

                        },
                        y: {

                            title: {
                                display: true,
                                text: 'production average 2000 to 2006 in t (FAO)',
                                align: 'center'
                            }

                        }

                    },
                    transitions: {
                        show: {
                            animations: {
                                x: {
                                    from: 0
                                },
                                y: {
                                    from: 0
                                }
                            }
                        },
                        hide: {
                            animations: {
                                x: {
                                    to: 0
                                },
                                y: {
                                    to: 0
                                }
                            }
                        }
                    }
                },
                data: {
                    labels: country_labels,
                    datasets: [
                        {
                            label: 'Hide/Unhide chart',
                            data: df,
                            backgroundColor: country_colors
                        }
                    ]
                }
            })
        }).catch(function (err) {
            console.log('ERROR: Missing data')
            throw err;
       
        })
    }

    render() {
        return (
            <div>
                <canvas width={this.props.width} height={this.props.height} ref={this.chartRef}></canvas>
            </div>
        );
    }
}


export default BarChart;