var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AG_ITABAIANA_23_1 = new ol.format.GeoJSON();
var features_AG_ITABAIANA_23_1 = format_AG_ITABAIANA_23_1.readFeatures(json_AG_ITABAIANA_23_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AG_ITABAIANA_23_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AG_ITABAIANA_23_1.addFeatures(features_AG_ITABAIANA_23_1);
var lyr_AG_ITABAIANA_23_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AG_ITABAIANA_23_1, 
                style: style_AG_ITABAIANA_23_1,
                popuplayertitle: "AG_ITABAIANA_23",
                interactive: true,
                    title: '<img src="styles/legend/AG_ITABAIANA_23_1.png" /> AG_ITABAIANA_23'
                });
var format_280290805000231_2 = new ol.format.GeoJSON();
var features_280290805000231_2 = format_280290805000231_2.readFeatures(json_280290805000231_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280290805000231_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280290805000231_2.addFeatures(features_280290805000231_2);
var lyr_280290805000231_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280290805000231_2, 
                style: style_280290805000231_2,
                popuplayertitle: "280290805000231",
                interactive: true,
                    title: '<img src="styles/legend/280290805000231_2.png" /> 280290805000231'
                });
var format_280390605000011_3 = new ol.format.GeoJSON();
var features_280390605000011_3 = format_280390605000011_3.readFeatures(json_280390605000011_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280390605000011_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280390605000011_3.addFeatures(features_280390605000011_3);
var lyr_280390605000011_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280390605000011_3, 
                style: style_280390605000011_3,
                popuplayertitle: "280390605000011",
                interactive: true,
                    title: '<img src="styles/legend/280390605000011_3.png" /> 280390605000011'
                });
var format_280050605000007_4 = new ol.format.GeoJSON();
var features_280050605000007_4 = format_280050605000007_4.readFeatures(json_280050605000007_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280050605000007_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280050605000007_4.addFeatures(features_280050605000007_4);
var lyr_280050605000007_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280050605000007_4, 
                style: style_280050605000007_4,
                popuplayertitle: "280050605000007",
                interactive: true,
                    title: '<img src="styles/legend/280050605000007_4.png" /> 280050605000007'
                });
var format_280500005000006_5 = new ol.format.GeoJSON();
var features_280500005000006_5 = format_280500005000006_5.readFeatures(json_280500005000006_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280500005000006_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280500005000006_5.addFeatures(features_280500005000006_5);
var lyr_280500005000006_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280500005000006_5, 
                style: style_280500005000006_5,
                popuplayertitle: "280500005000006",
                interactive: true,
                    title: '<img src="styles/legend/280500005000006_5.png" /> 280500005000006'
                });
var format_280050605000005_6 = new ol.format.GeoJSON();
var features_280050605000005_6 = format_280050605000005_6.readFeatures(json_280050605000005_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280050605000005_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280050605000005_6.addFeatures(features_280050605000005_6);
var lyr_280050605000005_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280050605000005_6, 
                style: style_280050605000005_6,
                popuplayertitle: "280050605000005",
                interactive: true,
                    title: '<img src="styles/legend/280050605000005_6.png" /> 280050605000005'
                });
var format_280680005000003_7 = new ol.format.GeoJSON();
var features_280680005000003_7 = format_280680005000003_7.readFeatures(json_280680005000003_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280680005000003_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280680005000003_7.addFeatures(features_280680005000003_7);
var lyr_280680005000003_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280680005000003_7, 
                style: style_280680005000003_7,
                popuplayertitle: "280680005000003",
                interactive: true,
                    title: '<img src="styles/legend/280680005000003_7.png" /> 280680005000003'
                });
var group_CENFE_SETEMBRO_PNADC_OUT = new ol.layer.Group({
                                layers: [lyr_280500005000006_5,lyr_280050605000005_6,lyr_280680005000003_7,],
                                fold: "open",
                                title: "CENFE_SETEMBRO_PNADC_OUT"});
var group_CNEFE_OUTUBRO_PNADC_NOV = new ol.layer.Group({
                                layers: [lyr_280050605000007_4,],
                                fold: "open",
                                title: "CNEFE_OUTUBRO_PNADC_NOV"});
var group_CNEFE_DEZEMBRO_PNADC_JAN = new ol.layer.Group({
                                layers: [lyr_280290805000231_2,lyr_280390605000011_3,],
                                fold: "open",
                                title: "CNEFE_DEZEMBRO_PNADC_JAN"});

lyr_OSMStandard_0.setVisible(true);lyr_AG_ITABAIANA_23_1.setVisible(true);lyr_280290805000231_2.setVisible(true);lyr_280390605000011_3.setVisible(true);lyr_280050605000007_4.setVisible(true);lyr_280500005000006_5.setVisible(true);lyr_280050605000005_6.setVisible(true);lyr_280680005000003_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AG_ITABAIANA_23_1,group_CNEFE_DEZEMBRO_PNADC_JAN,group_CNEFE_OUTUBRO_PNADC_NOV,group_CENFE_SETEMBRO_PNADC_OUT];
lyr_AG_ITABAIANA_23_1.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280290805000231_2.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280390605000011_3.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280050605000007_4.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'MOME_MUNI': 'MOME_MUNI', });
lyr_280500005000006_5.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280050605000005_6.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280680005000003_7.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_AG_ITABAIANA_23_1.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280290805000231_2.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': 'Range', 'NOME_MUNI': 'TextEdit', });
lyr_280390605000011_3.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': 'Range', 'NOME_MUNI': 'TextEdit', });
lyr_280050605000007_4.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': 'Range', 'MOME_MUNI': 'TextEdit', });
lyr_280500005000006_5.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': 'Range', 'NOME_MUNI': 'TextEdit', });
lyr_280050605000005_6.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': 'Range', 'NOME_MUNI': 'TextEdit', });
lyr_280680005000003_7.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': 'Range', 'NOME_MUNI': 'TextEdit', });
lyr_AG_ITABAIANA_23_1.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280290805000231_2.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280390605000011_3.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280050605000007_4.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'MOME_MUNI': 'inline label - always visible', });
lyr_280500005000006_5.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280050605000005_6.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280680005000003_7.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280680005000003_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});