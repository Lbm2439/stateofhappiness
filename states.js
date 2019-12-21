//Bailey work area
$(document).ready(function() {
  var api_url =
    "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest";
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
        console.log(currentState, currentPop);
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
