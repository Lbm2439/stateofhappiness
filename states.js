$(document).ready(function () {

    // document.getElementById(states).setAttribute("states", "scale(0.7)");

    var api_income =
        "https://datausa.io/api/data?drilldowns=State&measures=Population,Adults%20With%20Major%20Depressive%20Episode,Household%20Income%20by%20Race&year=latest";

    // Click Function
    $(".hint ").click(function () {
        
        $("#basicInfo").empty();
        $("#incomeInfo").empty();
        $("#mentalInfo").empty();
        $("#brewInfo").empty();
        $("#stateName").empty();


        let foundState = $(this).attr("title");
        localStorage.setItem("state", foundState);

        $("#stateName").append(foundState);

        $.ajax({
            url: api_income,
            method: "GET",
            success: function (html) {
                var stateIncome = html.data;
                var incomeResult = incomeByState(stateIncome, foundState);
                var currentPop = incomeResult.Population;
                currentPop = parseInt(currentPop, 10);
                currentPop = numberWithCommas(currentPop);
                $("#basicInfo").append("Population: " + currentPop + "<br></br>");
                incomeResult.Income = parseInt(incomeResult.Income, 10);
                incomeResult.Income = numberWithCommas(incomeResult.Income);
                $("#incomeInfo").append(incomeResult.Income);

                $("#mentalInfo").append((Math.round(10 * incomeResult.Episode) / 10) + "%");
            }
        });


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

                var beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + foundState + "&page=" + page + "&per_page=50&sort=name";

                function getBeer() {
                    $.ajax({
                        url: beerURL,
                        method: "GET"
                    })

                        .then(function (response) {
                            if (response.length === 50) {
                                page++
                                beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + foundState + "&page=" + page + "&per_page=50&sort=name";


                                $.ajax({
                                    url: beerURL,
                                    method: "GET"
                                })
                                getBeer()
                                count = (count + response.length);

                            }
                            else {

                                count = (count + response.length);
                                $("#brewInfo").append(count);
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


        var dictionaryURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + foundState + "?key=49bde772-aaaf-42cf-a691-47d34eeab1e9"


        $.ajax({
            url: dictionaryURL,
            method: "GET"
        })

            .then(function (response) {

                for (var i = 0; i < response.length; i++) {
                    if (foundState == "Maine") {
                        sliceDef = "state on the Atlantic coast in the northeastern U.S. and bordering on the Canadian provinces of Quebec and New Brunswick; capital Augusta area 33,265 square miles (86,156 square kilometers)"
                        $("#basicInfo").append(sliceDef);
                    }
                    if (foundState == "Washington") {
                        sliceDef = "state in the northwestern U.S. bordering the Pacific Ocean, the Strait of Juan de Fuca, Puget Sound, the Strait of Georgia, and British Columbia, Canada; capital Olympia area 68,192 square miles (177,299 square kilometers)"
                        $("#basicInfo").append(sliceDef);
                    }
                    if (foundState == "Texas") {
                        sliceDef = "state in the southern U.S. bordering on Mexico and the Gulf of Mexico; capital Austin area 266,807 square miles (691,030 square kilometers)"
                        $("#basicInfo").append(sliceDef);
                    }
                    if (foundState == "Delaware") {
                        sliceDef = "state of the eastern U.S. bordering on the Delaware River, Delaware Bay, and the Atlantic; capital Dover area 2057 square miles (5348 square kilometers)"
                        $("#basicInfo").append(sliceDef);
                    }
                    if (foundState == "Illinois") {
                        sliceDef = "state in the central part of the U.S. having the Mississippi River as its western boundary and bordering on Lake Michigan in the northeast; capital Springfield area 56,400 square miles (146,640 square kilometers)"
                        $("#basicInfo").append(sliceDef);
                    }


                    else if (response[i].shortdef != 'geographical name') {
                        return response[i].shortdef,
                            defArray = response[i].shortdef,
                            searchString = 'state',
                            result = defArray.findIndex((i) => { return i.startsWith(searchString); }, searchString),
                            goodDef = defArray[result],
                            sliceDef = goodDef.slice(0, goodDef.lastIndexOf(', population')),
                            $("#basicInfo").append(sliceDef);

                    }

                }

            })

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
        };

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        };

    });

});