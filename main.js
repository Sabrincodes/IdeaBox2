
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
    this.id = id;
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
        
}


//         function enableSubmit() {
//   var isDisabled = $('.grocery-list-form--quantity').val() === '' || $('.grocery-list-form--item').val() === '';
//   $('.grocery-list-form--submit').prop('disabled', isDisabled);
// }








