$(document).ready(function(){
    var random=Math.floor(Math.random() *101+19)
    

    var ball1= Math.floor(Math.random()*11+1)
    var ball2= Math.floor(Math.random() *11+1)
    var ball3= Math.floor(Math.random() *11+1)
    var ball4= Math.floor(Math.random() *11+1)

    $('#numberLosses').text(losses);
    $('#numberWins').text(wins);

    var userTotal=0;
    var wins= 0;
    var losses= 0;
   

    function reset(){
        Random=Math.floor(Math.random() *101+19);
        console.log(Random)
        
        ball1=Math.floor(Math.random()*11+1);
        ball2=Math.floor(Math.random()*11+1);
        ball3=Math.floor(Math.random()*11+1);
        ball4=Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);

        function won(){
            alert ("YAY! You Won!");
            wins++;
            $('numberWins').text(wins);
            reset();
        }


        function lost(){
            alert ("Ohhhh NOO! You Lost!");
            losses++
            $('numberLosses').text(losses);
            reset();

        }

        $('#one').on ('click', function(){
            userTotal = userTotal + ball1;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal); 
                  
                if (userTotal == Random){
                  won();
                }
                else if ( userTotal > Random){
                  lost();
                }   
          })  
          $('#two').on ('click', function(){
            userTotal = userTotal + ball2;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal); 
                if (userTotal == Random){
                  won();
                }
                else if ( userTotal > Random){
                  lost();
                } 
          })  
          $('#three').on ('click', function(){
            userTotal = userTotal + ball33;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal);
        //sets win/lose conditions
                  if (userTotal == Random){
                  won();
                }
                else if ( userTotal > Random){
                  lost();
                } 
          })  
          $('#four').on ('click', function(){
            userTotal = userTotal + ball4;
            console.log("New userTotal= " + userTotal);
            $('#finalTotal').text(userTotal); 
              
                  if (userTotal == Random){
                  won();
                }
                else if (userTotal > Random){
                  lost();
                }
          });   


        }
    }


)


