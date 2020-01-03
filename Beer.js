$(document).ready(function () {
    // Find capiatl of state clicked and breweries in capital

    //    let foundState = "Texas"
    let foundState = localStorage.getItem("state");
    console.log(foundState);

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

            console.log(capital);
            $("#cityState").append("Breweries in " + capital + ", " + foundState);

            var beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + foundState + "&by_city=" + capital + "&page=" + page + "&per_page=50&sort=name";

            function getBeer() {
                $.ajax({
                    url: beerURL,
                    method: "GET"
                })

                    .then(function (response) {
                        if (response.length === 50) {
                            page++
                            beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + foundState + "&by_city=" + capital + "&page=" + page + "&per_page=50&sort=name";

                            $.ajax({
                                url: beerURL,
                                method: "GET"
                            })
                            getBeer()
                            count = (count + response.length);

                        }
                        else {
                            console.log(beerURL);
                            count = (count + response.length);
                        }

                        var breweries = response

                        breweries.forEach(breweries => {
                            const card = `<div class="card" style="width: 38rem;">
                        
                        <div class="card-body">
                          <h2 class="card-title">${breweries.name}</h2>
                          <li class="list-group-item"> Brewery Type: ${breweries.brewery_type}</li>
                        </div>
                        <ul class="list-group list-group">
                          <li class="list-group-item">${breweries.street + " " + "<br></br>" + breweries.city + ", " + breweries.state + " " + breweries.postal_code}</li>
                          <li class="list-group-item">Phone: ${breweries.phone}</li>
                        </ul>
                        <div class="card-body">
                          <a href= "#" class="card-link">${breweries.website_url}</a>
                          </div>
                      </div>`
                            const ele = document.createElement('div');
                            ele.innerHTML = card;
                            document.body.appendChild(ele.firstChild);

                            $(".card-link").on("click", function () {
                                window.open(breweries.website_url, '_blank');
                            });
                        })

                    });
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
});
