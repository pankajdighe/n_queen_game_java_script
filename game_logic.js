var myQueenMap = new Map();
var gameSize=4;
var flag=0;
			 $( document ).ready(function() {

			 	console.log( "document loaded" );
       			
       			setGame();
    		});

			


		    function tableText(tableCell) {
		  
				var colIndex = $("#n_queen_table td").index(tableCell);

				var row_index=parseInt(colIndex/4)
				var col_index=parseInt(colIndex%4)

				console.log("row is "+parseInt(colIndex/gameSize));
		    	console.log("col is "+parseInt(colIndex%gameSize));

		    	

		    	if(myQueenMap.get(colIndex)==undefined && myQueenMap.size<=gameSize-1){

		    		

		    		myQueenMap.forEach(function (item, key, mapObj) {
   						 //document.write(item.toString() + "<br />");
   						 var temp_row_i=parseInt(key/gameSize);
   						 var temp_col_i=parseInt(key%gameSize);

   						 if((temp_row_i==row_index)||(col_index==temp_col_i)||(temp_row_i-temp_col_i==row_index-col_index)||(temp_row_i+temp_col_i==row_index+col_index)){

   						 	flag=1;
   						 	console.log("cannot add this queen")

   						 }


					});

		    		console.log("Flag is "+flag)
		    		if(flag!=1){
		    		myQueenMap.set(colIndex, "true");
		    		tableCell.style.backgroundColor = "red"
		    		console.log("added");


		    		if(myQueenMap.size==gameSize){

		    		alert("Congratulations You Won !!!");
		    		resetGame();

		    		}

		    		}
		    		flag=0;

		    	}else{

		    		tableCell.style.backgroundColor = "green"
		    		 myQueenMap.delete(colIndex)
		    		console.log("removed"+Object.keys(myQueenMap));


		    	}

		  
		    }


		    function setGame(){


       			 var table = document.getElementById("n_queen_table");

       			 if (table != null) {
		        for (var i = 0; i < table.rows.length; i++) {
		            for (var j = 0; j < table.rows[i].cells.length; j++)
 					{

 					table.rows[i].cells[j].style.backgroundColor = "green"
		            table.rows[i].cells[j].onclick = function () {
		                tableText(this);
		            };
		        	}
		        }

		   

		        				
		    }



		    }


		    function resetGame(){



		    	window.location.reload();
		    }


		 
		  


