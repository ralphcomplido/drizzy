// I need Zip Code Input Submit ID
//#submit and #zip

 $("#submit").on("click", function(event) {
        event.preventDefault();
        var zip = $("#zip").val().trim();
        console.log(zip)
        
        var APIKey = "ab54a62fdc9bfbe9d64faaccba9d0aff";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "zip=" + zip + ",us&units=imperial&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .done(function(response) {

       console.log(queryURL);

       console.log(response);

        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);

        
      });
       });