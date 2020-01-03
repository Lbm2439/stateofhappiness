$(document).ready(function () {
   // Find capiatl of state clicked and breweries in capital
    
//    let foundState = "Texas"
let foundState = localStorage.getItem("state");
console.log (foundState);

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

          var beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + foundState + "&by_city=" + capital + "&page=" + page + "&per_page=50&sort=name";
        // var beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + foundState + "&page=" + page + "&per_page=50&sort=name";

        function getBeer() {
            $.ajax({
                url: beerURL,
                method: "GET"
            })

                .then(function (response) {
                    if (response.length === 50) {
                        page++
                          beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + foundState + "&by_city=" + capital + "&page=" + page + "&per_page=50&sort=name";
                        // beerURL = "https://api.openbrewerydb.org/breweries?by_state=" + foundState + "&page=" + page + "&per_page=50&sort=name";

                        
                        $.ajax({
                            url: beerURL,
                            method: "GET"
                        })
                        getBeer()
                        count = (count + response.length);
                        // console.log(response);  
                        
                    }
                    else {

                        count = (count + response.length);
                        // console.log(response);
                        return
                    }
                    var breweries = response
                    // console.log(breweries)

                    var capital = {
                        places: []
                    };
                    
                    for (var i = 0; i < breweries.length; i++) {
                    // for(var i in breweries) {    
                    
                        var item = breweries[i];   
                    
                        capital.places.push({ 
                            "name" : item.name,
                            "street"  : item.street,
                            "city"       : item.city,
                            "state"  : item.state, 
                            "postal_code"  : item.postal_code,
                            "phone"  : item.phone,
                            "website_url" : item.phone

                            
                        });
                        console.log(capital.places)
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
});
