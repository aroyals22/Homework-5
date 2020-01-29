userInputSpan=document.querySelector("#content");



//creating time/date display
const m = moment();

$("#currentDay").html("<h2>" + m.format("dddd ll") + "</h2>")

//function to save Content to localStorage when user clicks save button for any row
$(".saveBtn").on("click", function(){

    var content= $(this).siblings("input").val();
    localStorage.setItem($(this).siblings(".time-block").text(), content)
    });

//function to change background color of  rows dependent on time of day
function styleRows(){
    //if statements comparing variables to moment
    //change CSS properties .past/.present/.future
  $(".time-block").each(function(){
      //confirm correct text
      console.log($(this).text())
      //set text into input field
      var content = localStorage.getItem($(this).text())


      //populating text
      if(content){
          $(this).siblings("input").val(content)
      }
      //creating variables to compare time
      var blockTime = moment($(this).text(),"hh:mm A");
      var currentHour= m.format("hh:mm A");
      var currentTime=moment(currentHour,"hh:mm A")
      console.log(currentHour);
      
      
      //conditionals for background
      if(moment.max(blockTime,currentTime)===blockTime){
         
        $("input").addClass("future");
          console.log("this is future")
          
      }
       
        else if(currentTime.isBetween(blockTime,blockTime.add(1,"hours"))){
            $("input").addClass("present");
            console.log("present");
        }
            else{
                $("input").addClass("past");
                console.log("past");
                
            }


      console.log(blockTime);
  })
      
 
 
}
// renderUserInput();
//RUN FUNCTION
styleRows();
