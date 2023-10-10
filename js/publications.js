function expandtext() {
    var categories = ["Books", "Journals", "Editorial Activities", "Chapters in Books of International Circulation", "Refereed Conferences"];
    var randomData = [];
  
    return fetch("../json/publications.json")
      .then(response => response.json())
      .then(data => {
        return Promise.all(categories.map(category => {
          var length = data[category].length;
          var random = Math.floor(Math.random() * length);
          sample = data[category][random]['Publication'];
          randomData.push(sample);
        }));
      })
      .then(() => {
        return randomData; 
      })
      .catch(error => {
        console.error("Error fetching or processing data:", error);
        throw error; 
      });
  }
  



