let container = document.getElementById('map');//지도를 담을 영역의 DOM레퍼런스
let options = { //지도를 생성할때 필요한 기본옵션 
    center : new kakao.maps.LatLng(37.5025398, 127.0248679),// 지도의 중심좌표
    level: 14 //지도의 레벨(확대,축소 정도)
};

let map = new kakao.maps.Map(container,options); //지도 생성및 객체리턴


//마커클러스터 설정 :가까이있는 마커들은 멀리서보면 하나의 마커로 보이게하는게하는거
let clusterer = new kakao.maps.MarKerClusterer({
    map,
    averageCenter: true,
    minLevel: 10
})

let serviceKey = 'yAVzxpkULGQRrM5zy4zu8iDmxlYO2S0lyY%2FkF6QV996eDh3eKBzOgM0j7YZwpW%2F%2BECYL4OkhcMNsVYswLD8TwQ%3D%3D0';
let mobileOS = 'ETC';
let mobileApp = 'appName';
let url = 'http://apis.data.go.kr/B551011/GoCamping/basedList';
url += '?'
url += `MobileOs=${mobileOS}&`;
url += `MobileApp=${moblieApp}$`;
url += `serviceKey=${serviceKey}`;
url += '_type=json';

fetch(url)
    .then(response => response.json())
    .then(data => {
        //캠핑장에서 배열 가져오기
        const campingData = data.response.body.items.item;

        //테이블에 출력하기
        const table = document.querySelector('table');
        let contents = ``;
        let marKers = [];
        campingData.forEach((camp,index)=> {
            const mapSetting = makeMapSetting(camp);
            marKers.push(mapSetting.marker);
            kakao.maps.event.addListener(mapSetting.marker, 'mouseover', makeOverListener(map,mapSetting.marker,mapSetting.infowindow))
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
        infowindow: new kakao.maps.Infowindow({
            content : item.facltNm
        })
    }
    return obj;
}

//인포윈도우를 표시하는 클로저를 만드는 함수입니다.
//미커를 클릭햇을떄 표시되는 팝업창
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map,marker);
    };
}

//인포윈도으룰 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
    return function () {
        infowindow.close();
    };
}