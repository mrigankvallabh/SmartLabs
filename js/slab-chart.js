$.getJSON(
  'https://mrigankvallabh.github.io/SmartLabs/sam.json',
  function (data) {

    Highcharts.chart('myHighChart', {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'BTS Point 1 Chart Dated 6-Oct-2018'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
            'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime',
		dateTimeLabelFormats: {
         day: '%H:%M'
        },
		title: {
          text: 'Time'
        }
      },
      yAxis: {
        title: {
          text: 'RMS Velocity (\u03BCm/s)'
        },
		max: 400
      },
      legend: {
        enabled: true
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'line',
        name: 'BTS Point 1',
        data: data
      }]
    });
  }
);