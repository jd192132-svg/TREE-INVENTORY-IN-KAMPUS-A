var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_treebarufyp_1 = new ol.format.GeoJSON();
var features_treebarufyp_1 = format_treebarufyp_1.readFeatures(json_treebarufyp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_treebarufyp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_treebarufyp_1.addFeatures(features_treebarufyp_1);
var lyr_treebarufyp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_treebarufyp_1, 
                style: style_treebarufyp_1,
                popuplayertitle: 'tree baru fyp',
                interactive: true,
    title: 'tree baru fyp<br />\
    <img src="styles/legend/treebarufyp_1_0.png" /> JENIS A<br />\
    <img src="styles/legend/treebarufyp_1_1.png" /> JENIS B<br />\
    <img src="styles/legend/treebarufyp_1_2.png" /> JENIS C<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_treebarufyp_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_treebarufyp_1];
lyr_treebarufyp_1.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'DIAMETER': 'DIAMETER', 'HEIGHT_T': 'HEIGHT_T', 'JENIS_T': 'JENIS_T', 'PICTURE': 'PICTURE', 'ID_TREE': 'ID_TREE', });
lyr_treebarufyp_1.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'DIAMETER': 'TextEdit', 'HEIGHT_T': 'TextEdit', 'JENIS_T': 'TextEdit', 'PICTURE': 'TextEdit', 'ID_TREE': 'TextEdit', });
lyr_treebarufyp_1.set('fieldLabels', {'Layer': 'inline label - always visible', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'DIAMETER': 'inline label - always visible', 'HEIGHT_T': 'inline label - always visible', 'JENIS_T': 'inline label - always visible', 'PICTURE': 'inline label - always visible', 'ID_TREE': 'inline label - always visible', });
lyr_treebarufyp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});