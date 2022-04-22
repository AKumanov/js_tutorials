function attachEventsListeners() {
    let inputDistance = document.querySelector('input[id="inputDistance"]');
    let convertFrom = document.querySelector('select[id="inputUnits"]');
    let convertTo = document.querySelector('select[id="outputUnits"]');
    let convertBtn = document.querySelector('input[id="convert"]');
    convertBtn.addEventListener('click', convertParams)

    function convertParams(event) {

        console.log(`Convert ${inputDistance.value} ${convertFrom.value} to ${convertTo.value}`);
        console.log(convertToMeters(inputDistance.value)[convertTo.value]);
    }

    function convertToMeters(value) {
        return {
            km: value / 1000,
            m: value,
            cm: value / 0.01,
            mm: value / 0.001,
            mi: value / 1609.34,
            yrd: value / 0.9144,
            ft: value / 0.3048,
            in: value / 0.0254,
        }
    }
}