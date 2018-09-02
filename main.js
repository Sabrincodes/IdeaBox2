
// functions==========================

function Idea(id,title,body,quality) {
    this.id = id;
    this.title = $('.title-input').val();
    this.body = $('.body-input').val();
    this.quality = “genius”;
}



var ideaTitle = $('.title-input');
var ideaBody = $('.body-input');
var searchBar = $('.search');
var ideaCardSection = $('.idea-card-section')

ideaTitleInput.on('keyup', createIdea)

