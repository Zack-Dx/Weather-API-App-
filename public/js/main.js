const submitbtn = document.querySelector("#submitbtn");
const cityName = document.querySelector("#cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temprealval = document.getElementById("temp_real_val");
const datahide = document.querySelector(".middle_layer");
const getInfo = async (event) => {
  event.preventDefault();
  let cityval = cityName.value;
  if (cityval === "") {
    city_name.innerHTML = `Write the city name before searching it!`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&&appid=2c8be392c0eab05e7968f480ff922402`;
      const response = await fetch(url);
      const data = await response.json();
      const arrdata = [data];
      city_name.innerHTML = `${arrdata[0].name},${arrdata[0].sys.country}`;
      temprealval.innerText = arrdata[0].main.temp;
      const tempMood = arrdata[0].weather[0].main;
      if (tempMood == "Clear") {
        temp_status.innerHTML = '<i class="fa-regular fa-sun"></i>';
      } else if (tempMood == "Cloudy") {
        temp_status.innerHTML =
          '<i class="fa-solid fa-cloud" style"color:red" ></i>';
      } else if (tempMood == "Rain") {
        temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain'></i>";
      } else {
        temp_status.innerHTML = '<i class="fa-regular fa-sun"></i>';
      }
      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerHTML = "Please enter the city name properly.";
      datahide.classList.add("data_hide");
    }
  }
};
submitbtn.addEventListener("click", getInfo);
