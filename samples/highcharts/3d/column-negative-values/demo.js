$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column',
            margin: 75,
            is3d: true,
            options3d: {
                alpha: 15,
                beta: 15,
                depth: 50,
            }
        },
        xAxis: {
            gridLineWidth: 1
        },
        plotOptions: {
            column: {
                depth: 25,
                negativeColor: 'red',
            }
        },
        series: [{
            data: [-1, 3, -3, -2, 1, 0],
        }]
    });
});