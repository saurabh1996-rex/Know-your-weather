window.addEventListener("load", () => {
  let long;
  let lat;
  let temparatureDescription = document.querySelector(".temp-description");
  let locationTimezone = document.querySelector(".location-timezone");
  let temparatureDegree = document.querySelector(".temp-degree");
  let location = document.querySelector(".location");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.weatherapi.com/v1/current.json?key=dfd7e0dca5eb40d6a4531741210406&q=${lat},${long}&aqi=no
            `;

      fetch(api)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            console.log(data)
          const {
            temp_c,
            condition: { text, icon },
          } = data.current;
          const { name } = data.location;
          temparatureDegree.textContent = temp_c;
          locationTimezone.textContent = name;
          temparatureDescription.textContent = text;
          const x = document.createElement("IMG");
          x.setAttribute("src", `${icon}`);
          document.getElementById("location").appendChild(x);
        });
    });
  }
});

