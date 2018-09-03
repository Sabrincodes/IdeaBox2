
var ideaTitle = $('.title-input');
var ideaBody = $('.body-input');
var searchBar = $('.search');
var ideaCardSection = $('.idea-card-section');
var saveBtn = $('.save-button');


// Event listeners=============
// ideaTitleInput.on('keyup', createIdea);
saveBtn.on('click', saveOurIdea);
ideaTitle.on('keyup', enableSave);
ideaBody.on('keyup', enableSave);


// functions==========================

function Idea(id,title,body,quality) {
    this.id = Date.now();
    this.title = $('.title-input').val();
    this.body = $('.body-input').val();
    this.quality = 'swill';
}



function saveOurIdea(e) {
    e.preventDefault();
    var anIdea = new Idea();

}

function enableSave() {
    var isDisabled = $('.title-input').val() === '' || $('.body-input').val() === '';

       saveBtn.prop('disabled', isDisabled);
       $('.title-input').val() === ''
     

}

function clearInputs() {
    ideaTitle.val() === '';
    ideaBody.val() === '' ;
}

function addNewIdeaCard(Idea) {

   ideaCardSection.prepend(`<article class="idea-card-section" dataSet-id- 
    ${newIdea.id}>
<section class="example">
     <h1 class="idea-title">${newIdea.title}</h1>
     <img src="icon-assets/delete.svg" width="40" height="40" class="imageX">
    </section>
    <p>${newIdea.body}
    </p>
    <div class="votes">
     <img src="icon-assets/downvote.svg" width="40" height="40">
     <img src="icon-assets/upvote.svg" width="40" height="40">
    </div>
    <div class="rating">
     <h1 class="quality">quality:</h1>
   </div>
   </article>`)
   clearInputs() 
}

// local storage methods localStorage.get() localStoragee.set() localStorage.remove(


function saveIdea() {
  var storeInfo = JSON.stringify(idea)
  localStorage.setItem(idea.id, stringToStore)
}






