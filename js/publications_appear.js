
const numRows = 5; // Number of rows in the grid
const numCols = 5; // Number of columns in the grid
const cellWidth = 60; // Width of each grid cell
const cellHeight = 40; // Height of each grid cell

const occupiedRows = new Set(); // To keep track of occupied rows

// Function to generate a random position within the grid
function getRandomPosition(existingPositions) {
  let randomX, randomY;
  do {
    randomX = Math.floor(Math.random() * numCols);
    randomY = Math.floor(Math.random() * numRows);
  } while (isOccupied(randomX, randomY, existingPositions));

  existingPositions.push({ x: randomX, y: randomY });
  occupiedRows.add(randomY);

  //if mobile screen size then do not return random x and y
  if (window.innerWidth < 768) {
    return {
      left: 0,
      top: 0
    };
  }

  return {
    left: randomX * cellWidth + 'px',
    top: randomY * cellHeight + 'px'
  };
}

// Function to check if a grid cell is occupied by an existing position
function isOccupied(x, y, existingPositions) {
  for (const pos of existingPositions) {
    if (pos.x === x && pos.y === y) {
      return true;
    }
  }
  return false;
}

// Function to create and append a random text element to the container
function createRandomText(container, existingPositions) {
  const text = document.createElement('div');
  text.className = 'random-text';
  const position = getRandomPosition(existingPositions);
  text.style.left = position.left;
  text.style.top = position.top;
  text.textContent = '';
  container.appendChild(text);

  expandtext().then(result => {
  //random int 0-5
  var random = Math.floor(Math.random() * 5);

  text.textContent=result[random];
    }
  ); 

  // Trigger a reflow to apply the fade-in transition
  text.offsetWidth; // This line forces a reflow

  text.style.opacity = 1; // Fade in the text

  setTimeout(() => {
    text.style.opacity = 0; // Fade out the text
    setTimeout(() => {
      container.removeChild(text); // Remove the text element from the DOM
      occupiedRows.delete(position.top / cellHeight);
    }, 500); // Delay removal to allow for fade-out animation
  }, 5000);
}

const container = document.getElementById('textContainer');
const existingPositions = [];

// Add random text elements to the container
function addRandomText() {
  if (existingPositions.length < numRows * numCols) {
    createRandomText(container, existingPositions);
  }
  setTimeout(addRandomText, 5000); // Add a new text element every 2 seconds
}

setTimeout(() => {
  addRandomText(); // Start adding random text elements
}, 5000);
