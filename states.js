$(document).ready(function () {

    //THIS IS FOR THE MAP, DONT DELETE

    // new Request.JSON({
    //     url: "map.php",
    //     onSuccess: function(data) {
    //         render(data, {
    //             editor: false
    //         }); 
    //     }
    //     }).get({
    //         id: 87374,
    //         data: true
    //     });
    //END

    // function beer(){
    $(".hint ").click(function () {
        console.log(this);
        var stateClicked = $(this).attr("title");

        console.log(stateClicked);
        var page = 1;
        var type = "micro"
        
        // console.log(queryURL);
        https://api.openbrewerydb.org/breweries?by_state=virginia&by_type=micro&page=3&per_page=50&sort=name
        var beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + stateClicked + "&page=" + page + "&per_page=50&sort=name";

        $.ajax({
            url: beerURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
            });
         });
        // };


// if (response != null) page +=

// beer()

           

            

        population();
    });


    function population() {
        var urlStateInfo = "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest";

        $.ajax({
            url: urlStateInfo,
            method: "GET",
            success: function (population) {
                var population = show(population);

                function show(population) {


                    // var currentDate = moment().format("dddd, MMM Do YYYY");
                    // $("#today").text
                    //     (currentDate);

                    console.log("fuck this")
                    console.log(population)
                    return

                    // "<h2>" + current.name + " (" + currentDate + ")" + ('<img src="https://openweathermap.org/img/wn/' + current.weather[0].icon + '.png"/>') + "</h2>" +
                    //     "<p><strong>Temperature</strong>: " + current.main.temp + " °F" + "</p>" +
                    //     "<p><strong>Humidity</strong>: " + current.main.humidity + "%" + "</p>" +
                    //     "<p><strong>Wind Speed</strong>: " + current.wind.speed + " MPH" + "</p>"

                };



            }
        });

    };

// });





                    // });




                        //     // var state = 'Virginia'
                        //     var api_url =
                        //       "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest";
                        //     $.ajax({
                        //       url: api_url,
                        //       method: "GET",
                        //       success: function(current) {
                        //         var population = show(current);
                        //         $("#testBox").html(population);
                        //         function show(current) {
                        //           console.log(current.data);
                        //         }
                        //       }
                        //     });
                        //   });