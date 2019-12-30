//Bailey work area
$(document).ready(function() {
  var api_url =
    "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest";
  var api_income =
    "http://datausa.io/api/data?measure=Household%20Income%20by%20Race,Household%20Income%20by%20Race%20Moe&Geography=04000US34:neighbors:parents,04000US34,04000US34:similar";
  $(".hint ").click(function() {
    var foundState = $(this).attr("title");
    $.ajax({
      url: api_url,
      method: "GET",
      success: function(current) {
        var stateData = current.data;
        var stateResult = findStateByName(stateData, foundState);
        var currentPop = stateResult.Population;
        var currentState = stateResult.State;
        // console.log(currentState, currentPop);
      }
    });
    $.ajax({
      url: api_income,
      method: "GET",
      success: function(html) {
        var stateIncome = html.data;
        console.log(stateIncome);
      }
    });
  });

  function findStateByName(stateData, stateName) {
    for (var i = 0, len = stateData.length; i < len; i++) {
      if (stateData[i].State === stateName) {
        return stateData[i];
      }
    }
  }

  function incomeByState(stateIncome, stateName) {
    for (var i = 0, len = stateIncome.length; i < len; i++) {
      if (stateIncome[i].Geography === stateName) {
        return stateIncome[i];
        
      }
    }
  }
  
});

//Bailey work area
// //THIS IS FOR THE MAP, DONT DELETE
// new Request.JSON({
//   onSuccess: function(data) {
//     render(data, {
//       editor: false
//     });
//   }
// }).get({
//   id: 87374,
//   data: true
// });
