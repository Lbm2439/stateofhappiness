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

// cities in State
    // $.ajax({
    //     url: 'https://api.census.gov/data/2018/pep/population?get=GEONAME,POP&for=place&in=state:01&key=494e1cd55a3644294c9d5ccdfa0ebba64ee2b477',
    //     method: "GET"
    // })
    //     .then(function (response) {
    //         console.log(response);
    //     })

// End Cities in state


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
       
// Find capiatl of state clicked and breweries in capital
        $.ajax({
            url: 'https://api.myjson.com/bins/1b1fgk',
            method: "GET"
        })
            .then(function (response) {
                console.log(response.states);
            })
        
            $.ajax({
                url: 'https://api.myjson.com/bins/1b1fgk',
                method: "GET",
                success: function(current) {
                  var capitalData = current.states;
                  var stateResult = findStateByName(capitalData, stateClicked);
                  var capital = stateResult.capital;
                  var currentState = stateResult.State;
                  console.log(capital);
                  
                  var beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + stateClicked + "&by_city=" + capital + "&page=" + page + "&per_page=50&sort=name";
                  console.log (beerURL);
                          // var beerURL = "https://api.openbrewerydb.org/breweries?by_city=richmond&by_state=virginia&by_type=micro&page=1&per_page=50&sort=name"
                          $.ajax({
                              url: beerURL,
                              method: "GET"
                          })
                              .then(function (response) {
                                  console.log(response);
                              })
                }
              });
            // });
          
            
            function findStateByName(capitalData, stateName) {
              for (var i = 0, len = capitalData.length; i < len; i++) {
                if (capitalData[i].name === stateName) {
                  return capitalData[i];
                }
              }
            }
        

     
         

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
