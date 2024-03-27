USE study_db;

SELECT
	*,
    IF(score IS NULL, 0, score) AS `NEW_SCORE`
FROM tstaff;

SELECT
	*,
    CASE
		WHEN score IS NULL THEN 0
        ELSE score
    END AS `NEW_SCORE`
FROM tstaff;

SELECT
	*,
    CASE gender
        WHEN '남' THEN 1
        WHEN '여' THEN 2
        ELSE '알수없음'
	END `new_gender`
FROM tstaff;

SELECT *
FROM tstaff
WHERE
	CASE grade
		WHEN '사원' THEN 1
        WHEN '대리' THEN 2
        WHEN '차장' THEN 3
        WHEN '과장' THEN 4
        WHEN '부장' THEN 5
        WHEN '이사' THEN 6
        ELSE NULL
    END = 6;

SELECT *
FROM tstaff
ORDER BY
	CASE grade
		WHEN '사원' THEN 1
        WHEN '대리' THEN 2
        WHEN '차장' THEN 3
        WHEN '과장' THEN 4
        WHEN '부장' THEN 5
        WHEN '이사' THEN 6
        ELSE NULL
    END;

SELECT grade, AVG(salary) AS `직급별 평균 임금`
FROM tstaff
WHERE grade NOT IN ('이사')
GROUP BY grade
ORDER BY `직급별 평균 임금`;

SELECT depart, gender, COUNT(*)
FROM tstaff
GROUP BY depart, gender
ORDER BY depart, gender;

SELECT depart, gender, MAX(salary)
FROM tstaff
GROUP BY depart, gender
ORDER BY depart, gender;

SELECT * FROM tstaff WHERE depart = '영업부' ORDER BY score;

SELECT COUNT(DISTINCT grade) FROM tstaff;

SELECT COUNT(*) FROM tstaff WHERE score IS NULL;
SELECT COUNT(*) - COUNT(score) FROM tstaff;

SELECT AVG(salary) FROM tstaff WHERE depart = '인사과';

SELECT
	SUM(popu) `인구총합`,
    AVG(popu) `인구평균`,
    MIN(area) `최소면적`,
    MAX(area) `최대면적`
FROM tcity;

SELECT
	COUNT(*) AS `인원수`,
	MAX(sal) AS `최대 급여`,
	MIN(sal) AS `최소 급여`,
	SUM(sal) AS `급여의 합`
FROM emp;

SELECT
    job,
    MAX(sal)  AS `업무별 최대 급여`,
    MIN(sal)  AS `업무별 최소 급여`,
    SUM(sal)  AS `업무별 급여의 합`
FROM emp
GROUP BY job;

SELECT
    job,
    COUNT(*) AS `업무별 인원수`
FROM emp
GROUP BY job;

SELECT (MAX(sal) - MIN(sal)) AS `최고 급여와 최소 급여의 차`
FROM emp;

# 2개 이상의 SELECT

# 1. 집합 연산자
SELECT * FROM dept;
SELECT * FROM emp ORDER BY deptno DESC;

SELECT deptno FROM dept; # 4개
SELECT deptno FROM emp; # 14

SELECT deptno FROM dept
UNION
SELECT deptno FROM emp; # 4개

SELECT deptno FROM dept
UNION ALL
SELECT deptno FROM emp; # 18개

SELECT deptno FROM dept
INTERSECT
SELECT deptno FROM emp; # 3개

SELECT deptno FROM dept
EXCEPT
SELECT deptno FROM emp; # 1개 (순서에 유의)

# 서브쿼리
SELECT dname
FROM dept
WHERE deptno = (
	SELECT deptno
	FROM emp
    WHERE ename = "SMITH"
);

SELECT MAX(popu) FROM tcity;

-- EMP 테이블을 이용해 평균 급여보다 더 많은 급여를 받는 사원을 검색
SELECT * FROM emp WHERE sal > (
	SELECT AVG(sal) FROM emp
);

-- EMP 테이블에서 MILLER와 같은 부서(deptno)에서 근무하는 사원을 검색
SELECT * FROM emp WHERE deptno = (
	SELECT deptno FROM emp WHERE ename = 'MILLER'
);

-- EMP 테이블에서 MILLER와 동일한 job을 가진 사원을 검색
SELECT * FROM emp WHERE job = (
	SELECT job FROM emp WHERE ename = 'MILLER'
);

-- EMP 테이블에서 MILLER의 급여(SAL)와 동일하거나 더 많이 받는 사원을 검색
SELECT * FROM emp WHERE sal >= (
	SELECT sal FROM emp WHERE ename = 'MILLER'
);

-- EMP 테이블에서 deptno을 이용해  LOC가 DALLAS인 사원 검색 (DEPT 테이블 활용)
SELECT * FROM emp WHERE deptno = (
	SELECT deptno FROM dept WHERE loc = 'DALLAS'
);

-- EMP 테이블에서 직속상관(MGR)의 이름이 KING인 사원 검색
SELECT * FROM emp WHERE mgr = (
	SELECT empno FROM emp WHERE ename = 'king'
);

SELECT * FROM tstaff WHERE (depart, gender) = ('인사과', '남');
SELECT depart, gender FROM tstaff WHERE name = '안중근';

SELECT * FROM tstaff WHERE (depart, gender) = (
	SELECT depart, gender FROM tstaff WHERE name = '안중근'
);

SELECT * FROM emp WHERE sal IN (
	SELECT MAX(sal) FROM emp GROUP BY deptno
);

SELECT * FROM emp WHERE sal > (
	SELECT MAX(sal) FROM emp WHERE deptno = 30
);

SELECT * FROM emp WHERE sal > ALL (
	SELECT sal FROM emp WHERE deptno = 30
);

SELECT * FROM emp WHERE sal > (
	SELECT MIN(sal) FROM emp WHERE deptno = 30
);

SELECT * FROM emp WHERE sal > ANY (
	SELECT sal FROM emp WHERE deptno = 30
);

SELECT * FROM emp WHERE EXISTS (
	SELECT * FROM emp WHERE sal > 10000
);

-- EMP 테이블에서 부서별로 가장 급여를 많이 받는 사원들과 동일한 급여를 받는 사원 검색
SELECT * FROM emp WHERE sal IN (SELECT MAX(sal) FROM emp GROUP BY deptno);

-- EMP 테이블에서 SAL를 3,000 이상 받는 사원이 소속된 부서와 동일한 부서에서 근무하는 사원 검색
SELECT * FROM emp WHERE deptno IN (
	SELECT DISTINCT deptno FROM emp WHERE sal >= 3000
);

-- EMP 테이블에서 JOB이 MANAGER인 사람이 속한 부서 정보 검색
SELECT * FROM dept WHERE deptno IN (
	SELECT deptno FROM emp WHERE job = 'MANAGER'
);

-- EMP 테이블에서 BLAKE와 동일한 부서에 있는 모든 사원 검색
SELECT * FROM emp WHERE deptno = (
	SELECT deptno FROM emp WHERE ename = 'BLAKE'
);

-- EMP 테이블에서 평균 급여(SAL) 이상을 받는 모든 사원 검색. 급여가 많은 순으로 출력
SELECT * FROM emp WHERE sal >= (
	SELECT AVG(sal) FROM emp
) ORDER BY sal DESC;

-- EMP 테이블에서 이름에 “T”가 있는 사원이 근무하는 부서에 있는 모든 사원 검색. 사원번호 순으로 출력
SELECT * FROM emp WHERE deptno IN (
	SELECT deptno FROM emp WHERE ename LIKE '%T%'
) ORDER BY empno;

-- EMP 테이블에서 근무 지역이 DALLAS인 사원 정보 검색
SELECT * FROM emp WHERE deptno IN (
	SELECT deptno FROM dept WHERE loc = 'DALLAS'
);