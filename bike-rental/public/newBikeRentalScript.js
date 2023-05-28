fetch('/newBikeRental')
  .then(response => response.json())
  .then(data => {
    const bikeInfoSection = document.getElementById('bikeInfo');
    bikeInfoSection.innerHTML = ''; 

    data.forEach(bike => {
      const bikeItem = document.createElement('a');
      bikeItem.classList.add('bike-item'); 

      const bikeLink = document.createElement('a');
      bikeLink.href = `/bikeDetails.html?id=${bike.bikeId}`;

      const bikeId = document.createElement('p');
      bikeId.textContent = `Bike ID: ${bike.bikeId}`;
      bikeItem.appendChild(bikeId);

      const type = document.createElement('p');
      type.textContent = `Type: ${bike.typeDescription}`;
      bikeItem.appendChild(type);

      const status = document.createElement('p');
      status.textContent = `Bike Status: ${bike.statusDescription}`;
      bikeItem.appendChild(status);

      const dailyRate = document.createElement('p');
      dailyRate.textContent = `Daily Rate: ${bike.dailyRate}`;
      bikeItem.appendChild(dailyRate);

      bikeItem.addEventListener('click', () => {
        const bikeUrl = `/bikeDetails?bikeId=${bike.bikeId}`;
        window.location.href = bikeUrl;
      });
     

      bikeInfoSection.appendChild(bikeItem);
    });
  })
  .catch(error => console.error(error));