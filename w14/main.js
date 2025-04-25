function renderPhotos(photos) {
  photos.forEach((img) => {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", `https://picsum.photos/id/${img.id}/150/150`); 
    document.getElementById("output").appendChild(imgEl);
  });
}

function onFailure() { 
  const errorEl = document.createElement("p");
  errorEl.textContent = "Failed to load photos. Please try again later.";
  document.getElementById("output").appendChild(errorEl);
}

async function start() { 
  try {
    const data = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`); 
    const result = await data.json();
    renderPhotos(result);
  } catch (error) {
    onFailure(error);
  }
}


start();

