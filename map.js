const lat = 38.2113254;         // 緯度
const lng = 140.9071296;        // 経度
const zoom = 13;                // ズームレベル

const map = L.map('map').setView([lat,lng], zoom);
// const map = L.map('map').setView([38.2113254,140.9071296], 13);

// 標準地図: std, 単色地図: ,pale 白地図: blank,
// 写真: seamlessphoto （拡張子は，jpg）
// 治水地形分類図: lcmfc2, 明治期の低湿地: swale
var t_pale = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href = "https://maps.gsi.go.jp/development/ichiran.html"  target="_blank">地理院タイル</a>'
 });

var t_photo = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg',{
      attribution: '&copy; <a href = "https://maps.gsi.go.jp/development/ichiran.html"  target="_blank">地理院タイル</a>'
 });

var Map_BaseLayer = {
  "地理院地図 淡色": t_pale,
  "地理院地図 写真": t_photo,
};

// L.control.scale().addTo(map);
// layersコントロールに Map_BaseLayer オブジェクトを設定して地図に追加
// コントロール内にプロパティ名が表示されます．
// L.control.layers(Map_BaseLayer, null, { collapsed: false }).addTo(map);
L.control.layers(Map_BaseLayer).addTo(map);
// 初期表示地図 t_pale を指定します．
t_pale.addTo(map);

// マーカーを追加
var marker = L.marker([lat,lng]).addTo(map);

//上のマーカーにポップアップを追加する。
marker.bindPopup("旧笊川排水機場").openPopup();

// GeoJSONオブジェクトを定義する
var geojsonFeature = {
  "type": "FeatureCollection",
    "features": [
/*
      {
      "type": "Feature",
      "properties": {
          "name": "機場本体",
          "_color": "#000000",
          "_opacity": 0.5,
          "_weight": 2,
      },
      "geometry": {
        "type": "LineString", // ジオメトリのタイプを指定する．今回は線描画
          "coordinates": [
             [140.907545, 38.211274], // 位置情報，経度と緯度を指定する．
             [140.907397,38.211276],
             [140.907394,38.211121],
             [140.907542,38.211119],
             [140.907545,38.211274]
          ]
        }
      },
*/
      {
      "type": "Feature",
      "properties": {
          "name": "機場本体（仮）",
          "_color": "#000000",
          "_opacity": 0.5,
          "_weight": 2,
      },
      "geometry": {
        "type": "LineString", // ジオメトリのタイプを指定する．今回は線描画
          "coordinates": [
             // 位置情報，経度と緯度を指定する．
             [140.907611407765,38.2112960279221], // 機場本体(6)
             [140.907462867981,38.2112999996145], // 機場本体(7)
             [140.907455752794,38.2111357037703], // 機場本体(8)
             [140.907604292243,38.2111317320779], // 機場本体(9)
             [140.907611407765,38.2112960279221]  // 機場本体(6)
          ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "導水路A",
        "_color": "#000000",
        "_opacity": 0.5,
        "_weight": 3
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [140.907463037765,38.2113001079221], // 導水路A（11）
          [140.907234515,38.211306218218], // 導水路A（12）
          [140.907227399994,38.2111419223739], // 導水路A（13）
          [140.907455922243,38.2111358120779]  // 導水路A（14）
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "導水路B",
        "_color": "#313131",
        "_opacity": 0.5,
        "_weight": 1
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [140.907234934832,38.2113064694652], // 導水路B（15）
          [140.907113817766,38.2113097079221], // 導水路B（16）
          [140.907106702242,38.2111454120779], // 導水路B（17）
          [140.907227819035,38.2111421736211]  // 導水路B（18）
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "護床",
        "_color": "#000000",
        "_opacity": 0.5,
        "_weight": 3
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [140.90821940257,38.2113076283543],
          [140.907856416955,38.2113173339484],
          [140.907846852931,38.2110964772398],
          [140.908209837444,38.2110867716457],
          [140.90821940257,38.2113076283543]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          "name": "操作室",
          "_color": "#000000",
          "_opacity": 0.5,
          "_weight": 2,
      },
      "geometry": {
        "type": "LineString", // ジオメトリのタイプを指定する．今回は線描画
          "coordinates": [
            // 位置情報，経度と緯度を指定する．
            [140.907684939017,38.2117739615138],
            [140.907670535197,38.2117741270539],
            [140.907670884163,38.211792872803],
            [140.907685287986,38.2117927072628],
            [140.907685591136,38.2118089919025],
            [140.907598162194,38.2118099967047],
            [140.907597510079,38.211774966316],
            [140.907515202574,38.2117759122595],
            [140.907512331459,38.2116216617812],
            [140.907682067538,38.2116197110355],
            [140.907684939017,38.2117739615138]
          ]
        }
    },
/*
    {
      "type": "Feature",
      "properties": {
        "name": "No.1 ポンプ",
        "amenity": "Pump",
        // "_markerType": "CircleMarker",
        "_color": "#000000",
        "_opacity": 0.5,
        "_weight": 3,
        "_fillColor": "#ff0000",
        "_fillOpacity": 0.5,
        "_radius": 1.275
      },
      "geometry": {
        // type は，Point は OK，Circle や CircleMarker は，NG
        "type": "Point",
        "coordinates": [140.907519964226,38.2111404104227]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "No.1 吐出管",
        "amenity": "discharge pipe",
        "_color": "#000000",
        "_opacity": 0.5,
        "_weight": 2
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [140.907533682029,38.2111402527654],
          [140.907885349345,38.2111362110904]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "No.2ポンプ",
        "amenity": "Pump",
        "_markerType": "Circle",
        "_color": "#000000",
        "_opacity": 0.5,
        "_weight": 3,
        "_fillColor": "#ff0000",
        "_fillOpacity": 0.5,
        "_radius": 1.275
      },
      "geometry": {
        "type": "Point",
        "coordinates": [140.907520532731,38.2111709497359]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "No.2 吐出管",
        "amenity": "discharge pipe",
        "_color": "#000000",
        "_opacity": 0.5,
        "_weight": 2
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [140.9075343,38.21117079],
          [140.9078859,38.21116675]
        ]
      }
    },
*/
  ]
};
// GeoJSONオブジェクトを地図に追加する
L.geoJSON(geojsonFeature).addTo(map);

/*
var geojsonLayer = L.geoJSON('q-zaru.geojson');
geojsonLayer.addTo(map);
*/
