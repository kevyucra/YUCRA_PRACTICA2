window.onload = init;
function init(){
	const map = new ol.Map({
		view: new ol.View({
			center: ol.proj.transform([-64.55,-16.96], "EPSG:4326", "EPSG:3857"),
			zoom: 6.4,
			minZoom: 4
		}),
		layers: [
		    new ol.layer.Tile({
			    source: new ol.source.OSM()
		  })
		],
		target: "js-map"
	})
	
	const rios = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geoserver.idesinde.com:8443/geoserver/ows?",
			params:{
				LAYERS:"YUCRA:Rios",
				FORMAT:"image/png",
				TRANSPARENT: true
				},
			attributions: "<a href=https://geoserver.idesinde.com:8443/geoserver>GEOPORTAL_IDESINDE</a>"
		})
						
	})
	map.addLayer(rios);
	const capitales = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geoserver.idesinde.com:8443/geoserver/ows?",
			params:{
				LAYERS:"YUCRA:capital_municipal",
				FORMAT:"image/png",
				TRANSPARENT: true
				},
			attributions: "<a href=https://geoserver.idesinde.com:8443/geoserver>GEOPORTAL_IDESINDE</a>"
		})
						
	})
	map.addLayer(capitales);
	const areasprotegidas = new ol.layer.Tile({
		source: new ol.source.TileWMS({
			url:"https://geoserver.idesinde.com:8443/geoserver/ows?",
			params:{
				LAYERS:"YUCRA:areas_protegidas_departamentales42015",
				FORMAT:"image/png",
				TRANSPARENT: true
				},
			attributions: "<a href=https://geoserver.idesinde.com:8443/geoserver>GEOPORTAL_IDESINDE</a>"
		})
						
	})
	map.addLayer(areasprotegidas);
}
