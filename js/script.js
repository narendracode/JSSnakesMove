
    var B1X;var B1Y;
	var B2X;var B2Y;
	var B3X;var B3Y;
	var B4X;var B4Y;
    var move = 50;	
	var upperBoundry = -40;
	var bottomBoundry = $(document).height()-200;
    var leftBoundry = 70;
	var rightBoundry = $(document).width()-110; 
    var qMain=new Queue();
       
   $('<audio id="chatAudio"><source src="notify.ogg" type="audio/ogg"><source src="notify.mp3" type="audio/mpeg"><source src="notify.wav" type="audio/wav"></audio>').appendTo('body');

	
	$(document).keyup(function(event) {
	var keyUp = 'H';
	var keyDown='J';
	var keyLeft = 'K';
	var keyRight = 'L';
	//identify the key 

	B1X = $('#b1').position().left;
	B1Y= $('#b1').position().top;
	
    B2X = $('#b2').position().left;
	B2Y= $('#b2').position().top;
	
	B3X = $('#b3').position().left;
	B3Y= $('#b3').position().top;
	qMain.enqueue(new Pos(B3X,B3Y));
    qMain.enqueue(new Pos(B2X,B2Y));
    qMain.enqueue(new Pos(B1X,B1Y));
 
    
 
	var key = String.fromCharCode(event.keyCode);
             
        switch(key){
	  case keyUp: {
		       if(isWithinUpperBoundary('#b1')){
			      moveUp();
			    }
		      break;
		      }
	  case keyDown:{
             if(isWithinBottomBoundary('#b1')){
		            moveDown();
		       }		      
		        break;
		       }	
	  case keyLeft:{ 
		     if(isWithinLeftBoundary('#b1')){
		       moveLeft();
		      }
		       break;
		       }
	  case keyRight:{
		     if(isWithinRightBoundary('#b1')){
		         moveRight();
		      }
		       break;
		       }
	  case '&': {
	 		       if(isWithinUpperBoundary('#b1')){
	 			      moveUp();
	 			    }
	 		      break;
	 		      }
	  case '(':{
		         if(isWithinBottomBoundary('#b1')){
				         moveDown();
				   }		      
				   break;
				 }
	  case "'":{
	   		     if(isWithinRightBoundary('#b1')){
	   		         moveRight();
	   		      }
	   		       break;
	   		       }
	  case '%':{ 
		 		     if(isWithinLeftBoundary('#b1')){
		 		       moveLeft();
		 		    }
		 		   break;
		 		}			  
	  default:{
		  alert('key is:'+key);
		   }
	}			  
	});//keyUp function

        function isWithinBoundary(element){
	var leftB  = $(element).position().left;
        var topB   = $(element).position().top;
    // alert(topB+'>='+upperBoundry+' && '+topB+'<='+bottomBoundry+' && '+leftB+' >= '+leftBoundry+' && '+leftB+' <= '+rightBoundry)	
	if(topB>=upperBoundry && topB<=bottomBoundry && leftB >=leftBoundry && leftB <=rightBoundry){
	return true;
	}
	else{

          $('#chatAudio')[0].play();
	   return  false;
	}
	}//isWithinBoundary
	
	
    function isWithinUpperBoundary(element){
     var leftB  = $(element).position().left;
     var topB   = $(element).position().top;
      if(topB>=upperBoundry){
     return true;
      }
      else{
      $('#chatAudio')[0].play();
     return  false;
    }
   }//isWithinUpperBoundary
	
   function isWithinBottomBoundary(element){
    var leftB  = $(element).position().left;
    var topB   = $(element).position().top;
     if(topB<=bottomBoundry){
    return true;
     }
     else{
     $('#chatAudio')[0].play();
    return  false;
   }
  }//isWithinBottomBoundary
	
  function isWithinLeftBoundary(element){
   var leftB  = $(element).position().left;
   var topB   = $(element).position().top;
   //alert(leftB+'>='+leftBoundry);
    if(leftB>=leftBoundry){
   return true;
    }
    else{
    $('#chatAudio')[0].play();
   return  false;
  }
 }//isWithinLeftBoundary
	
 function isWithinRightBoundary(element){
  var leftB  = $(element).position().left;
  var topB   = $(element).position().top;
  //alert(leftB+'<='+rightBoundry);
   if(leftB<=rightBoundry){
  return true;
   }
   else{
   $('#chatAudio')[0].play();
  return  false;
 }
}//isWithinRightBoundary
	

        function moveUp(){
 var p = new Pos($('#b1').position().left,$('#b1').position().top-move);
	  shift(qMain,p);
	  var sHead = getHead(qMain);
	  var sBody = getBody(qMain);
	  var tail = getTail(qMain);
         $('#b1').css({top:sHead.top,left:sHead.left});
         $('#b2').css({top:sBody.top,left:sBody.left});
         $('#b3').css({top:tail.top,left:tail.left});
	}//moveUp

	function moveDown(){
	 var p = new Pos($('#b1').position().left,$('#b1').position().top+move);
		  shift(qMain,p);
		  var sHead = getHead(qMain);
		  var sBody = getBody(qMain);
		  var tail = getTail(qMain);
          $('#b1').css({top:sHead.top,left:sHead.left});
          $('#b2').css({top:sBody.top,left:sBody.left});
          $('#b3').css({top:tail.top,left:tail.left});
	}//moveDown
        
	function moveLeft(){
   	 var p = new Pos($('#b1').position().left-move,$('#b1').position().top);
   		  shift(qMain,p);
   		  var sHead = getHead(qMain);
   		  var sBody = getBody(qMain);
   		  var tail = getTail(qMain);
             $('#b1').css({top:sHead.top,left:sHead.left});
             $('#b2').css({top:sBody.top,left:sBody.left});
             $('#b3').css({top:tail.top,left:tail.left})
	}//moveLeft

	function moveRight(){
		var p = new Pos($('#b1').position().left+move,$('#b1').position().top);
   		  shift(qMain,p);
   		  var sHead = getHead(qMain);
   		  var sBody = getBody(qMain);
   		  var tail = getTail(qMain);
             $('#b1').css({top:sHead.top,left:sHead.left});
             $('#b2').css({top:sBody.top,left:sBody.left});
             $('#b3').css({top:tail.top,left:tail.left});

	}//moveRight
	
	
		function Queue()
		{
		 this.stac=new Array();
		 this.dequeue=function(){
		  return this.stac.pop();
		 }
		 this.enqueue=function(item){
		  this.stac.unshift(item);
		 }
		}

		function Pos(left,top){
		 this.top = top;
		 this.left = left;
		}

		function shift(Q,p){
			Q.dequeue();
			Q.enqueue(p);
		}
		
		function getHead(Q){
		var pos = Q.stac[0];
		//alert('Head:'+pos.left+','+pos.top);
		return pos;
		}

		function getBody(Q){
		var pos = Q.stac[1];
		//alert('body:'+pos.left+','+pos.top);
		return pos;
		}

		function getTail(Q){
		var pos = Q.stac[2];
		//alert('Tail:'+pos.left+','+pos.top);
		return pos;
		}


			


