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


    // Click Function
    $(".hint ").click(function () {
        // console.log(this);
        let foundState = $(this).attr("title");


        // Find capiatl of state clicked and breweries in capital
        $.ajax({
            url: 'https://api.myjson.com/bins/1b1fgk',
            method: "GET"
        })
            .then(function (response) {

            })

        $.ajax({
            url: 'https://api.myjson.com/bins/1b1fgk',
            method: "GET",
            success: function (current) {
                var capitalData = current.states
                var stateResult = findCapital(capitalData, foundState)
                var capital = stateResult.capital
                var currentState = stateResult.State
                var page = 1
                var count = 0
                //   console.log(capital);

                //   var beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + foundState + "&by_city=" + capital + "&page=" + page + "&per_page=50&sort=name";
                var beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + foundState + "&page=" + page + "&per_page=50&sort=name";

                function getBeer() {
                    $.ajax({
                        url: beerURL,
                        method: "GET"
                    })

                        .then(function (response) {
                            if (response.length === 50) {
                                page++
                                //   beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + foundState + "&by_city=" + capital + "&page=" + page + "&per_page=50&sort=name";
                                beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + foundState + "&page=" + page + "&per_page=50&sort=name";

                                //   console.log(response);

                                $.ajax({
                                    url: beerURL,
                                    method: "GET"
                                })
                                getBeer()
                                count = (count + response.length);
                                // console.log(count);

                            }
                            else {

                                // console.log(response);
                                count = (count + response.length);
                                // console.log(count);
                                return
                            }
                        })
                };

                getBeer();



            }


        });



        function findCapital(capitalData, stateName) {
            for (var i = 0, len = capitalData.length; i < len; i++) {
                if (capitalData[i].name === stateName) {
                    return capitalData[i];
                }
            }
        }





        //  function dictionary() {

        var dictionaryURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + foundState + "?key=49bde772-aaaf-42cf-a691-47d34eeab1e9"


        $.ajax({
            url: dictionaryURL,
            method: "GET"
        })

            .then(function (response) {

                let sliceDef = null

                for (var i = 0; i < response.length; i++) {
                    if (foundState == "Maine") {
                        sliceDef = "state on the Atlantic coast in the northeastern U.S. and bordering on the Canadian provinces of Quebec and New Brunswick; capital Augusta area 33,265 square miles (86,156 square kilometers)"
                        console.log(sliceDef)
                    }
                    if (foundState == "Washington") {
                        sliceDef = "state in the northwestern U.S. bordering the Pacific Ocean, the Strait of Juan de Fuca, Puget Sound, the Strait of Georgia, and British Columbia, Canada; capital Olympia area 68,192 square miles (177,299 square kilometers)"
                        console.log(sliceDef)
                    }
                    if (foundState == "Texas") {
                        sliceDef = "state in the southern U.S. bordering on Mexico and the Gulf of Mexico; capital Austin area 266,807 square miles (691,030 square kilometers)"
                        console.log(sliceDef)
                    }
                    if (foundState == "Delaware") {
                        sliceDef = "state of the eastern U.S. bordering on the Delaware River, Delaware Bay, and the Atlantic; capital Dover area 2057 square miles (5348 square kilometers)"
                        console.log(sliceDef)
                    }
                    if (foundState == "Illinois") {
                        sliceDef = "state in the central part of the U.S. having the Mississippi River as its western boundary and bordering on Lake Michigan in the northeast; capital Springfield area 56,400 square miles (146,640 square kilometers)"
                        console.log(sliceDef)
                    }


                    else if (response[i].shortdef != 'geographical name') {
                        return response[i].shortdef,
                            defArray = response[i].shortdef,
                            searchString = 'state',
                            result = defArray.findIndex((i) => { return i.startsWith(searchString); }, searchString),
                            goodDef = defArray[result],
                            sliceDef = goodDef.slice(0, goodDef.lastIndexOf(', population')),
                            console.log(sliceDef)

                    }

                }

            })

    })




    // population();

});


    // function population() {
    //     var urlStateInfo = "https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest";

    //     $.ajax({
    //         url: urlStateInfo,
    //         method: "GET",
    //         success: function (population) {
    //             var population = show(population);

    //             function show(population) {


    //                 console.log(population)
    //                 return


    //             };



    //         }
    //     });

    // };


