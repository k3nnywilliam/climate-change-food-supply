let ctx = document.getElementById('myChart');

let filename = "data/maize_top_ten.csv";

d3.csv(filename, function (error, data) {
    if (error) {
        throw error;
    }

    let country_labels = data.map(function (d) { return d.countries });
    let maize_data = data.map(function (d) { return +d.MZ_2000 });
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

    let myChart = new Chart('myChart', {
        type: 'bar',
        options: {
            plugins: {
                title: {
                    display:true,
                    text: 'Top 10 countries of maize production average 2000 to 2006 in t (FAO)',
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
                        display:true,
                        text: 'Countries',
                        align: 'center',
                        padding: 10
                      }

                },
                y: {
                    
                    title: {
                        display:true,
                        text: 'Maize per tonne',
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
                    data: maize_data,
                    backgroundColor: country_colors
                }
            ]
        }
    })
});
