$(document).ready(function () {
    $('#get-weather-btn').on('click', async function (event) {
        event.preventDefault();
        const city = $('#city').val();
        const lon = $('#lon').val();
        const lat = $('#lat').val();
        let tableToDisplay = '<table>';
        if (city !== '' || (lat !== '' && lon !== '')) {
            const response = await fetch(`/weather?q=${city}&lon=${lon}&lat=${lat}`, {
                method: 'GET',
            });
            const data = await response.json();
            Object.keys(data).forEach((weatherKey) => {
                tableToDisplay += `<tr><td>${weatherKey}:</td><td>${data[weatherKey]}</td><tr>`;
            });
            tableToDisplay += '</table>';
            $('#weather-info').html(tableToDisplay);
        } else {
            alert('Please enter either City or Longitude & Latitude.');
        }
    });
});
