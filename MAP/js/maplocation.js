$('[name=GigHarbor]').on('click', setLocation);

//To change the image SRC:
function setLocation() {
  var value =$(this).val();
  switch (value) {
  case 'Java':
      $('#myMap').attr('src','https://www.openstreetmap.org/?mlat=47.33021&mlon=-122.58196#map=19/47.33021/-122.58196');
    break;
  case 'Jax':
    $('#myMap').attr('src','https://www.openstreetmap.org/?mlat=47.32961&mlon=-122.58061#map=19/47.32961/-122.58061');
    break;
  case 'Tides':
    $('#myMap').attr('src','https://www.openstreetmap.org/?mlat=47.32933&mlon=-122.57843#map=19/47.32933/-122.57842');
    break;
  case 'Harbor':
    $('#myMap').attr('src','https://www.openstreetmap.org/?mlat=47.32918&mlon=-122.58173#map=19/47.32918/-122.58173');
    break;
  default:
    console.log('Sorry, Gig Harbor is closed.');
}
   event.preventDefault();
//console.log("Is there anything else you'd like?");

}
