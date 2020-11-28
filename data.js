var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
	type:'line',
	data:{
		labels: ['','November','23','24','25',
		         '','','','','',
		         '','',''],
		datasets: [
		{
			data:[,,,,,
			      ,,,,,
			      ,,],
			borderWidth:4,
			borderColor:'rgba(0,255,0,0.2)',
			backgroundColor:'rgba(0,255,0,0.1)',

		},
		{
			data:[-24.88,-24.88,-26.21,-25,-16.2,
			      -15.75,-15.76,-15.79,-22.3,-21.3,
			      -22.8,-22.7,-26.4],
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
      			fontFamily: 'Montserrat'
      		}
      	}],
      	yAxes: [{
      		ticks: {
      			fontSize: 15,
      			fontFamily: 'Montserrat'      			
      		},
            afterFit: function(scale) {
               scale.width = 100 //<-- set value as you wish 
            },
            scaleLabel: {
            	display: true,
            	labelString: 'Equity %',
            	fontSize: 30,
            	//fontStyle: 'bold',
      			fontFamily: 'Montserrat'            	
            },
      	}]
      }
     },	
	});
