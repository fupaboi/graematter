var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
   type:'line',
   data:{

      labels: ['Week 0','Week 1','Week 2'],
      
      datasets: [
      {  
         label: 'Equity %',
         data:[0,8.18,-2.8],

         borderColor:'rgba(255,0,0,1)',
         borderWidth:2,
         pointRadius:0,

      },
       ],
     },

    options: {
      
      scales: {
        yAxes: [{
          ticks: {
            display: false
                 }
               }],

        xAxes: [{
          ticks: {
            display: false
                 }
               }]
              },

      tooltips:{
        mode:'x-axis',
        backgroundColor:'rgba(255,0,0,0.5)',
        displayColors:false
              },
            },  
});
    
var ctx_bar = document.getElementById("myChart_bar").getContext("2d");

var myChart_bar = new Chart(ctx_bar, {
   type:'bar',
   data: {
    labels:[1,2,3,4,5,6,7,8,9,10,
            11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,
            31,32,33,34]
    datasets:[
    {
      data:[-0.91,13.98,5.63,-1.76,-1.53,-1.07,0.34,0.06,-0.1,-0.75,
             2.32,-1.67,-0.66,0.005,-1.36,-1.36,-1.36,0.2,-1.29,-1.74,
            -0.93,2.36,-1.21,-1.06,-1.65,-1.54,2.11,-2.06,-1.38,-1.2,
            -1.27,-2.28,0.96,0.36],
      label:"trade wise pnl %",
      backgroundColor:'rgba(0,255,255,1)',
    },
    ],
   },     
     options: {
      
      scales: {
        yAxes: [{
          ticks: {
            display: false
                 }
               }],

        xAxes: [{
          ticks: {
            display: false
                 }
               }]
              },

      tooltips:{
        mode:'x-axis',
        displayColors:false
              },
            },  
});
