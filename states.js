












//Bailey work area 14-35
$(document).ready(function () {
    // var state = 'Virginia'
    var api_url = 'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest'
      $.ajax({
          url: api_url,
          method: "GET",
            success: function (current) {
              var population = show(current)
              $("#testBox").html(population)
                function show(current) {
                    console.log(current.data); 
                };

                }
            })
        });
