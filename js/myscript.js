const jsonMovie = movie;
for(let i = 0; i < jsonMovie.length; i++ ) {
  const htmlElement = `
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 mb-5 change-bg-dark">
          <div class="row movie-container">
                <img id="img_${jsonMovie[i].id}" alt="Responsive image" class="col-lg-5 d-flex align-self-stretch py-3 rounded" src="${jsonMovie[i].image}">
                    <div class="col-lg-7 py-3">
                      <p class="title-style text-light">${jsonMovie[i].name}</p>
                      <p class="text-light">Year:${jsonMovie[i].year}</p>
                      <p class="text-light">${jsonMovie[i].description}</p>
                      <br>
                      <br>
                      <br>
                      <button type="button" id="btn_${jsonMovie[i].id}" class="btn bg-transparent text-dark"> 
                        <p class="text-success">Like<span>&#128077;</span></p> 
                      </button>
                      <span id="total_clicks_${jsonMovie[i].id}" class="btn bg-success text-white rounded-circle">0</span>
                    </div>
                    
          </div>
    </div>

  `;
  const total = $(htmlElement);
  $('#movies_container').append(total);

  let counter = 0;
  $(`#btn_${jsonMovie[i].id}`).on('click', function() {
    counter = counter + 1;
    $(`#total_clicks_${jsonMovie[i].id}`).text(counter);
  });

}