var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ServiceArea_1 = new ol.format.GeoJSON();
var features_ServiceArea_1 = format_ServiceArea_1.readFeatures(json_ServiceArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_1.addFeatures(features_ServiceArea_1);
var lyr_ServiceArea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_1, 
                style: style_ServiceArea_1,
                popuplayertitle: 'Service Area',
                interactive: true,
                title: '<img src="styles/legend/ServiceArea_1.png" /> Service Area'
            });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });
var format_BUSSTOPS_3 = new ol.format.GeoJSON();
var features_BUSSTOPS_3 = format_BUSSTOPS_3.readFeatures(json_BUSSTOPS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUSSTOPS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUSSTOPS_3.addFeatures(features_BUSSTOPS_3);
var lyr_BUSSTOPS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUSSTOPS_3, 
                style: style_BUSSTOPS_3,
                popuplayertitle: 'BUS STOPS',
                interactive: true,
                title: '<img src="styles/legend/BUSSTOPS_3.png" /> BUS STOPS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ServiceArea_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_BUSSTOPS_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ServiceArea_1,lyr_Roads_2,lyr_BUSSTOPS_3];
lyr_ServiceArea_1.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_Roads_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', });
lyr_BUSSTOPS_3.set('fieldAliases', {'name': 'name', 'highway': 'highway', 'foto': 'foto', });
lyr_ServiceArea_1.set('fieldImages', {'id': '', 'cost_level': '', });
lyr_Roads_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', });
lyr_BUSSTOPS_3.set('fieldImages', {'name': 'TextEdit', 'highway': 'TextEdit', 'foto': 'ExternalResource', });
lyr_ServiceArea_1.set('fieldLabels', {'id': 'no label', 'cost_level': 'no label', });
lyr_Roads_2.set('fieldLabels', {'full_id': 'inline label - always visible', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'inline label - always visible', });
lyr_BUSSTOPS_3.set('fieldLabels', {'name': 'inline label - always visible', 'highway': 'hidden field', 'foto': 'no label', });
lyr_BUSSTOPS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});