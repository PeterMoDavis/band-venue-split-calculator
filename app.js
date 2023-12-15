const inputButton = document.querySelector('button');
const paragraph = document.createElement('p');

inputButton.addEventListener('click', (e) => {
  const totalRevenueValue = document.querySelector('#total-revenue');
  const venuePercentageValue = document.querySelector('#venue-percentage');
  const container = document.querySelector('.container');

  e.preventDefault();

  paragraph.innerHTML = calculateBandSplit(
    totalRevenueValue.value,
    venuePercentageValue.value
  );

  container.append(paragraph);
});

function calculateBandSplit(total, venuePercentage) {
  if (venuePercentage > 100 || venuePercentage < 0) {
    alert('Please enter a value that is less then 100 and greater than 0');
    return '';
  } else {
    const bandPercentage = (100 - venuePercentage) / 100;
    const newVenuePercentage = venuePercentage / 100;

    const bandRevenue = (total * bandPercentage).toFixed(2);
    const venueRevenue = (total * newVenuePercentage).toFixed(2);

    console.log(bandRevenue, venueRevenue);

    if (bandRevenue <= venueRevenue) {
      return `Band revenue: <span><b>$${bandRevenue}</b></span> Venue revenue: <span><b class="bad">${venueRevenue}</b></span>`;
    }

    return `Band revenue: <span><b>$${bandRevenue}</b></span> Venue revenue: <span><b>$${venueRevenue}</b></span>`;
  }
}
