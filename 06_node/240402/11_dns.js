//async 키워드 함수앞에 사용하여 항상 promise를 반환한다고 선언
//async 함수 내부에서 await 키워드를 사용하야 promise가 처리될떄가지기다림
//await키워드는 일반적으로 promise를 반환하는 비동기 작업의 결과를 받아올때까지 사용됨

const dns = require('dns').promises;

const domain = 'naver.com';//네이버에 들어가서 정보가지오기까지 시간이걸려서
//프로미스 잇음

async function findIpAddressInfo() {
    const ip = await dns.lookup(domain);
    console.log('IP', ip);

    const ipv4 = await dns.resolve(domain, 'A');
    console.log(ipv4, 'A [IPv4 주소]');

    const ns = await dns.resolve(domain, 'NS');
    console.log('NS [네임서버]', ns);

    const soa = await dns.resolve(domain, 'SOA');
    console.log('SOA [도메인정보]', soa);

    const cname = await dns.resolve('www.' + domain, 'CNAME');
    console.log('CNAME [별칭]', cname);

    const mx = await dns.resolve(domain, 'MX');
    console.log('MX [메일서버]', mx);

    const any = await dns.resolve(domain, 'ANY');
    console.log('ANY [모든 정보]', any);
}

findIpAddressInfo();