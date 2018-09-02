var titleSearch = $('.title-input');
var bodySearch = $('.body-input');
var search = $('.search');
var cardCreateSection = $('.card-Creator');

// Event Listeners==============
titleSearch.on('keyup', createIdea);

// functions==========================

function Idea(id,title,body,quality) {
    this.id = id;
    this.title = $('.title-input').val();
    this.body = $('.body-input').val();
    this.quality = “genius”;
}


