function solve() {

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let stopId = 'depot';
    let currentStop = '';
    const url = `http://localhost:3030/jsonstore/bus/schedule`
    const infoDiv = document.querySelector('#info span');


    async function depart() {
        console.log('Depart TODO...');
        // switch buttons
        arriveBtn.disabled = false;
        departBtn.disabled = true;

        try {
            const result = await fetch(`${url}/${stopId}`);
            if (!result.status === 200) throw new Error('error')

            const data = await result.json();

            console.log(data);
            infoDiv.textContent = `Next stop ${data.name}`;
            stopId = data.next;
            currentStop = data.name;

        } catch (error) {
            infoDiv.textContent = `Error`;
            arriveBtn.disabled = true;
            departBtn.disabled = true;
        }

    }

    async function arrive() {
        console.log('Arrive TODO...');
        arriveBtn.disabled = true;
        departBtn.disabled = false;

        const response = await fetch(`${url}/${stopId}`);
        try {
            infoDiv.textContent = `Arriving at ${currentStop}`;
            if (!response.status === 200) throw new Error();

            const data = await response.json();


        } catch (error) {
            infoDiv.textContent = `Error`;
            arriveBtn.disabled = true;
            departBtn.disabled = true;

        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();