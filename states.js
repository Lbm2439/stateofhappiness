//Bailey work area
$(document).ready(function() {
  var api_url =
    "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest";
  var api_income =
    "https://datausa.io/api/data?drilldowns=State&measures=Adults%20With%20Major%20Depressive%20Episode,Household%20Income%20by%20Race&year=latest";
  $(".hint ").click(function() {
    var foundState = $(this).attr("title");
    $.ajax({
      url: api_url,
      method: "GET",
      success: function(current) {
        var stateData = current.data;
        var stateResult = findStateByName(stateData, foundState);
        var currentPop = stateResult.Population;
        console.log(currentPop);
      }
    });
    $.ajax({
      url: api_income,
      method: "GET",
      success: function(html) {
        var stateIncome = html.data;
        var incomeResult = incomeByState(stateIncome, foundState);
        // $("#DivId").append(Math.round(10 * incomeResult.Episode) / 10);
        // $("#DivId").append(incomeResult.Income);
        console.log(Math.round(10 * incomeResult.Episode) / 10);
        console.log(incomeResult.Episode);
        console.log(incomeResult.Income);
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
    var stateInfo = { Income: "", Episode: "" };
    for (var i = 0, len = stateIncome.length; i < len; i++) {
      if (stateIncome[i].State === stateName) {
        if (stateIncome[i].hasOwnProperty("Household Income by Race")) {
          stateInfo.Income = stateIncome[i]["Household Income by Race"];
        }
        if (
          stateIncome[i].hasOwnProperty("Adults With Major Depressive Episode")
        ) {
          stateInfo.Episode =
            stateIncome[i]["Adults With Major Depressive Episode"];
        }
      }
    }
    return stateInfo;
  }
});

//                             new Request.JSON({
//                             url: "map.php",
//                             onSuccess: function(data) {
//                                 render(data, {
//                                     editor: false
//                                 });
//                             }
//                             }).get({
//                                 id: 87374,
//                                 data: true
//                             });

// //END
