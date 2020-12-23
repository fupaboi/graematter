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
               'Dec 20','Dec 21','Dec 21','Dec 22'],
      datasets: [
      {
         data:[,,,,,
               ,,,,,
               ,,,,,
               ,,,,,
               ,,,,,
               ,,,,,
               ,,,,,
               ,0,2,6],
         
         borderColor:'rgba(0,230,0,0.3)',
         backgroundColor:'#FFFFFF',
         pointRadius:0,
         pointBackgroundColor:'rgba(0,230,0,0.3)',

      },
      {
         data:[-24.88,-24.88,-26.21,-25,-16.2,
               -15.75,-15.76,-15.79,-22.3,-21.3,
               -22.8,-22.7,-26.4,-26.2,-26.3,
                -26.4,-25.4,-27.2,-45.4,-42.1,
               -42.1,-42.1,-44,-44,-42,
               -41,-30,-30,-30,-31,
               -33,-35,-29,-28,-28,
               -28,0,,],

         borderColor:'rgba(230,0,0,0.3)',
         backgroundColor:'#FFFFFF',
         pointRadius:0,
         pointBackgroundColor:'rgba(230,0,0,0.3)',

      },
       ],
     },

    options: {
      tooltips:{
        yAlign:'top',
        displayColors:false,
        mode:'x-axis',
        titleAlign:'center',
        bodyAlign:'center',
        titleFontFamily:'Montserrat',
        bodyFontFamily:'Montserrat',
        titleFontSize:15,
        bodyFontSize:15,
        titleFontStyle:'bold',
        titleFontColor:'rgba(0,0,0,0.3)',
        bodyFontColor:'rgba(255,255,255,1)',
        backgroundColor:'rgba(0,0,0,0.2)'
      },
      legend: {
         display: false
      },
      animation: {
      duration: 3500,    
      },     
      scales: {
         xAxes: [{
            gridLines: {
                drawBorder: false,
                display: false,
            },
            ticks: {
               fontSize: 12,
               fontStyle: 'bold',
               fontFamily: 'Montserrat',
               fontColor: 'white'
            },        
         }],
         yAxes: [{
            gridLines: {
                drawBorder: false,
                display: false,
            },
            ticks: {
               fontSize: 1,
               fontColor: 'white'             
            },
         }]
      },
     },  
   });

var ct_bar = document.getElementById("my_bar_chart").getContext("2d");

var g_back= 'rgba(0,230,0,0.3)'
var r_back= 'rgba(230,0,0,0.3)'

var my_bar_chart = new Chart(ct_bar, {
   type:'bar',
   data:{
      labels: ['1','2','3','4','5','6','7','8','9','10',
               '11','12','13','14','15','16','17','18','19','20',
               '21','22','23','24','25','26','27','28','29','30',
               '31','32','33','34','35','36','37','38','39','40',
               '41','42','43','44','45','46','47','48','49','50',
               '51','52','53','54','55','56','57','58','59','60',
               '61','62','63','64','65','66'],
      datasets: [
      {
         data:[-2.61,-1.44,1.78,-1.08,-0.17,-1.30,-4.25,6.9,-1.35,-2.02,
               12.22,-2.76,-1.69,5.03,-4,-2.75,0.33,-2.33,3.41,-3.14,
               -3.06,-3.55,8.39,-2.92,-2.84,2.53,3.47,-2.53,-0.85,1.86,
               -0.49,4.43,-3.95,-2.2,-1.5,-2.6,-3.48,-2.95,-3.98,-3.6,
               1.69,1.73,-0.3,-1.1,3.27,-3.65,2.6,-0.1,2.62,-3.87,
               3.07,-0.55,-2.55,14.5,-2.39,-1.72,0.52,-3.03,1.12,5.68,
               0.85,-4,0,4.67,30.16,4.1],
         borderWidth:0,
         backgroundColor:[r_back,r_back,g_back,r_back,r_back,r_back,r_back,g_back,r_back,r_back,
                          g_back,r_back,r_back,g_back,r_back,r_back,g_back,r_back,g_back,r_back,
                          r_back,r_back,g_back,r_back,r_back,g_back,g_back,r_back,r_back,g_back,
                          r_back,g_back,r_back,r_back,r_back,r_back,r_back,r_back,r_back,r_back,
                          g_back,g_back,r_back,r_back,g_back,r_back,g_back,r_back,g_back,r_back,
                          g_back,r_back,r_back,g_back,r_back,r_back,g_back,r_back,g_back,g_back,
                          g_back,r_back,g_back,g_back,g_back,g_back],
      },
      ],
   },
    options: {
      tooltips:{
        yAlign:'top',
        displayColors:false,
        mode:'x-axis',
        titleAlign:'center',
        bodyAlign:'center',
        titleFontFamily:'Montserrat',
        bodyFontFamily:'Montserrat',
        titleFontSize:15,
        bodyFontSize:15,
        titleFontStyle:'bold',
        titleFontColor:'rgba(0,0,0,0.3)',
        bodyFontColor:'rgba(255,255,255,1)',
        backgroundColor:'rgba(0,0,0,0.2)'
      },
     animation: {
     duration: 3500,    
      },     
      legend: {
         display: false
      },
      scales: {
         xAxes: [{
            gridLines: {
                drawBorder: false,
                display: false,
            },

            ticks: {
               fontSize: 0,
               fontStyle: 'bold',
               fontFamily: 'Montserrat',
               fontColor: 'black' 
            },
         }],
         
         yAxes: [{
            gridLines: {
                drawBorder: false,
            },

            ticks: {
               fontSize: 1, 
               fontColor: 'white'            
            },

         }],
      },
   },   
});
