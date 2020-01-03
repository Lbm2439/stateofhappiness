$(document).ready(function() {
  var api_income =
    "https://datausa.io/api/data?drilldowns=State&measures=Population,Adults%20With%20Major%20Depressive%20Episode,Household%20Income%20by%20Race&year=latest";
  $(".hint ").click(function() {
    var foundState = $(this).attr("title");
    $.ajax({
      url: api_income,
      method: "GET",
      success: function(html) {
        var stateIncome = html.data;
        var incomeResult = incomeByState(stateIncome, foundState);
        var currentPop = incomeResult.Population;
        // $("#DivId").append(Math.round(10 * incomeResult.Episode) / 10);
        // $("#DivId").append(incomeResult.Income);
        // console.log(incomeResult);
        // console.log(incomeResult.Income);
        // console.log(Math.round(10 * incomeResult.Episode) / 10  );
        // console.log(incomeResult.Population); 
      }
    });
  });
  function incomeByState(stateIncome, stateName) {
    var stateInfo = { Income: "", Episode: "", Population: "" };
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
        if (stateIncome[i].hasOwnProperty("Population")) {
          stateInfo.Population = stateIncome[i]["Population"];
        }
      }
    }
    return stateInfo;
  }
});
