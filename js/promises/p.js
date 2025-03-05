// function apiCallWithoutPromises(api, cb) {
//   //   const res = f;
//   cb(fetch(api), (res) => {
//     console.log(res);
//   });
// }

// const api = "https://api.freeapi.app/api/v1/public/randomproducts";

// apiCallWithoutPromises(api, (res, cb) => {
//     cb(res);
// });




function apiCall(apiUrl, callback) {
    // Create XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // Open GET request to the API endpoint
    xhr.open("GET", apiUrl, true);
    
    // Setup event listener for state changes
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) { // 4 means request is done
        if (xhr.status === 200) { // 200 means successful
          callback(null, xhr.responseText); // Call callback with response
        } else {
          callback(new Error("API call failed with status " + xhr.status));
        }
      }
    };
    
    // Send the request
    xhr.send();
  }
  
  // Example usage:
  var api = "https://api.freeapi.app/api/v1/public/randomproducts";
  apiCall(api, function(err, response) {
    if (err) {
      console.error("Error:", err);
    } else {
      console.log("Response:", response);
    }
  });
  