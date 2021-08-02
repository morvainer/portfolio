'use strict';

console.log('Starting up');
function initPage() {
    renderPortfolios();
}

function renderPortfolios() {
    console.log('rendering');
    var strHtmls = gProjs.map(function (project) {

        return `  <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${project.id}')">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img style="width: 30rem; height: 15rem" class="img-fluid"  src=${project.url} alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
          <h6> <span class="badge badge-secondary">${project.labels[0]} </span></h6>
        </div>
        </div>`
    });
    console.log(strHtmls);
    $('.projects-gallery').html(strHtmls);

}

function renderModal(projId){
    console.log('rendering modal');
    var proj = getProjbyId(projId);
    console.log('the proj is (renderModal): ', proj);
    var strHtml = `<div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src=${proj.url} alt="">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`

  $('.modal').html(strHtml);
}

function onModal(projId) {// open the modal and input the data
    var proj = getProjbyId(projId);
    var elModal = document.querySelector('.modal');
    // elModal.innerHtml = book.bookName;
    elModal.querySelector('h2').innerText = proj.name;
    var elImg = elModal.querySelector('img');
    elImg.src = proj.url;
    elModal.hidden = false;
   
   
}

function onSubmit(){
    var url=`https://mail.google.com/mail/?view=cm&fs=1&to=moryvan1@gmail.com&su=SUBJECT&body=BODY`;
    window.location.replace(url);

}