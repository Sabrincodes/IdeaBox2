
$(document).ready(fetch)

var ideaTitle = $('.title-input');
var ideaBody = $('.body-input');
var searchBar = $('.search');
var ideaCardSection = $('.idea-card-section');
var saveBtn = $('.save-button');
var deleteBtn = $('.imageX');
var upVote = $('.upvote');
var downVote = $('.downvote');
var userQuality = $('.user-quality');

// Event listeners=============
saveBtn.on('click', saveOurIdea);
ideaTitle.on('keyup', enableSave);
ideaBody.on('keyup', enableSave);
ideaCardSection.on('click', rate);
// functions======CONSTRUCTOR

function Idea(id,title,body,quality) {
    this.id = Date.now();
    this.title = $('.title-input').val();
    this.body = $('.body-input').val();
    this.quality = 'swill';
}
function saveOurIdea(e) {
    console.log('hi')
    e.preventDefault();
    var anIdea = new Idea();
    addNewIdeaCard(anIdea)
}
function enableSave() {
    var isDisabled = $('.title-input').val() === '' || $('.body-input').val() === '';
    saveBtn.prop('disabled', isDisabled);
    $('.title-input').val() === '';
     

}

// CLEAR INPUTS
function clearInputs() {
    ideaTitle.val() === '';
    ideaBody.val() === '' ;
}

function addNewIdeaCard(idea) {
   ideaCardSection.prepend(`<article class="idea-card-section" id=
    ${idea.id}>
     <section class="example">
       <h1 class="idea-title">${idea.title}</h1>
       <img src="icon-assets/delete.svg" width="40" height="40" class="imageX">
     </section>
         <p>${idea.body}
         </p>
     <div class="votes">
       <img class="downvote quality-button" src="icon-assets/downvote.svg" width="40" height="40">
       <img class="upvote quality-button" src="icon-assets/upvote.svg" width="40" height="40">
     <div class="rating">
       <h1 class="user-quality">userquality: <span class="quality">${idea.quality}</span</h1>
    </div>
   </article>`)
 clearInputs()
 storeIdea(idea) 

}

function storeIdea(idea) {
  var storeInfo = JSON.stringify(idea)
  localStorage.setItem(idea.id, storeInfo);
}
// DELETE CARD======
function deleteCard(event) {
  if ($(event.target).hasClass('imageX')) { 
 var selectId = ($(event.target).closest('article')[0].id)
 console.log(selectId)

 removeFromStorage(selectId)
    $(event.target).closest('article').remove();
  }
}

function removeFromStorage(selectId){
    var parsedFromStorage = localStorage.removeItem([selectId]);
parsedFromStorage;
}

function fetch() {
    var whatsInLocal = Object.keys(localStorage);
    for(var i = 0; i < whatsInLocal.length; i++) {
    console.log(JSON.parse(localStorage.getItem(whatsInLocal[i])))
    addNewIdeaCard(JSON.parse(localStorage.getItem(whatsInLocal[i])))  
    }
}

// ==QUALITY
var counter = 0;
function rate(event) {
    console.log('hi')
    if ($(event.target).hasClass('imageX')) {
      deleteCard(event) 
    } else if ($(event.target).hasClass('quality-button')) {
        castVote(event.target)

    }
}

function castVote(ratings) {
    console.log(ratings)
  var qualityRating = $(event.target).closest('article').find('.user-quality')[0].id;
  
  if ($(ratings).hasClass('upvote')  && counter === 0) {
    counter++;
    console.log('tu')
    $('.quality').text('plausible');
    return 'plausible';
  } else if ($(ratings).hasClass('upvote') && counter === 1 ) {
    $('.quality').text('genius');
    return 'genius';
  } else if ($(ratings).hasClass('downvote') && counter === 1 )  {
    counter --;
    $('.quality').text('plausible');
    return 'plausible';
  } else if ($(ratings).hasClass('downvote')  && counter === 0 ) {
    $('.quality').text('swill');
    return 'swill';
  } 
}

function deleteCard(event) {
  if ($(event.target).hasClass('imageX')) { 
 var selectId = ($(event.target).closest('article')[0].id)
 console.log(selectId)

 removeFromStorage(selectId)
    $(event.target).closest('article').remove();
  }
}


















