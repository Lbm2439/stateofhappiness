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
        let stateClicked = $(this).attr("title");

        console.log(stateClicked);
        var page = 1;
        var type = "micro"
        
        // console.log(queryURL);
        https://api.openbrewerydb.org/breweries?by_state=virginia&by_type=micro&page=3&per_page=50&sort=name
       
        // dictionary();
       

        $.ajax({
            url: 'https://api.myjson.com/bins/1b1fgk',
            method: "GET"
        })
            .then(function (response) {
                console.log(response.states[0].name);
            })
        

        var beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + stateClicked + "&page=" + page + "&per_page=50&sort=name";

        $.ajax({
            url: beerURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
            })
         

        //  function dictionary() {
           
        var dictionaryURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+ stateClicked + "?key=49bde772-aaaf-42cf-a691-47d34eeab1e9"
            
            
            $.ajax({
                url: dictionaryURL,
                method: "GET"
            })
            
                   
            
                        .then(function (response) {

                            
console.log(response.length);
console.log(response[0].fl);

// for (var i = 0, len = response.length; i < len; i++) {
//     if (resposne[i].fl === 'stateName') {
//       return stateData[i];
//     }
//   }

                            
                            var fullDef = response[0].shortdef;
                            var slice = fullDef[0].slice(0, fullDef[0].lastIndexOf(', population'));
                            console.log (slice);
                        })
                                
                        // str.slice(0, str.lastIndexOf('_'));
            
                })
            
        
       
            
            // };
            
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


    // function cityBrew() {

    //     $.ajax({
    //         url: 'https://api.myjson.com/bins/1b1fgk',
    //         method: "GET"
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })

    //         function findStateByName(response, cityName) {
    //             for (var i = 0, len = response.length; i < len; i++) {
    //               if (response[i].State === stateName) {
    //                 return stateData[i];
    //               }
    //             }
    //           }
        

    //     var beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + stateClicked + "&page=" + page + "&per_page=50&sort=name";

    //     $.ajax({
    //         url: beerURL,
    //         method: "GET"
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //         })

    // }

 
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