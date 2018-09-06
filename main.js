
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
// ideaTitleInput.on('keyup', createIdea);
saveBtn.on('click', saveOurIdea);
ideaTitle.on('keyup', enableSave);
ideaBody.on('keyup', enableSave);
ideaCardSection.on('click', deleteCard);
upVote.on('click', castVote);
downVote.on('click', castVote);

// functions======CONSTRUCTOR

function Idea(id,title,body,quality) {
    this.id = Date.now();
    this.title = $('.title-input').val();
    this.body = $('.body-input').val();
    this.quality = 'swill';
}



function saveOurIdea(e) {
    e.preventDefault();
    var anIdea = new Idea();
    addNewIdeaCard(anIdea)


}

function enableSave() {
    var isDisabled = $('.title-input').val() === '' || $('.body-input').val() === '';

       saveBtn.prop('disabled', isDisabled);
       $('.title-input').val() === ''
     

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
     <img class="downvote" src="icon-assets/downvote.svg" width="40" height="40">
     <img class="upvote" src="icon-assets/upvote.svg" width="40" height="40">
     </div>
     <div class="rating">
     <h1 class="user-quality">userquality: <span class="user-quality">${idea.quality}</span</h1>
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

function castVote(ratings) {
  var qualityRating = $(event.target).closest('article').find('.user-quality')[0].id;
  if (ratings === 'up' && $(quality).text() === 'swill') {
    $(quality).text('plausible');
    return 'plausible';
  } else if (ratings === 'up' && $(quality).text() === 'plausible') {
    $(quality).text('genius');
    return 'genius';
  } else if (ratings === 'down' && $(quality).text() === 'genius') {
    $(quality).text('plausible');
    return 'plausible';
  } else if (ratings === 'down' && $(quality).text() === 'plausible') {
    $(quality).text('swill');
    return 'swill';
  } 
}

// EDIT EXISTING IDEA========================
// function editExisting() {
//     if(this.$('.title-input').val === || this.$('.body-input').val


// // }












