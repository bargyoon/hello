<template>
   <div id="chart">
        <apexChart type="line" height="350" width="600" :options="lineChartOptions" :series="series1"></apexChart>
        <apexChart type="donut" height="350" :options="donutChartOptions" :series="series2"></apexChart>
      </div>
      
</template>

<script>
export default {

  data() {
    return {
      series1: [{
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      series2: [44, 55, 41, 17, 15],
      donutChartOptions: {
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
           plotOptions: {
             pie: {
               donut: {
                 labels: {
                   show: true,
                   name: {
                     show: true,
                     fontSize: '22px',
                     formatter: function (val) {
            return val
          }
                   },
                   value: {
                     show: true,
                     fontSize: '16px',
                     formatter: function (val) {
            return val
          }
                   },
                   total: {
                     show: true,
                     label: 'Total',
                     
                   }
                 }
               }
             }
           }
          }
        }]
      },
      lineChartOptions: {
        chart: {
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
      
     }
          
   },
}
</script>

<style>

</style>