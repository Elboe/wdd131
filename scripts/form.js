const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  function populateProductOptions() {
      const productNameSelect = document.getElementById('productName');
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.id;
          option.text = product.name;
          productNameSelect.appendChild(option);
      });
  }
  
  let reviewsCompleted = localStorage.getItem('reviewsCompleted') || 0;
  
  document.getElementById('reviewForm').addEventListener('submit', function(event) {
      event.preventDefault();
      reviewsCompleted++;
      localStorage.setItem('reviewsCompleted', reviewsCompleted);
      alert(`Thank you for your review! Total reviews completed: ${reviewsCompleted}`);
      this.reset();
  });
  
  populateProductOptions();
  