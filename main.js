
var ideaTitle = $('.title-input');
var ideaBody = $('.body-input');
var searchBar = $('.search');
var ideaCardSection = $('.idea-card-section');


// Event listeners=============
ideaTitleInput.on('keyup', createIdea);
saveBtn.on('click', saveOurIdea);


// functions==========================

function Idea(id,title,body,quality) {
    this.id = id;
    this.title = $('.title-input').val();
    this.body = $('.body-input').val();
    this.quality = “swill”;
}

function saveOurIdea(e) {
    e.preventDefault();
    var anIdea = new Idea();

}





