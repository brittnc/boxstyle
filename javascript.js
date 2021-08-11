// when grow button is clicked,
document.getElementById("button1").addEventListener("click", function(){

	//increase size of box.
    document.getElementById("box").style.height = "200px";

    document.getElementById("box").style.width = "200px";

});

// when blue button is clicked,
document.getElementById("button2").addEventListener("click", function(){

   	//change box color to blue.    	
   	document.getElementById("box").style.backgroundColor = "Blue";

});

// when pink button is clicked, 
document.getElementById("button3").addEventListener("click", function(){

    //change box color to pink.
    document.getElementById("box").style.backgroundColor = "Pink";

});

// when fade button is clicked,
document.getElementById("button4").addEventListener("click", function(){

   	//make the box fade.
   	document.getElementById("box").style.opacity = "0.3";
	
});

// when shrink button is clicked,
document.getElementById("button5").addEventListener("click", function(){

        //decrease size of box.
document.getElementById("box").style.height = "90px";

document.getElementById("box").style.width = "90px";

});

// when reset button is clicked,
document.getElementById("button6").addEventListener("click", function(){

	//make the box back to starting point.
    document.getElementById("box").style.height = "150px";

    document.getElementById("box").style.width = "150px";

    document.getElementById("box").style.backgroundColor = "orange";

    document.getElementById("box").style.opacity = "1.0";



});


