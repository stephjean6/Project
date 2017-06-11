$('[name=GigHarbor]').on('click', setLocation);

//To change the image SRC:
function setLocation() {
  var value =$(this).val();
  switch (value) {
  case 'Java':
      $('#myMap').attr('scr','https://www.openstreetmap.org/?mlat=47.33021&mlon=-122.58196#map=19/47.33021/-122.58196');
    break;
  case 'Jax':
    $('#myMap').attr('scr','https://www.openstreetmap.org/?mlat=47.32961&mlon=-122.58061#map=19/47.32961/-122.58061');
    break;
  case 'Tides':
    $('#myMap').attr('scr','https://www.openstreetmap.org/?mlat=47.32933&mlon=-122.57843#map=19/47.32933/-122.57842');
    break;
  case 'Harbor':
    $('#myMap').attr('scr','https://www.openstreetmap.org/?mlat=47.32918&mlon=-122.58173#map=19/47.32918/-122.58173');
    break;
  default:
    console.log('Sorry, Gig Harbor is closed.');
}
   
console.log("Is there anything else you'd like?");

}
//$(document).ready(function(){

//event.preventDefault();

//to read input of radio button
//$('input').on('click', myFunction());
  
//Tried to use attr   
/*  $("myImage").on({
    'click': function()
  $("#myImage")
 .attr('src','http://staticmap.openstreetmap.de/staticmap.php?size=1000x800&center=47.32959,-122.58059&zoom=19&markers=47.32959,-122.58059,ol-marker-gold&maptype=mapnik');
}
    event.preventDefault();
});*/

//Jax Salon:  http://www.openstreetmap.org/#map=19/47.32953/-122.58048
//Tides Tavern: http://www.openstreetmap.org/#map=19/47.32921/-122.57825
//The Harbor General Store: http://www.openstreetmap.org/#map=19/47.32904/-122.58154
//Java & Clay Cafe: http://www.openstreetmap.org/#map=19/47.33013/-122.58180