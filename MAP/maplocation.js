$('[name=GigHarbor]').on('click', setLocation);

//To change the image SRC:
function setLocation() {
  var value =$(this).val();
  switch (value) {
  case 'Java':
      $('#myMap').attr('src','http://staticmap.openstreetmap.de/staticmap.php?size=1000x800&center=47.324419,-122.5808914&zoom=18&markers=47.324419,-122.5808914,ol-marker-blue&maptype=mapnik');
    break;
  case 'Jax':
    $('#myMap').attr('src','http://staticmap.openstreetmap.de/staticmap.php?size=1000x800&center=47.32961,-122.58061&zoom=18&markers=47.32961,-122.58061,ol-marker-blue&maptype=mapnik');
    break;
  case 'Tides':
    $('#myMap').attr('src','http://staticmap.openstreetmap.de/staticmap.php?size=1000x800&center=47.32933,-122.57842&zoom=18&markers=47.32933,-122.57842,ol-marker-blue&maptype=mapnik');
    break;
  case 'Harbor':
    $('#myMap').attr('src','http://staticmap.openstreetmap.de/staticmap.php?size=1000x800&center=47.2599,-122.4738&zoom=18&markers=47.2599,-122.4738,ol-marker-blue&maptype=mapnik');
    break;
  default:
    console.log('Sorry, Gig Harbor is closed.');
}
   event.preventDefault();
//console.log("Is there anything else you'd like?");

}
