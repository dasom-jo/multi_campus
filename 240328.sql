use study_db;

#cross join 
select * from tcar;
select * from tmaker;

select * from tcar, tmaker;

select * from tcar c
	cross join tmaker m
	where c.maker = m.maker;

#inner join 
select *
	from tcar c 
    join tmaker m on c.maker = m.maker;
#maker 이름 동일시
select *
	from tcar
    join tmaker using(maker);
    
select *
	from tcar
    natural join tmaker;   

#공장이 어딧는지
select c.car, m.factory
	from tcar c 
    join tmaker m on c.maker = m.maker;
    
select concat(e.ENAME ,"의 매니저는 바로 " ,m.ename)
	from emp e 
    join emp m on e.mgr = m.empno;

#DEPT 테이블의 LOC가 ‘NEW YORK’ 인 사원의 EMP 테이블의 이름과 급여를 조회
select ename, sal, loc
from emp e
join dept d on e.deptno = d.deptno #여기서 서로를 엮어주는거
where d.loc = 'NEW YORK';

#DEPT 테이블의 DNAME 컬럼의 값이 ‘ACCOUNTING’ 인 사원의 
#EMP 테이블의 이름과 입사일을 조회
select ename, HIREDATE,dname
from emp e
join dept d on e.deptno = d.deptno
where d.dname = 'ACCOUNTING';

#EMP 테이블의 JOB이 ‘MANAGER’인 사원의 EMP 테이블의 이름, 
#DEPT 테이블의 부서명을 조회
select e.ename, d.dname
from emp e 
join dept d on  e.deptno = d.deptno
where job = 'MANAGER';   

  
#EMP 테이블와 SALGRADE 테이블을 이용해 
#각 급여에 해당하는 등급을 매핑하여, 이름, 급여, 등급을 조회    
select e.ename, e.sal, s.grade
from emp e
join salgrade s on e.sal between s.losal and s.hisal;  

select e.ename, e.sal, s.grade
from emp e
join salgrade s on e.sal >= s.losal and e.sal <= s.hisal; 

#EMP 테이블에서 MANAGER 가 ‘KING’인 사원들의 이름, 직급을 조회
#셀프조인
select m.ename,e.job
from emp e
join emp m on e.empno = m.mgr
where e.ename = 'king';

#inner JOIN	
select * from tcar c;
select * from tmaker m;

select * from tcar c
join tmaker m on c.maker=m.maker;

#outer join
#left join
#(왼쪽)기준테이블 기준으로 짝이없어도 가져와서 null로해줘
select *
from tcar c
left join tmaker m on c.maker = m.maker;

select *
from tcar c
left join tmaker m using (maker);
#자연스럽게 둘이 어울리게 해줘 기능은 같음
select *
from tcar c
natural left join tmaker;

#right (오르쪽 테이블은 보여줌/left:from,join부분만 바꾸면 같음) 
select *
from tcar c
	right join tmaker m on c.maker = m.maker;

select *
from tcar c
	right join tmaker m using (maker);
#자연스럽게 둘이 어울리게 해줘 기능은 같음
select *
from tcar c
	natural right join tmaker;

#mysql에서는 full outer join을 지원하지않아 left,right합침
#full
select *
from tcar c
	left join tmaker m on c.maker = m.maker
	union
select *
from tcar c
	right join tmaker m on c.maker = m.maker;

#다중조인
select * from tcar c
	join tmaker m on c.maker = m.maker
	join tcity ct on m.factory = ct.name;

#사원(EMP) 테이블과 부서(DEPT) 테이블을 조인하여, 사원명, 부서번호,부서명을 출력
#사원 테이블에는 부서번호 40번 데이터가 없지만, 40번 부서의 부서명도 함께 출력
select e.ename,d.deptno,d.dname
from emp e
right join dept d on e.deptno = d.deptno; 

#NEW YORK에서 근무하고 있는 사원에 대하여 
#사원명, 업무, 급여, 부서명을 출력
select e.ename, d.dname,e.sal,e.job,d.loc
from emp e
	join dept d on e.DEPTNO = e.DEPTNO
	where d.loc = "NEW YORK";

#보너스(comm)가 null 이 아닌 사원에 대하여 
#사원명, 부서명, 위치를 출력
select e.ename, c.dname,c.loc ,e.comm
from emp e
join dept c on e.deptno = c.deptno
where e.comm is not null;

#사원명 중 L자가 있는 사원에 대하여 
#사원명, 업무, 부서명, 위치를 출력
select e.ename,d.dname,d.loc
from emp e
join dept d on e.deptno = d.deptno 
where e.ename like "%L%";

#자신의 관리자보다 먼저 입사한 사원에 대하여 
#이름, 입사일, 관리자 이름, 관리자 입사일을 출력
#e.mgr = m.empno 이부분을 연결할떄 왼쪽이 하급 오른쪽이 상급이
#직접 이부분 출력해서 보면 이해가능
select e.ename,e.hiredate,e.mgr, m.ename,m.hiredate,m.empno
from emp e 
join emp m on e.mgr = m.empno
where e.hiredate < m.hiredate;
#e.mgr = m.empno 이부분을 연결할떄 왼쪽이 하급 오른쪽이 상급이
-- select e.ename,e.hiredate,e.mgr,m.empno, m.ename,m.hiredate
-- from emp e 
-- join emp m on e.mgr = m.empno;

#insert into
insert into tcity
	values('경기',1441,31,'y','양주');

select * from tcity;
insert into tcity(region,name,popu,area,metro)
	values('경기','양주',31,1441,'y');

insert into tcity(name,metro,region)
values ('구미','n','경상');

insert into tcity 
	values ('상주',null,null,'n','경상');

INSERT INTO tCity (name, area, popu, metro, region) VALUES 
('서울',605,974,'y','경기'), 
('부산',765,342,'y','경상'),
('오산',42,21,'n','경기'),
('전주',205,65,'n','전라'),
('순천',910,27,'n','전라'),
('춘천',1116,27,'n','강원'),
('홍천',1819,7,'n','강원');


insert into tcity (name,area,popu,metro,region) values
	('이천',461,21,'y','경기'), 
	('대구',883,248,'n','경기'), 
    ('영월',1127,4,'n','경기');
 
insert into tcity(name,area,popu,metro,region)
select factory,940,83,'n','충청' 
from tmaker
where maker = '쌍용'; 
 
 select * from tcity;
#delete
delete from tcity 
	where name = '부산';
delete from tcity 
	where region = '경기';
delete from tcity 
	where popu > 50;    
    
 delete from tstaff 
	where depart = "영업부"; 
 
#update
select * from tcity;
#apply버튼
update tcity set popu = 1000, region = '충청'
where name = '서울';

update tcity set popu = popu * 2
where name = '오산';

update tstaff set depart = '차장'
where gender = '여'and grade = '사원';

update tstaff 
set salary = salary * 1.1
where depart = '총무부';

select * from tstaff; 