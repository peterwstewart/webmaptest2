var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_TestQfieldLayer_1 = new ol.format.GeoJSON();
var features_TestQfieldLayer_1 = format_TestQfieldLayer_1.readFeatures(json_TestQfieldLayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TestQfieldLayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TestQfieldLayer_1.addFeatures(features_TestQfieldLayer_1);
var lyr_TestQfieldLayer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TestQfieldLayer_1, 
                style: style_TestQfieldLayer_1,
                popuplayertitle: 'TestQfieldLayer',
                interactive: true,
                title: '<img src="styles/legend/TestQfieldLayer_1.png" /> TestQfieldLayer'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_TestQfieldLayer_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_TestQfieldLayer_1];
lyr_TestQfieldLayer_1.set('fieldAliases', {'fid': 'fid', 'testAttribute': 'testAttribute', });
lyr_TestQfieldLayer_1.set('fieldImages', {'fid': '', 'testAttribute': '', });
lyr_TestQfieldLayer_1.set('fieldLabels', {'fid': 'no label', 'testAttribute': 'no label', });
lyr_TestQfieldLayer_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});