var container = document.querySelector('#map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표. /위도경도
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5025398, 127.0248679), // 지도의 중심좌표
        level: 14 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     position: markerPosition
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);

// // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// // marker.setMap(null);   

//마커 클러스트 설정
let clusterer = new kakao.map.MarkerClusterer({
    map,
    averageCenter : true,
    minLevel :10,
})


let servicekey = "yAVzxpkULGQRrM5zy4zu8iDmxlYO2S0lyY%2FkF6QV996eDh3eKBzOgM0j7YZwpW%2F%2BECYL4OkhcMNsVYswLD8TwQ%3D%3D0";
let mobileOS = 'ETC'
let MobileApp= 'AppTest'
let url =  'http://apis.data.go.kr/B551011/GoCamping/basedList'
url += '?'
url += `MobileOS=${mobileOS}&`;
url += `MobileApp =${MobileApp}&`;
url += `serviceKey = ${serviceKey}}&`;
url += '_type=json';

fetch(url)
    .then(response => response.json())
    .then(data => {
        //캠핑장 데이터 배열 가져오기
        const campingDate = data.response.body.items.item;

        //테이블에 출력하기
        const table = document.querySelector('table');
        let contents = ``;
        let markers=[];
        campingDate.forEach((camp, index) => {
            const mapSetting = makeMapSetting(camp);
            let contents = ``;
            campingDate.forEach((camp, index)=> {
                const mapSetting = makeMapSetting(camp);
                markers.push(mapSetting, )
            })

            contents += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${camp.facltNm}</td>
                </tr>`
        });
        clusterer.addMarkers(marKers);
        table.innerHTML = contents;
    })


function makeMapSetting(item) {
    const obj = {
        marker : new kakao.maps.Marker ({
            map,
            position: new kakao.maps.LatLng()
        })
    }
}


// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function () {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}