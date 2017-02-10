$(function(){

    getAllCategories();
    getAllProducts();
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

// call all Products API
function getAllProducts() {
    $.ajax({

        url: 'http://www.bestbuy.ca/api/v2/json/search?categoryid=departments',
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result) {

            generateCategoryProductsTemp(result.products);
        },
        error: function() { $('.error').addClass('visible'); },
    });

}

// call CategoryProducts API
function getCategoryProducts(id){

    $.ajax({

        url: 'http://www.bestbuy.ca/api/v2/json/search?categoryid='+id,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function(result) {

            generateCategoryProductsTemp(result.products);
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

// generate Product template
function generateCategoryProductsTemp(products) {
    var source = $("#productTemplate").html();
    var template = Handlebars.compile(source);
    var html = template(products);
    $('#productResults').html(html);

}