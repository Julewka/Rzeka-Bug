var wms_layers = [];

var format_sentinel2021_0 = new ol.format.GeoJSON();
var features_sentinel2021_0 = format_sentinel2021_0.readFeatures(json_sentinel2021_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentinel2021_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel2021_0.addFeatures(features_sentinel2021_0);
var lyr_sentinel2021_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel2021_0, 
                style: style_sentinel2021_0,
                popuplayertitle: 'sentinel 2021',
                interactive: true,
                title: '<img src="styles/legend/sentinel2021_0.png" /> sentinel 2021'
            });
var format_vmaplata90_1 = new ol.format.GeoJSON();
var features_vmaplata90_1 = format_vmaplata90_1.readFeatures(json_vmaplata90_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vmaplata90_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmaplata90_1.addFeatures(features_vmaplata90_1);
var lyr_vmaplata90_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vmaplata90_1, 
                style: style_vmaplata90_1,
                popuplayertitle: 'vmap lata 90',
                interactive: true,
                title: '<img src="styles/legend/vmaplata90_1.png" /> vmap lata 90'
            });
var format_historycznalata40_2 = new ol.format.GeoJSON();
var features_historycznalata40_2 = format_historycznalata40_2.readFeatures(json_historycznalata40_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_historycznalata40_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_historycznalata40_2.addFeatures(features_historycznalata40_2);
var lyr_historycznalata40_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_historycznalata40_2, 
                style: style_historycznalata40_2,
                popuplayertitle: 'historyczna lata 40',
                interactive: true,
                title: '<img src="styles/legend/historycznalata40_2.png" /> historyczna lata 40'
            });
var format_zawsze_3 = new ol.format.GeoJSON();
var features_zawsze_3 = format_zawsze_3.readFeatures(json_zawsze_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zawsze_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zawsze_3.addFeatures(features_zawsze_3);
var lyr_zawsze_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zawsze_3, 
                style: style_zawsze_3,
                popuplayertitle: 'zawsze',
                interactive: true,
                title: '<img src="styles/legend/zawsze_3.png" /> zawsze'
            });
var format_kiedykolwiek_4 = new ol.format.GeoJSON();
var features_kiedykolwiek_4 = format_kiedykolwiek_4.readFeatures(json_kiedykolwiek_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kiedykolwiek_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kiedykolwiek_4.addFeatures(features_kiedykolwiek_4);
var lyr_kiedykolwiek_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kiedykolwiek_4, 
                style: style_kiedykolwiek_4,
                popuplayertitle: 'kiedykolwiek',
                interactive: true,
                title: '<img src="styles/legend/kiedykolwiek_4.png" /> kiedykolwiek'
            });
var format_siatka_his_vmap_5 = new ol.format.GeoJSON();
var features_siatka_his_vmap_5 = format_siatka_his_vmap_5.readFeatures(json_siatka_his_vmap_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_his_vmap_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_his_vmap_5.addFeatures(features_siatka_his_vmap_5);
var lyr_siatka_his_vmap_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_his_vmap_5, 
                style: style_siatka_his_vmap_5,
                popuplayertitle: 'siatka_his_vmap',
                interactive: true,
                title: '<img src="styles/legend/siatka_his_vmap_5.png" /> siatka_his_vmap'
            });
var format_siatka_vmap_sentinel_6 = new ol.format.GeoJSON();
var features_siatka_vmap_sentinel_6 = format_siatka_vmap_sentinel_6.readFeatures(json_siatka_vmap_sentinel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_vmap_sentinel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_vmap_sentinel_6.addFeatures(features_siatka_vmap_sentinel_6);
var lyr_siatka_vmap_sentinel_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_vmap_sentinel_6, 
                style: style_siatka_vmap_sentinel_6,
                popuplayertitle: 'siatka_vmap_sentinel',
                interactive: true,
                title: '<img src="styles/legend/siatka_vmap_sentinel_6.png" /> siatka_vmap_sentinel'
            });

lyr_sentinel2021_0.setVisible(true);lyr_vmaplata90_1.setVisible(true);lyr_historycznalata40_2.setVisible(true);lyr_zawsze_3.setVisible(true);lyr_kiedykolwiek_4.setVisible(true);lyr_siatka_his_vmap_5.setVisible(true);lyr_siatka_vmap_sentinel_6.setVisible(true);
var layersList = [lyr_sentinel2021_0,lyr_vmaplata90_1,lyr_historycznalata40_2,lyr_zawsze_3,lyr_kiedykolwiek_4,lyr_siatka_his_vmap_5,lyr_siatka_vmap_sentinel_6];
lyr_sentinel2021_0.set('fieldAliases', {'FID_Raster': 'FID_Raster', 'Id': 'Id', 'gridcode': 'gridcode', 'pow': 'pow', 'obw': 'obw', 'FID_caly_b': 'FID_caly_b', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'pow_1': 'pow_1', 'obw_1': 'obw_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'InPoly_FID': 'InPoly_FID', });
lyr_vmaplata90_1.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obw': 'obw', });
lyr_historycznalata40_2.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_zawsze_3.set('fieldAliases', {'FID_histor': 'FID_histor', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'FID_caly_b': 'FID_caly_b', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'pow': 'pow', 'obw': 'obw', 'FID_sentin': 'FID_sentin', 'FID_Raster': 'FID_Raster', 'Id_12': 'Id_12', 'gridcode': 'gridcode', 'pow_1': 'pow_1', 'obw_1': 'obw_1', 'FID_caly_1': 'FID_caly_1', 'DLUG_BRZ_1': 'DLUG_BRZ_1', 'DLUGOSC_1': 'DLUGOSC_1', 'DOKLADNO_1': 'DOKLADNO_1', 'DOSTEPNO_1': 'DOSTEPNO_1', 'GLEBOKOSC_': 'GLEBOKOSC_', 'ISTNIENIE_': 'ISTNIENIE_', 'KAT_HYDRO_': 'KAT_HYDRO_', 'KAT_PLYWU_': 'KAT_PLYWU_', 'KAT_POJE_1': 'KAT_POJE_1', 'KAT_POLOZ_': 'KAT_POLOZ_', 'KAT_WODY_1': 'KAT_WODY_1', 'NAJW_WYS_1': 'NAJW_WYS_1', 'NAZWA_1': 'NAZWA_1', 'OBIEKT_1': 'OBIEKT_1', 'OPR_UPUST_': 'OPR_UPUST_', 'OPR_ZBURZ_': 'OPR_ZBURZ_', 'POCH_HYD_1': 'POCH_HYD_1', 'PRED_PRZ_1': 'PRED_PRZ_1', 'SREDNIA__1': 'SREDNIA__1', 'STAT_EKS_1': 'STAT_EKS_1', 'SZEROKOSC_': 'SZEROKOSC_', 'TAJNOSC_1': 'TAJNOSC_1', 'TYP_AKWED_': 'TYP_AKWED_', 'TYP_WYBRZ_': 'TYP_WYBRZ_', 'ZN_ORIENT_': 'ZN_ORIENT_', 'POWIERZC_1': 'POWIERZC_1', 'ID_12_13': 'ID_12_13', 'pow_12': 'pow_12', 'obw_12': 'obw_12', 'InPoly_FID': 'InPoly_FID', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_kiedykolwiek_4.set('fieldAliases', {'FID_histor': 'FID_histor', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'FID_sentin': 'FID_sentin', 'FID_Raster': 'FID_Raster', 'Id_1': 'Id_1', 'gridcode': 'gridcode', 'pow': 'pow', 'obw': 'obw', 'FID_caly_b': 'FID_caly_b', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID_12', 'pow_1': 'pow_1', 'obw_1': 'obw_1', 'InPoly_FID': 'InPoly_FID', 'FID_caly_1': 'FID_caly_1', 'DLUG_BRZ_1': 'DLUG_BRZ_1', 'DLUGOSC_1': 'DLUGOSC_1', 'DOKLADNO_1': 'DOKLADNO_1', 'DOSTEPNO_1': 'DOSTEPNO_1', 'GLEBOKOSC_': 'GLEBOKOSC_', 'ISTNIENIE_': 'ISTNIENIE_', 'KAT_HYDRO_': 'KAT_HYDRO_', 'KAT_PLYWU_': 'KAT_PLYWU_', 'KAT_POJE_1': 'KAT_POJE_1', 'KAT_POLOZ_': 'KAT_POLOZ_', 'KAT_WODY_1': 'KAT_WODY_1', 'NAJW_WYS_1': 'NAJW_WYS_1', 'NAZWA_1': 'NAZWA_1', 'OBIEKT_1': 'OBIEKT_1', 'OPR_UPUST_': 'OPR_UPUST_', 'OPR_ZBURZ_': 'OPR_ZBURZ_', 'POCH_HYD_1': 'POCH_HYD_1', 'PRED_PRZ_1': 'PRED_PRZ_1', 'SREDNIA__1': 'SREDNIA__1', 'STAT_EKS_1': 'STAT_EKS_1', 'SZEROKOSC_': 'SZEROKOSC_', 'TAJNOSC_1': 'TAJNOSC_1', 'TYP_AKWED_': 'TYP_AKWED_', 'TYP_WYBRZ_': 'TYP_WYBRZ_', 'ZN_ORIENT_': 'ZN_ORIENT_', 'POWIERZC_1': 'POWIERZC_1', 'ID_12_13': 'ID_12_13', 'pow_12': 'pow_12', 'obw_12': 'obw_12', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_siatka_his_vmap_5.set('fieldAliases', {'Id': 'Id', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'B_A': 'B_A', 'wysokosc': 'wysokosc', 'Field': 'Field', 'nowe': 'nowe', });
lyr_siatka_vmap_sentinel_6.set('fieldAliases', {'Id': 'Id', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', });
lyr_sentinel2021_0.set('fieldImages', {'FID_Raster': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'pow': 'TextEdit', 'obw': 'TextEdit', 'FID_caly_b': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'pow_1': 'TextEdit', 'obw_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'InPoly_FID': 'TextEdit', });
lyr_vmaplata90_1.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'pow': 'TextEdit', 'obw': 'TextEdit', });
lyr_historycznalata40_2.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_zawsze_3.set('fieldImages', {'FID_histor': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_caly_b': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'pow': 'TextEdit', 'obw': 'TextEdit', 'FID_sentin': 'TextEdit', 'FID_Raster': 'TextEdit', 'Id_12': 'TextEdit', 'gridcode': 'TextEdit', 'pow_1': 'TextEdit', 'obw_1': 'TextEdit', 'FID_caly_1': 'TextEdit', 'DLUG_BRZ_1': 'TextEdit', 'DLUGOSC_1': 'TextEdit', 'DOKLADNO_1': 'TextEdit', 'DOSTEPNO_1': 'TextEdit', 'GLEBOKOSC_': 'TextEdit', 'ISTNIENIE_': 'TextEdit', 'KAT_HYDRO_': 'TextEdit', 'KAT_PLYWU_': 'TextEdit', 'KAT_POJE_1': 'TextEdit', 'KAT_POLOZ_': 'TextEdit', 'KAT_WODY_1': 'TextEdit', 'NAJW_WYS_1': 'TextEdit', 'NAZWA_1': 'TextEdit', 'OBIEKT_1': 'TextEdit', 'OPR_UPUST_': 'TextEdit', 'OPR_ZBURZ_': 'TextEdit', 'POCH_HYD_1': 'TextEdit', 'PRED_PRZ_1': 'TextEdit', 'SREDNIA__1': 'TextEdit', 'STAT_EKS_1': 'TextEdit', 'SZEROKOSC_': 'TextEdit', 'TAJNOSC_1': 'TextEdit', 'TYP_AKWED_': 'TextEdit', 'TYP_WYBRZ_': 'TextEdit', 'ZN_ORIENT_': 'TextEdit', 'POWIERZC_1': 'TextEdit', 'ID_12_13': 'TextEdit', 'pow_12': 'TextEdit', 'obw_12': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_kiedykolwiek_4.set('fieldImages', {'FID_histor': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_sentin': 'TextEdit', 'FID_Raster': 'TextEdit', 'Id_1': 'TextEdit', 'gridcode': 'TextEdit', 'pow': 'TextEdit', 'obw': 'TextEdit', 'FID_caly_b': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'TextEdit', 'pow_1': 'TextEdit', 'obw_1': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_caly_1': 'TextEdit', 'DLUG_BRZ_1': 'TextEdit', 'DLUGOSC_1': 'TextEdit', 'DOKLADNO_1': 'TextEdit', 'DOSTEPNO_1': 'TextEdit', 'GLEBOKOSC_': 'TextEdit', 'ISTNIENIE_': 'TextEdit', 'KAT_HYDRO_': 'TextEdit', 'KAT_PLYWU_': 'TextEdit', 'KAT_POJE_1': 'TextEdit', 'KAT_POLOZ_': 'TextEdit', 'KAT_WODY_1': 'TextEdit', 'NAJW_WYS_1': 'TextEdit', 'NAZWA_1': 'TextEdit', 'OBIEKT_1': 'TextEdit', 'OPR_UPUST_': 'TextEdit', 'OPR_ZBURZ_': 'TextEdit', 'POCH_HYD_1': 'TextEdit', 'PRED_PRZ_1': 'TextEdit', 'SREDNIA__1': 'TextEdit', 'STAT_EKS_1': 'TextEdit', 'SZEROKOSC_': 'TextEdit', 'TAJNOSC_1': 'TextEdit', 'TYP_AKWED_': 'TextEdit', 'TYP_WYBRZ_': 'TextEdit', 'ZN_ORIENT_': 'TextEdit', 'POWIERZC_1': 'TextEdit', 'ID_12_13': 'TextEdit', 'pow_12': 'TextEdit', 'obw_12': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_siatka_his_vmap_5.set('fieldImages', {'Id': 'Range', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'B_A': 'TextEdit', 'wysokosc': 'TextEdit', 'Field': 'TextEdit', 'nowe': 'TextEdit', });
lyr_siatka_vmap_sentinel_6.set('fieldImages', {'Id': 'Range', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', });
lyr_sentinel2021_0.set('fieldLabels', {'FID_Raster': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'pow': 'no label', 'obw': 'no label', 'FID_caly_b': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'pow_1': 'no label', 'obw_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'inline label - always visible', 'InPoly_FID': 'no label', });
lyr_vmaplata90_1.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'inline label - always visible', 'pow': 'no label', 'obw': 'no label', });
lyr_historycznalata40_2.set('fieldLabels', {'Id': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'inline label - always visible', });
lyr_zawsze_3.set('fieldLabels', {'FID_histor': 'no label', 'Id': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'FID_caly_b': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'pow': 'no label', 'obw': 'no label', 'FID_sentin': 'no label', 'FID_Raster': 'no label', 'Id_12': 'no label', 'gridcode': 'no label', 'pow_1': 'no label', 'obw_1': 'no label', 'FID_caly_1': 'no label', 'DLUG_BRZ_1': 'no label', 'DLUGOSC_1': 'no label', 'DOKLADNO_1': 'no label', 'DOSTEPNO_1': 'no label', 'GLEBOKOSC_': 'no label', 'ISTNIENIE_': 'no label', 'KAT_HYDRO_': 'no label', 'KAT_PLYWU_': 'no label', 'KAT_POJE_1': 'no label', 'KAT_POLOZ_': 'no label', 'KAT_WODY_1': 'no label', 'NAJW_WYS_1': 'no label', 'NAZWA_1': 'no label', 'OBIEKT_1': 'no label', 'OPR_UPUST_': 'no label', 'OPR_ZBURZ_': 'no label', 'POCH_HYD_1': 'no label', 'PRED_PRZ_1': 'no label', 'SREDNIA__1': 'no label', 'STAT_EKS_1': 'no label', 'SZEROKOSC_': 'no label', 'TAJNOSC_1': 'no label', 'TYP_AKWED_': 'no label', 'TYP_WYBRZ_': 'no label', 'ZN_ORIENT_': 'no label', 'POWIERZC_1': 'no label', 'ID_12_13': 'no label', 'pow_12': 'no label', 'obw_12': 'no label', 'InPoly_FID': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_kiedykolwiek_4.set('fieldLabels', {'FID_histor': 'no label', 'Id': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'FID_sentin': 'no label', 'FID_Raster': 'no label', 'Id_1': 'no label', 'gridcode': 'no label', 'pow': 'no label', 'obw': 'no label', 'FID_caly_b': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'pow_1': 'no label', 'obw_1': 'no label', 'InPoly_FID': 'no label', 'FID_caly_1': 'no label', 'DLUG_BRZ_1': 'no label', 'DLUGOSC_1': 'no label', 'DOKLADNO_1': 'no label', 'DOSTEPNO_1': 'no label', 'GLEBOKOSC_': 'no label', 'ISTNIENIE_': 'no label', 'KAT_HYDRO_': 'no label', 'KAT_PLYWU_': 'no label', 'KAT_POJE_1': 'no label', 'KAT_POLOZ_': 'no label', 'KAT_WODY_1': 'no label', 'NAJW_WYS_1': 'no label', 'NAZWA_1': 'no label', 'OBIEKT_1': 'no label', 'OPR_UPUST_': 'no label', 'OPR_ZBURZ_': 'no label', 'POCH_HYD_1': 'no label', 'PRED_PRZ_1': 'no label', 'SREDNIA__1': 'no label', 'STAT_EKS_1': 'no label', 'SZEROKOSC_': 'no label', 'TAJNOSC_1': 'no label', 'TYP_AKWED_': 'no label', 'TYP_WYBRZ_': 'no label', 'ZN_ORIENT_': 'no label', 'POWIERZC_1': 'no label', 'ID_12_13': 'no label', 'pow_12': 'no label', 'obw_12': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_siatka_his_vmap_5.set('fieldLabels', {'Id': 'inline label - always visible', 'GRID_ID': 'no label', 'PERCENTAGE': 'inline label - always visible', 'B_A': 'no label', 'wysokosc': 'no label', 'Field': 'no label', 'nowe': 'no label', });
lyr_siatka_vmap_sentinel_6.set('fieldLabels', {'Id': 'inline label - always visible', 'GRID_ID': 'no label', 'PERCENTAGE': 'inline label - always visible', });
lyr_siatka_vmap_sentinel_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});