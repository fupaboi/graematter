var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
	type:'line',
	data:{
		labels: ['','Nov','17','18','19',
		         '20','21','22','23','24',
		         '25','26','27','28','29',
                         '30','Dec','2','3'],
		datasets: [
		{
			data:[,,,,,
			      ,,,,,
			      ,,,,,
                              ,,,],
			borderWidth:1,
			borderColor:'rgba(0,255,0,0.5)',
			backgroundColor:'rgba(0,255,0,0.1)',

		},
		{
			data:[-24.88,-24.88,-26.21,-25,-16.2,
			      -15.75,-15.76,-15.79,-22.3,-21.3,
			      -22.8,-22.7,-26.4,-26.2,-26.3,
                              -26.4,-25.4,-27.2,-45.4],
			borderWidth:1,
			borderColor:'rgba(255,0,0,0.5)',
			backgroundColor:'rgba(255,0,0,0.1)',

		},
	    ],
	  },

    options: {
      legend: {
         display: false
      },
      scales: {
      	xAxes: [{
      		ticks: {
      			fontSize: 15,
      			fontStyle: 'bold',
      			fontFamily: 'Montserrat',
      			fontColor: '#A4A4A4' 
      		},
            afterFit: function(scale) {
               scale.height = 100 //<-- set value as you wish 
            },
            scaleLabel: {
            	display: true,
            	labelString: 'date',
            	fontSize: 30,
            	fontStyle: 'bold',
      			fontFamily: 'Montserrat',          	
            },      		
      	}],
      	yAxes: [{
      		ticks: {
      			fontSize: 15,
      			fontStyle: 'bold',
      			fontFamily: 'Montserrat', 
      			fontColor: '#A4A4A4'     			
      		},
            afterFit: function(scale) {
               scale.width = 100 //<-- set value as you wish 
            },
            scaleLabel: {
            	display: true,
            	labelString: 'equity %',
            	fontSize: 30,
            	fontStyle: 'bold',
      			fontFamily: 'Montserrat',          	
            },
      	}]
      },
     },	
	});

var ct_bar = document.getElementById("my_bar_chart").getContext("2d");

var g_bor = 'rgba(0,255,0,0.7)'
var r_bor = 'rgba(255,0,0,0.5)'

var g_back = 'rgba(0,255,0,0.1)'
var r_back = 'rgba(255,0,0,0.1)'


var my_bar_chart = new Chart(ct_bar, {
   type:'bar',
   data:{
      labels: ['1','2','3','4','5','6','7','8','9','10',
               '11','12','13','14','15','16','17','18','19','20',
               '21','22','23','24','25','26','27','28','29','30',
               '31','32','33','34','35','36','37','38','39','40'],
      datasets: [
      {
         data:[-2.61,-1.44,1.78,-1.08,-0.17,-1.30,-4.25,6.9,-1.35,-2.02,
               12.22,-2.76,-1.69,5.03,-4,-2.75,0.33,-2.33,3.41,-3.14,
               -3.06,-3.55,8.39,-2.92,-2.84,2.53,3.47,-2.53,-0.85,1.86,
               -0.49,4.43,-3.95,-2.2,-1.5,-2.6,-3.48,-2.95,-3.98,-3.6],
         borderWidth:1,
         borderColor:[r_bor,r_bor,g_bor,r_bor,r_bor,r_bor,r_bor,g_bor,r_bor,r_bor,
                      g_bor,r_bor,r_bor,g_bor,r_bor,r_bor,g_bor,r_bor,g_bor,r_bor,
                      r_bor,r_bor,g_bor,r_bor,r_bor,g_bor,g_bor,r_bor,r_bor,g_bor,
                      r_bor,g_bor,r_bor,r_bor,r_bor,r_bor,r_bor,r_bor,r_bor,r_bor],
         backgroundColor:[r_back,r_back,g_back,r_back,r_back,r_back,r_back,g_back,r_back,r_back,
                          g_back,r_back,r_back,g_back,r_back,r_back,g_back,r_back,g_back,r_back,
                          r_back,r_back,g_back,r_back,r_back,g_back,g_back,r_back,r_back,g_back,
                          r_back,g_back,r_back,r_back,r_back,r_back,r_back,r_back,r_back,r_back],
      },
      ],
   },
    options: {
      legend: {
         display: false
      },
      scales: {
         xAxes: [{
            ticks: {
               fontSize: 15,
               fontStyle: 'bold',
               fontFamily: 'Montserrat',
               fontColor: '#A4A4A4' 
            },
            afterFit: function(scale) {
               scale.height = 100 //<-- set value as you wish 
            },
            scaleLabel: {
               display: true,
               labelString: 'trade number',
               fontSize: 30,
               fontStyle: 'bold',
               fontFamily: 'Montserrat',           
            },         
         }],
         
         yAxes: [{
            ticks: {
               fontSize: 15,
               fontStyle: 'bold',
               fontFamily: 'Montserrat', 
               fontColor: '#A4A4A4'             
            },
            afterFit: function(scale) {
               scale.width = 100 //<-- set value as you wish 
            },
            scaleLabel: {
               display: true,
               labelString: 'trade result in %',
               fontSize: 30,
               fontStyle: 'bold',
               fontFamily: 'Montserrat',           
            },
         }],
      },
   },   
});
