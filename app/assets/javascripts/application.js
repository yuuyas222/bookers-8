// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require_tree .

function initMap() {
  
      var test ={lat: <%= user.latitude %>, lng: <%= user.longitude %>};
      var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15, 
                center: test
                });
      var transitLayer = new google.maps.TransitLayer();
      transitLayer.setMap(map);
  
      var contentString = '住所：<%= shop.address %>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
  
  
      var marker = new google.maps.Marker({
                    position:test,
                    map: map,
                    title: contentString
                   });
  
       marker.addListener('click', function() {
         infowindow.open(map, marker);
       });
    }