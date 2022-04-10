fetch('https://ghibliapi.herokuapp.com/films').then((data) => {
    //console.log(data);
    return data.json();
}).then((completeData) => {
    //console.log(completeData[2].title);
    let data1 = "";
    completeData.map((values) => {
        data1 += `<div class="card">
        <img src="${values.image}" alt="image" class="images">
        <h1 class="title">${values.title}</h1>
        <h1 class="director">Directed by ${values.director}</h1>
        <p class="description">Description: ${values.description}</p>
    </div>`
    });
    document.getElementById("cards").innerHTML = data1;

}).catch((err) => {
    console.log(err);
})
