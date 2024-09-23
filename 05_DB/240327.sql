-- #use study_db;

select *
		, if(score is null, 0 ,score)as `new score`
        from tstaff; # score가 null이면 0 아니면 score반환

select *,
		case
			when score is null then 0
            else score
        end as `new score`
from tstaff;

select *,
		case
			gender #프로그램이 자동 등호,null값비교불가
            when'남' then 1
            when'여' then 1
            else '알수없음'
		end`new gender`
from tstaff;

SELECT
    *
FROM
    tstaff
WHERE
    CASE grade
        WHEN '사원' THEN 1
        WHEN '대리' THEN 2
        WHEN '차장' THEN 3
        WHEN '과장' THEN 4
        WHEN '부장' THEN 5
        WHEN '이사' THEN 6
        ELSE NULL
    END = 1;

select *
from tstaff
order by
	case grade
		when '사원' then 1
        when '대리' then 2
        when '차장' then 3
        when '과장' then 4
        when '부장' then 5
        when '이사' then 6
		else null
    end desc;

select grade, avg(salary) `직급별평균임금`
from tstaff
group by grade
order by `직급별평균임금`;

select grade, avg(salary) `직급별평균임금`
from tstaff
where grade not in ('이사')
group by grade
order by `직급별평균임금`;

select depart,gender,count(*)`열의갯수`
from tstaff
group by depart,gender
order by depart,gender;

select depart,gender,sum(score)`총점`
from tstaff
group by depart,gender
order by depart,gender;

select depart,gender,avg(salary)`평균`
from tstaff
group by depart,gender
order by depart,gender;

select *
from tstaff
where depart = '영업부' order by score; #null인거alter

select depart,gender,min(salary)
from tstaff
group by depart,gender
order by depart,gender;

select depart,gender,max(salary)
from tstaff
group by depart,gender
order by depart,gender;

SELECT count(*) as 직원수
FROM tstaff;

select count(*) '직원수'
from tstaff
where salary >= 400;

select grade, count(*) `직급별인원수`
from tstaff
group by grade
order by `직급별인원수`;

select count(distinct grade) `직급수`
from tstaff;

select count(*) `null스코어`
from tstaff
where score is null;

select count(*) - count(score) `null스코어`
from tstaff;

select avg(round(salary,-1)) '인사과 평균급여'
from tstaff
where depart = '인사과';

select sum(popu) `총합`,
		avg(popu) `평균`,
        min(area)`최소면적`,
		max(area)`최대면적`
from tcity;

#group by - having
select depart,avg(salary)
from tstaff
group by depart
having avg(salary) >= 350
order by avg(salary);

select
		sum(sal)`급여합`,
		min(sal)`최소급여`,
        max(sal)`최대급여`,
        count(sal)`총인원`
from emp;

select job ,
		max(sal)`업무별최대급여`,
        min(sal)`최소급여`,
        sum(sal)`급여합`
from emp
group by job;

select job, count(*)
from emp
group by job;

select max(sal)-min(sal)'최대 최소의 차이'
from emp;

#교안2
#2개 이상의select

#1.집합연산자(갯수타입일치)
select * from dept;
select * from emp;

select deptno from dept
union
select deptno from emp; #4개

select deptno from dept
union all
select deptno from emp; #18개

select deptno from dept
intersect
select deptno from emp; #3개

select deptno from dept
except
select deptno from emp; #1개(순서에유의)

#2.서브쿼리
select dname
from dept
where deptno = (
		select deptno
        from emp
        where ename = 'MILLER'
);

select dname
from dept
where deptno in (
		select deptno
        from emp
        where ename = 'MILLER' or ename = 'SMITH'
);

select *
from emp
where sal >=
		(select
			avg(sal)
			from emp);
#v평균보다 높은 금여를 받는 자들
select *
from emp
where sal >=
		(select
			avg(sal)
			from emp);
 #밀러와 같은 부서 근무
select *
from emp
where deptno = (
		select deptno
        from emp
		where ename = 'MILLER'
);

select *
from emp
where job  in(
			select job
            from emp
            where ename = "MILLER"
)and ename <>"MILLER" ;

select *
from emp
where sal >= (
				select sal
                from emp
                where ename = "MILLER"
);

select *
from emp;

select *
from emp
where deptno = (
			select deptno
            from dept
            where loc = 'DALLAS'
);

select *
from emp;

select *
from emp
where mgr =
			(select empno
				from emp
				where ename = 'king');

select *
from tstaff
where (depart, gender) = (
	select depart,gender from tstaff
    where name = '안중근');

#in연산자
select * from emp where sal in (
	select max(sal) from emp group by deptno
    );

#all연산자
select * from emp where sal> (
select max(sal) from emp where deptno = 30
);

select * from emp where sal > all (
	select sal from emp where deptno = 30
);

#any연산자
select * from emp where sal> (
select min(sal) from emp where deptno = 30
);

select * from emp where sal > any (
	select sal from emp where deptno = 30
);
select * from emp where sal > some (
	select sal from emp where deptno = 30
);

#exist
select * from emp where exists(
	select 1 from emp where sal > 2000
); #2000을 넘으면 모든!직원 조회, 조건이참이면

select * from emp where not exists(
	select * from emp where mgr is null
);
#부서별ㄹ 가장급여를 많이 받는 사원들과 동일한급여를 받는사원
select * from emp where sal in (
	select max(sal) from emp group by DEPTNO
); #group by ~별로

#update emp set sal = 1300 where ename = 'miller'

select * from emp where deptno in
			(select distinct daptno
				from emp
					where sal >= 3000);

select * from emp where deptno in
			(select deptno
				from emp
					where JOB = 'MANAGER');
#deptno  부서정보
#EMP 테이블에서 BLAKE와 동일한 부서에 있는 모든 사원 검색
select * from emp where deptno =
			(select deptno
				from emp
					where ENAME = 'BLAKE');

#EMP 테이블에서 평균 급여(SAL) 이상을 받는 모든 사원 검색. 급여가 많은 순으로 출력
select * from emp where sal >=
	(select avg(sal) from emp) order by sal desc;

#EMP 테이블에서 이름에 “T”가 있는 사원이 근무하는 부서에서 있는 모든 사원 검색.
#사원번호 순으로 출력
select * from emp where deptno in (
	select deptno from emp where ename like '%T%')
    order by empno ;

#EMP 테이블에서 근무 지역이 DALLAS인 사원 정보 검색
select * from emp where deptno =
	(select deptno from dept where loc = 'DALLAS');

#EMP 테이블에서 MGR의 이름이 KING인 사원 검색
select * from emp where mgr =
	(select empno from emp where ename = 'king');


