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
        console.log(this);
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
                                console.log(count);

                            }
                            else {

                                // console.log(response);
                                count = (count + response.length);
                                console.log(count);
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

                for (var i = 0; i < response.length; i++) {
                    if (response[i].fl == 'geographical name') {
                        return response[i].shortdef,
                            defArray = response[i].shortdef,
                            console.log(defArray),
                            searchString = 'state',
                            result = defArray.findIndex((i) => { return i.startsWith(searchString); }, searchString),
                            goodDef = defArray[result],
                            sliceDef = goodDef.slice(0, goodDef.lastIndexOf(', population')),
                            console.log(sliceDef)
                    }


                    else {
                        return
                        //   console.log("poop")
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


