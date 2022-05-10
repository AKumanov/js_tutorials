async function getInfo() {

    const stopID = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopID} `;
    const bustStopNameElement = document.querySelector('#stopName');
    const busesDiv = document.querySelector('#buses');

    try {
        busesDiv.innerHTML = '';
        const response = await fetch(url);

        if (!response.status === 200) {
            throw new Error('Error');
        }
        const data = await response.json();
        bustStopNameElement.textContent = data.name;
        Object.entries(data.buses).forEach(b => {
            const newElement = document.createElement('li');
            newElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`
            busesDiv.appendChild(newElement)
        })
        
    } catch (error) {
        bustStopNameElement.textContent = 'Error';
    }
}