
var products = [];


// laad eenmalig de data in de pagina, dit gebeurde voorheen bij elke functie call
function loadProduct() {
    $.getJSON( "jsondata1.json", function(product) {
        products = product;
});
};


//document ready voert JS pas uit als alles gelezen is.
$(document).ready(function(){


$("#btnEten").click(function(){
    getProduct('product', 'eten');
});

$("#btnDrinken").click(function(){
    getProduct('product', 'drinken');
});

$("#btnAnti").click(function(){
    getProduct('subsoort', 'anti');
});

$("#btnSoep").click(function(){
    getProduct('subsoort', 'soep');
});

$("#btnSala").click(function(){
    getProduct('subsoort', 'salade');
});

$("#btnPasta").click(function(){
    getProduct('subsoort', 'pasta');
});

$("#btnPizza").click(function(){
    getProduct('subsoort', 'pizza');
});

$("#btnVlees").click(function(){
    getProduct('subsoort', 'vlees');
});

$("#btnVis").click(function(){
    getProduct('subsoort', 'vis');
});

$("#btnKinder").click(function(){
    getProduct('subsoort', 'kinder');
});

$("#btnGelati").click(function(){
    getProduct('subsoort', 'gelati');
});

/////////////// drinken ///////////////////

$("#btnBier").click(function(){
    getProduct('soort', 'bier');
});

$("#btnWijn").click(function(){
    getProduct('soort', 'wijn');
});

$("#btnKoffie").click(function(){
    getProduct('soort', 'koffie');
});

$("#btnFris").click(function(){
    getProduct('soort', 'fris');
});

$("#btnLikeur").click(function(){
    getProduct('soort', 'likeur');
});





//knop die itens toevoegd aan lijst
// lijst maakt rekening 
// rekening naar firebase
$("#btnTest").click(function(){
    alert('dsf');
});








//li element moet klikbaar zijn/button
//bij click wordt val.prijs en val.naam naar array gepusht
//array wordt in lijst gezet
//de 2e value van object (val.prijs) moet worden opgeteld bij btnBereken







// aan de getProduct functie wordt een identifier en een filter meegegeven
//de identifier is het 'kopje', de filter is de value
// ipv bij elke buttonclick de lijst te legen leeg ik hem al in de functie
function getProduct(identifier, filter) {
    var productsFiltered = [];
    $(".productlist").empty();

//uit 'products' worden de key en de value gehaald (key = 1 record en value de waarden die erin zitten)
//als de array met de meegegeven 'soort' gelijk is aan de filter 'soortnaam' wordt de decorateProduct functie uitgevoerd
    $.each(products, function(key, val) {
        if(val[identifier] === filter) {
            decorateProduct(productsFiltered, val);
        }
    });

    $( "<ul/>", {
        "class": "productlist",
        html: productsFiltered.join("")
    }).appendTo( "#lijst" );
}

// in deze functie wordt de gefilterde data in <li> elementen neergezet.
function decorateProduct(productsFiltered, val) {

    var prijs = val.prijs;
    var naam = val.naam;

    productsFiltered.push( '<li><div>' + '<p class="priceTag">' + naam  + '</p>'+ '<div class="text-right">' +
    '<button onclick="voegToe(' + prijs + ')" id="btnAdd" class="btn btn-primary">' + prijs + '</button></div>' + '</div></li>');

}




}); // document.ready



