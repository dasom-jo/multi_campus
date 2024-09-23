let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
let options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.5025398, 127.0248679), //지도의 중심좌표.
	level: 14 //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커클러스터 설정
let clusterer = new kakao.maps.MarkerClusterer({
    map,
    averageCenter: true,
    minLevel: 10,
})



let serviceKey = 'q7QgZgG%2FJGlyxP1lyFODMTf%2FOPrEqUw%2BV5mbLVleCcZYXs0%2BTajdSojjwewgUv4sjVsnxRYoUPvVD6cux%2FCeYQ%3D%3D';
let mobileOS = 'ETC';
let moblieApp = 'appName';
let url = 'http://apis.data.go.kr/B551011/GoCamping/basedList';
url += '?'
url += `MobileOS=${mobileOS}&`;
url += `MobileApp=${moblieApp}&`;
url += `serviceKey=${serviceKey}&`;
url += '_type=json';

fetch(url)
    .then(response => response.json())
    .then(data => {
        // 캠핑장 데이터 배열 가져오기
        const campingData = data.response.body.items.item;

        // 테이블에 출력하기
        const table = document.querySelector('table');
        let contents = ``;
        let markers = [];
        campingData.forEach((camp, index) => {
            const mapSetting = makeMapSetting(camp);
            markers.push(mapSetting.marker);
            kakao.maps.event.addListener(mapSetting.marker, 'mouseover', makeOverListener(map, mapSetting.marker, mapSetting.infowindow));
            kakao.maps.event.addListener(mapSetting.marker, 'mouseout', makeOutListener(mapSetting.infowindow));
            
            contents += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${camp.facltNm}</td>
                </tr>
            `
        });
        clusterer.addMarkers(markers);
        table.innerHTML = contents;
    })

function makeMapSetting(item) {
    const obj = {
        marker: new kakao.maps.Marker({
            map,
            position: new kakao.maps.LatLng(item.mapY, item.mapX),
        }),
        infowindow: new kakao.maps.InfoWindow({
            content: item.facltNm
        })
    }
    return obj;
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