let btn= document.getElementById("btn");

btn.addEventListener("click", function() {
 let tracker= document.getElementById("tracker");
 let city= document.getElementById("city");

 if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(dashPosition, dashError);
  } else {
  tracker.innerHTML= "Can't access your location";
 }

 function dashPosition(position) {
   const latitude= position.coords.latitude;
   const longitude= position.coords.longitude;
 
   tracker.innerHTML= "Latitude:" + latitude + "<br> longitude:" + longitude;
   cityShowing(latitude, longitude);
  }
  

 function dashError(error) {
  switch(error.code) {
   case error.PERMISSION_DENIED:
    tracker.innerHTML= "User ne location k lie mna krdia";
    break;

    case error.POSITION_UNAVAILABLE:
      tracker.innerHTML= "location information is unavailable";
      break;

   case error.TIMEOUT:
    tracker.innerHTML= "User's location took too long and timed out.";
    break;

    case error.UNKNOWN_ERROR:
      tracker.innerHTML= "Unknown error occurred";
     break;
  }

 } 
  
async function cityShowing(latitude, longitude) {

  let response= await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);

  let pkaData= await response.json();
  console.log(pkaData);

  city.innerHTML= pkaData.display_name;

}

});















