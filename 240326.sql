select * from tcity; #ticty 데이터조회
desc tcity; #ticty 테이블구조와 속성파악
#tcity 테이블에서 region,name,area 컬럼만 조회
select region,area,name from tcity; 
# `` 노상관:select `region`,`area`,`name` from tcity;
select region AS `지역 명`,name 도시명,area AS 번지,
	popu '인구(만명)',popu*10000 '인구(명)' from tcity
	where metro = 'n'; # 지하철이없는곳,줄바꿈노상관 ;만 제외하셈 
#사칙연산가능
select name,area,popu,popu/area '인구밀도' from tcity ;
select 525600*60 '일년은 몇초?';
#컬럼연결(concat)
select concat(name," ",'/',grade) from tstaff;
#중복제거
select distinct region from tcity;
select distinct grade from tstaff;
#가나다 오른쪽 정렬이기본 바꾸고싶으면 orderby 컬럼명 [asc/desc]
select * from tcity order by popu ;
select * from tcity order by popu asc;
select * from tcity order by popu desc;
select * from tcity order by region,name desc;
select * from tcity order by 5,1 desc;
select name,region from tcity order by 2,1 desc;
select region AS `지역 명`,name 도시명,area AS 번지,
	popu '인구(만명)',popu*10000 '인구(명)' from tcity
	where metro = 'n'
    order by `인구(만명)`desc; #.별명으로 지정가능
select * from tstaff order by 6, score desc;
#년도기준 이전이후
select name,depart,grade,joindate from tstaff  
	where joindate < '2015-01-01';
#from-where-select -order by 
#순서대로 인식해서 select뒤만 별명인지가능
#null
select * from tstaff where score is null; 
select * from tstaff where score is not null; 
desc tstaff;
#
select `a`,`b`,`and` from logic_operation
	where a = 1 and b = 1;
select `a`,`b`,`or` from logic_operation
	where a = 1 or b = 1;
select `a`from logic_operation
	where not a = 1;
select * 
	from tstaff
		where salary < 300 and score >= 60;
        
select *
	from tstaff
		where (`depart` = '인사과' and gender = '남') 
			or (depart = '영업부'  and `gender` = '여');
# _한글자 생략 % 여러글자생략select * 
select * 
from tstaff
where `name` like '안중_';
select * 
from tstaff
where `name` like '허___';
select * 
from tstaff
where `name` like '허%';
select *  #T들어가는(값이라 대문자)
from emp
where `ENAME` like '%T%';
select * 
from emp #T안들어감
where `ENAME` NOT like '%T%';
select * #T로 끝남
from emp
where `ENAME` like '%T';
select *
from emp
where `ENAME` like 'S__T_';
select * 
from emp
where `ENAME` like 'T%';
select * 
from promotion_tbl
where `promotion_msg` like '%30\%%';
select * 
from promotion_tbl
where `promotion_msg` like '%30#%%' ESCAPE '#';
#BETWEEN~AND~ => =<
select *
FROM tcity
where popu between 50 and 100;
select *
FROM tstaff
where name between '가' and '사';
select *
FROM tstaff
where joindate between '20150101' and '20151231';
#in  불연속범위에대한 조건문
select *
from tcity 
where region in ('경상','전라');
select * 
from tstaff
where grade not in ('사원','이사','과장');
 select *
 from tcity 
 where area between 500 and 1000;
 select*
 from tcity 
 where region not in ('경상','전라');
 select *
 from tstaff
 where name like '이%' or name like '안%' ;
 select *
 from tstaff
 where depart in ('총무부','영업부');
select *
 from tstaff
 where depart in ('인사과','영업부') and grade = '대리';
 #limit행의갯수제한 (mysql용어)
 select *
 from tstaff limit 10; #10번쨰까지만
  select *
 from tstaff limit 10,20; #10번째,20개
select *
from tstaff
order by salary desc limit 5;
select *
from tcity
order by area desc limit 3,2;
#order by area desc limit 2 offset 3;
select *
from tstaff
order by salary desc  limit 11,5;
#order by salary desc  limit 5 offset 11;
#수치연산
select *,popu*10000/area '인구밀도' #인지순서에때라 별명도 인지하게하기위해
from tcity
where popu*10000/area<1000; #조건에 맞는것만먼저찾고

select *,popu*10000/area '인구밀도'
from tcity
order by `인구밀도` desc;

#null은 데이터 변형할때 null값은 변형이안됌
#만약 0으로 쓸경우 변화가 잇을수잇기에
select 
	null * 1,null - 1,null + 1 ,null / 1, 1/null,
    null * null,null - null,null+null,null/null;
#함수
#1.산술함수(mod)
select
	10%3`연산자연사`,
    mod(10,3)`함수연산`;
select
	*,mod(floor(score),2)`홀짝`
	from tstaff;
#1.산술함수(round 반올림)
select
	*,round(score,-1)`반올림`
from tstaff;

select
	*
from emp
where mod(empno,2) = '1';

select *,round(score)
from tstaff;

#2.문자열함수
#concat(열이름,열이름) 문자열 결합함수
select 
	name,length(name)`name길이`
from usertbl;

select 
	*,substring(hiredate,1,4)`입사연도`,substring(hiredate,6,2)`입사월`
from emp;

#3날짜함수
select current_date(),curdate();
select current_date(),adddate(curdate(),interval 1 day);
select current_date(),subdate(curdate(),interval 57 day);
select current_time(),curtime();
select now(),localtime(),localtimestamp(),current_timestamp();

select *,datediff(curdate(),joindate)`근무일수`
from tstaff;
select *,year(current_date())-birthyear - (right(curdate(),5)< right(mdate,5))`만나이`
from usertbl;

#4.제어흐름함수
select *,
	if (salary >= 300, salary*0.3, salary*0.5) '성과금'
from tstaff;

select *,
	case 
		when salary >= 300 then salary * 0.3
		else salary * 0.5
    end as new_salary
from tstaff;
select *,
	case grade
		when '사원' then 100
        when '대리' then 200
		else 300
    end as new_salary
from tstaff;








