var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
	type:'line',
	data:{
		labels: ['','Nov','17','18','19',
		         '20','21','22','23','24',
		         '25','26','27','28','29',
			 '30','Dec'],
		datasets: [
		{
			data:[,,,,,
			      ,,,,,
			      ,,,,,
			      ,],
			borderWidth:4,
			borderColor:'rgba(0,255,0,0.2)',
			backgroundColor:'rgba(0,255,0,0.1)',

		},
		{
			data:[-24.88,-24.88,-26.21,-25,-16.2,
			      -15.75,-15.76,-15.79,-22.3,-21.3,
			      -22.8,-22.7,-26.4,-26.2,-26.3,
			      -26.4,-25.4],
			borderWidth:4,
			borderColor:'rgba(255,0,0,0.2)',
			backgroundColor:'rgba(255,0,0,0.2)',

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
            	labelString: 'equity percentage',
            	fontSize: 30,
            	fontStyle: 'bold',
      			fontFamily: 'Montserrat',          	
            },
      	}]
      }
     },	
	});
