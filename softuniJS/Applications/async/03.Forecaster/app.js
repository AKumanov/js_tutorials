function attachEvents() {
    const getWeatherBtn = document.querySelector('#submit');
    const locationInput = document.querySelector('input[id="location"]');
    const allLocationsURL = `http://localhost:3030/jsonstore/forecaster/locations`;
    const getLocationWeatherURL = `http://localhost:3030/jsonstore/forecaster/today/`;
    const getLocationWeatherFutureURL = `http://localhost:3030/jsonstore/forecaster/upcoming/`
    const forecastElement = document.querySelector('#forecast');
    const upcomingConditionElement = document.querySelector('#upcoming');
    const divCurrent = document.querySelector('#current');
    const divLabel = document.querySelector('.label');
    const forecastsDiv = document.createElement('div');
    const forecastInfo = document.createElement('div');


    forecastsDiv.classList.add('forecasts');


    const getSymbol = function (condition) {
        let symbol = '';
        switch (condition) {
            case 'Sunny':
                symbol = '&#x2600;'
                break;
            case 'Partly sunny':
                symbol = '&#x26C5;'
                break;
            case 'Overcast':
                symbol = '&#x2601;'
                break;
            case 'Rain':
                symbol = '&#x2614;'
                break;
            case 'Degrees':
                symbol = '&#176;'
                break;

            default:
                break;
        }
        return symbol;
    }

    const currentForecast = function (dataTwo) {

        const symbol = getSymbol(dataTwo.forecast.condition);



        const spanConditionSymbol = document.createElement('span');
        spanConditionSymbol.classList.add('condition');
        spanConditionSymbol.classList.add('symbol');

        spanConditionSymbol.innerHTML = symbol;

        forecastsDiv.appendChild(spanConditionSymbol);

        const spanCondition = document.createElement('span');
        spanCondition.classList.add('condition');


        // create 3 spans and add them to spanCondition element
        const locationSpan = document.createElement('span');
        locationSpan.classList.add('forecast-data');
        locationSpan.textContent = dataTwo.name;

        const degreeSpan = document.createElement('span');
        degreeSpan.classList.add('forecast-data');
        degreeSpan.textContent = `${dataTwo.forecast.low}/${dataTwo.forecast.high}`;

        const forecastSpan = document.createElement('span');
        forecastSpan.classList.add('forecast-data');
        forecastSpan.textContent = dataTwo.forecast.condition;

        spanCondition.appendChild(locationSpan);
        spanCondition.appendChild(degreeSpan);
        spanCondition.appendChild(forecastSpan);

        forecastsDiv.appendChild(spanCondition);

        divCurrent.appendChild(forecastsDiv);

        forecastElement.style.display = 'block';

        locationInput.value = '';

    }

    const futureDataHandler = function (futureData) {
        forecastInfo.innerHTML = '';
        forecastInfo.classList.add('forecast-info');
        for (let current of futureData.forecast) {
            console.log(current);

            const upcomingSpan = document.createElement('span');
            upcomingSpan.classList.add('upcoming');
            const futureSymbol = document.createElement('span');
            futureSymbol.classList.add('symbol');
            futureSymbol.innerHTML = getSymbol(current.condition);

            const futureDegreeSpan = document.createElement('span');
            futureDegreeSpan.classList.add('forecast-data');
            futureDegreeSpan.textContent = `${current.low}/${current.high}`;

            const futureConditionSpan = document.createElement('span');
            futureConditionSpan.classList.add('forecast-data');
            futureConditionSpan.textContent = current.condition;

            upcomingSpan.appendChild(futureSymbol);
            upcomingSpan.appendChild(futureDegreeSpan);
            upcomingSpan.appendChild(futureConditionSpan);
            forecastInfo.appendChild(upcomingSpan);
        }

        upcomingConditionElement.appendChild(forecastInfo);
    }

    const getLocation = async function () {
        forecastsDiv.innerHTML = '';

        const response = await fetch(allLocationsURL);
        try {
            if (!response.status === 200) throw new Error('Error')

            const data = await response.json();
            for (let loc of data) {
                if (loc.name === locationInput.value) {
                    const newResponse = await fetch(`${getLocationWeatherURL}${loc.code}`);
                    try {
                        if (!newResponse.status === 200) throw new Error('error');

                        const current = await newResponse.json();
                        currentForecast(current);

                        const futureResponse = await fetch(`${getLocationWeatherFutureURL}${loc.code}`)

                        try {
                            const futureData = await futureResponse.json();
                            futureDataHandler(futureData);

                        } catch (error) {
                            forecastElement.innerHTML = '';
                            forecastElement.textContent = 'Error';
                            console.log('Error 1');
                        }


                    } catch (error) {
                        forecastElement.innerHTML = '';
                        forecastElement.textContent = 'Error';
                        console.log('Error 2');

                    }
                }
            }

        } catch (error) {
            forecastElement.innerHTML = '';
            forecastElement.textContent = 'Error';
            console.log('Error 3');

        }
    }


    getWeatherBtn.addEventListener('click', getLocation);

}

attachEvents();
