var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
   type:'line',
   data:{

      labels: ['Nov 15','Nov 16','Nov 17','Nov 18','Nov 19',
               'Nov 20','Nov 21','Nov 22','Nov 23','Nov 24',
               'Nov 25','Nov 26','Nov 27','Nov 28','Nov 29',
               'Nov 30','Dec 1','Dec 2','Dec 3','Dec 4',
               'Dec 5','Dec 6','Dec 7','Dec 8','Dec 9',
               'Dec 10','Dec 11','Dec 12','Dec 13','Dec 14',
               'Dec 15','Dec 16','Dec 17','Dec 18','Dec 19',
               'Dec 20','Dec 21','Dec 22','Dec 23','Dec 24',
               'Dec 25','Dec 26','Dec 27','Dec 28','Dec 29',
               'Dec 30','Dec 31','Jan 1','Jan 2','Jan 3',
               'Jan 4','Jan 5','Jan 6','Jan 7','Jan 8',
               'Jan 9','Jan 10','Jan 11','Jan 12','Jan 13',
               'Jan 14','Jan 15','Jan 16','Jan 17','Jan 18',
               'Jan 19','Jan 20','Jan 21','Jan 22','Jan 23',
               'Jan 24','Jan 25','Jan 26','Jan 27','Jan 28',
               'Jan 29','Jan 30','Jan 31','Feb 1','Feb 2',
               'Feb 3','Feb 4','Feb 5','Feb 6','Feb 7',
               'Feb 8','Feb 9','Feb 10','Feb 11','Feb 12',
               'Feb 13','Feb 14','Feb 15','Feb 16','Feb 17',
               'Feb 18','Feb 19','Feb 20','Feb 21','Feb 22',
               'Feb 23','Feb 24','Feb 25','Feb 26','Feb 27',
               'Feb 28','Mar 1','Mar 2','Mar 3','Mar 4',
               'Mar 5','Mar 6','Mar 7','Mar 8','Mar 9',
               'Mar 10','Mar 11','Mar 12'],
      
      datasets: [
      {  
         label: 'Equity %',
         data:[-24.88,-24.88,-26.21,-25,-16.2,
               -15.75,-15.76,-15.79,-22.3,-21.3,
               -22.8,-22.7,-26.4,-26.2,-26.3,
                -26.4,-25.4,-27.2,-45.4,-42.1,
               -42.1,-42.1,-44,-44,-42,
               -41,-30,-30,-30,-31,
               -33,-35,-29,-28,-28,
               -28,2,6,7,7,
                7,7,7,2,1,
               -1,-10,-17,-17,-17,
               -16,-19,-25,-29,-19,
               -20,-20,-20,-16,-17,
               -22,-22,-22,-22,-27,
               -22,-23,-12,-12,-12,
               -12,-16,-16,-4,-2,
               -13,-13,-14,-10,-5,
               -5,-13,-20,-20,-20,
               -25,-20,-27,-36,-40,
               -40,-40,-49,-56,-57,
               -50,-46,-46,-46,-35,
               -38,-40,-43,-36,-36,
               -36,-38,-38,-29,-29,
               -29,-30,-30,-32,-35,
               -41,-41,-10],

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
    labels:[1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1],
    datasets:[
    {
      data:[1,2,-3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1],
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
