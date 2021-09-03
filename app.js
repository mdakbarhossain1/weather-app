document.getElementById('search-btn').addEventListener('click', () => {
    const cityName = document.getElementById('input-city').value;
    // console.log(inputCity); 
    // const apiKey = `5f9ccd85caa1fa116a2c6c233dffd13c`

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5f9ccd85caa1fa116a2c6c233dffd13c`
    const loadData = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => displayTemp(data))
        }
        loadData();

        const displayTemp = temp =>{
            console.log(temp);
            const displayTemp = document.getElementById('temp');
            const cityName = document.getElementById('city-name');
            const weather = document.getElementById('weather');
            const icon = document.getElementById('icon');
            cityName.innerText = temp.name
            displayTemp.innerText = Math.round(temp.main.temp)-273;
            weather.innerText = temp.weather[0].main;

            // set weather icon
            const url = `https://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`

            icon.setAttribute('src',url);
        }
    })

