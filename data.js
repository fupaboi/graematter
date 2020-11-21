var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
	type:'line',
	data:{
		labels: ['Jan','Feb','March','April','May','June'],
		datasets: [
		{
			data:[10,20,12,23,19,34],
			borderWidth:4,
			borderColor:'rgba(0,255,0,0.2)',
			backgroundColor: 'rgba(0,255,0,0.1)'
		},
	    ],
	  },

    options: {
      legend: {
         display: false
      },
     },	
	});
