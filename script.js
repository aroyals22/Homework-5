userInputSpan=document.querySelector("#content");



//creating time/date display
const m = moment();

$("#currentDay").html("<h2>" + m.format("dddd ll") + "</h2>")

//function to save textContent when user clicks save button
$(".saveBtn").on("click", function(){

    var content= $(this).siblings("input").val();
    localStorage.setItem($(this).siblings(".time-block").text(), content)
    // renderUserInput()

});

// function renderUserInput(){

// var userContent = localStorage.getItem("content")
// console.log(userContent);
// userInputSpan.value = userContent; 






// }
//function to change background color of  rows dependent on time of day
function styleRows(){
    currentHour="";
    futureHour="";
    pastHour="";
    //if statements comparing variables to moment
    //change CSS properties .past/.present/.future
  $(".time-block").each(function(){
      console.log($(this).text())

      var content = localStorage.getItem($(this).text())
      if(content){
          $(this).siblings("input").val(content)
      }
      var blockTime = moment($(this).text(),"hh:mm A");



      var currentHour= m.format("hh:mm A");
      var currentTime=moment(currentHour,"hh:mm A")
      console.log(currentHour);
      if(moment.max(blockTime,currentTime)===blockTime){
         //what element to grab? 
        $().attr("class", "future");
          console.log("this is future")
          
      }
       
        else if(currentTime.isBetween(blockTime,blockTime.add(1,"hours"))){
            $().attr("class", "present");
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
styleRows();
