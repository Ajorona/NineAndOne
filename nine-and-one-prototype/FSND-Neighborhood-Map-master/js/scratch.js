
google.maps.event.addListener(marker, 'click', (function(marker, infoWindow, mkID) {
    return function() {
        if(infoWindow) {
            infoWindow.close();
        }
        infoWindow.open(map, marker);
        infoWindowAjax(mkID, function(data) {
            infoWindow.setContent(data);
        });
    };
})(marker, infoWindow, mkID));


                google.maps.event.addListener(marker, 'click', (function(marker, infowindow) {
                    return function() {
                        if (infowindow) {
                            infowindow.close();
                        }
                        infowindow.open(bayarea, marker)
                        wikiExtract(marker.title).then(function(data) {
                            infowindow.setContent(data);
                        });
                    };
                ((marker, infoWindow));