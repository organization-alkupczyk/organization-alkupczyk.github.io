function changeBackground(imageURL)
{
  document.body.style.backgroundImage = "url('" + imageURL + "')";
}

let dataURL = 'https://api.nasa.gov/planetary/apod?api_key=mjTPqYr4VxY1RzkKx4H1EdW4i1TYKbBhXbVOV6zM';

function getPicture(){
  fetch(dataURL)
      .then((resp) => {
          return resp.json();
      })
      .then((data) => {
          changeBackground(data.hdurl);
      });
}

//getPicture();

let urlMars = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=mjTPqYr4VxY1RzkKx4H1EdW4i1TYKbBhXbVOV6zM';


function getMarsPicture() {
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let pictureList = data.photos;
            createGallery(pictureList);
        });
}

getMarsPicture();

let gallery = document.getElementById('content');


function createGallery(dataList){

  for(let i=0; i<9; i++)
  {
    let img = document.createElement('img');
    let imgPath = dataList[i].img_src;
    img.src = imgPath;
    gallery.appendChild(img);
    //console.log(dataList);
    //<img src="adres_obrazka" class="klasa/klasy" alt="co_sie_wyswietli_jesli pod danym adresem nie ma obrazka">
  }

}


createGallery();
