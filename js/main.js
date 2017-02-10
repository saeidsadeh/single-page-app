$(function(){

    getAllCategories();

});

// call all categories API
function getAllCategories() {
    $.ajax({

        url: 'http://www.bestbuy.ca/api/v2/json/category/departments',
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result) {

            generateCategoriesTemp(result.subCategories);

        },
        error: function() { $('.error').addClass('visible'); },
    });
}


// generate Category template
function generateCategoriesTemp(categories) {
    var source = $("#categoryTemplate").html();
    var template = Handlebars.compile(source);
    var html = template(categories);
    $('#categoryResult').html(html);

}

