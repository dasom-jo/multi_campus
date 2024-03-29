USE study_db;

-- 조인 (JOIN)

# 크로스 조인
SELECT * FROM tcar;
SELECT * FROM tmaker;

SELECT * FROM tcar, tmaker;
SELECT * FROM tcar CROSS JOIN tmaker;

SELECT *
FROM tcar c, tmaker m
WHERE c.maker = m.maker;

SELECT *
FROM tcar c CROSS JOIN tmaker m 
WHERE c.maker = m.maker;

SELECT *
FROM tcar c
JOIN tmaker m ON c.maker = m.maker;

SELECT *
FROM tcar
JOIN tmaker USING (maker);

SELECT *
FROM tcar
NATURAL JOIN tmaker;

SELECT c.car, m.factory
FROM tcar c
JOIN tmaker m ON c.maker = m.maker;

SELECT CONCAT(e.ename, "의 매니저는 바로!!! ", m.ename)
FROM emp e
JOIN emp m ON e.mgr = m.empno;

-- DEPT 테이블의 LOC가 ‘NEW YORK’ 인 사원의 이름과 급여를 조회
SELECT e.ename, e.sal
FROM emp e
JOIN dept d ON e.deptno = d.deptno
WHERE d.loc = 'NEW YORK';

-- DEPT 테이블의 DNAME 컬럼의 값이 ‘ACCOUNTING’ 인 사원의 이름과 입사일을 조회
SELECT e.ename, e.hiredate
FROM emp e
JOIN dept d ON e.deptno = d.deptno
WHERE dname = 'ACCOUNTING';

-- EMP 테이블의 JOB이 ‘MANAGER’인 사원의 이름, 부서명을 조회
SELECT e.ename, d.dname
FROM emp e
JOIN dept d ON e.deptno = d.deptno
WHERE e.job = 'MANAGER';

-- EMP 테이블와 SALGRADE 테이블을 이용해 각 급여에 해당하는 등급을 매핑하여, 이름, 급여, 등급을 조회
SELECT e.ename, e.sal, s.grade
FROM emp e
JOIN salgrade s ON e.sal >= s.losal AND e.sal <= s.hisal;

SELECT e.ename, e.sal, s.grade
FROM emp e
JOIN salgrade s ON e.sal BETWEEN s.losal AND s.hisal;

-- EMP 테이블에서 MANAGER 가 ‘KING’인 사원들의 이름, 직급을 조회
SELECT e.ename, e.job
FROM emp e
JOIN emp m ON e.mgr = m.empno
WHERE m.ename = 'KING';

-- OUTER JOIN
SELECT * FROM tcar c;
SELECT * FROM tmaker m;

-- ------------------------------------------
SELECT *
FROM tcar c
JOIN tmaker m ON c.maker = m.maker;

SELECT *
FROM tcar c
NATURAL JOIN tmaker m;

SELECT *
FROM tcar c
JOIN tmaker m USING (maker);
-- ------------------------------------------
SELECT *
FROM tcar c
LEFT JOIN tmaker m ON c.maker = m.maker;

SELECT *
FROM tcar c
NATURAL LEFT JOIN tmaker m;

SELECT *
FROM tcar c
LEFT JOIN tmaker m USING (maker);

-- ------------------------------------------
SELECT *
FROM tcar c
RIGHT JOIN tmaker m ON c.maker = m.maker;

SELECT *
FROM tcar c NATURAL
RIGHT JOIN tmaker m;

SELECT *
FROM tcar c
RIGHT JOIN tmaker m USING (maker);

-- -----------------------------------------
SELECT *
FROM tcar c
LEFT JOIN tmaker m ON c.maker = m.maker
	UNION
SELECT *
FROM tcar c
RIGHT JOIN tmaker m ON c.maker = m.maker;

# 다중 조인
SELECT * FROM tcar c
	JOIN tmaker m ON c.maker = m.maker
    JOIN tcity ct ON m.factory = ct.name;
    
-- 사원(EMP) 테이블과 부서(DEPT) 테이블을 조인하여, 사원명, 부서번호,부서명을 출력
-- (사원 테이블에는 부서번호 40번 데이터가 없지만, 40번 부서의 부서명도 함께 출력)
SELECT e.ename, d.deptno, d.dname
FROM emp e
RIGHT JOIN dept d ON e.deptno = d.deptno;

-- NEW YORK에서 근무하고 있는 사원에 대하여 사원명, 업무, 급여, 부서명을 출력
SELECT e.ename, e.job, e.sal, d.dname
FROM emp e
JOIN dept d ON e.deptno = d.deptno
WHERE d.loc = 'NEW YORK';

-- 보너스(comm)가 null 이 아닌 사원에 대하여 사원명, 부서명, 위치를 출력
SELECT e.ename, d.dname, d.loc
FROM emp e
JOIN dept d ON e.deptno = d.deptno
WHERE e.comm IS NOT NULL;

-- 사원명 중 L자가 있는 사원에 대하여 사원명, 업무, 부서명, 위치를 출력
SELECT e.ename, e.job, d.dname, d.loc
FROM emp e
JOIN dept d ON e.deptno = d.deptno
WHERE e.ename LIKE "%L%";

-- 자신의 관리자보다 먼저 입사한 사원에 대하여 이름, 입사일, 관리자 이름, 관리자 입사일을 출력
SELECT
	e.ename `후배 이름`,
    e.hiredate `후배 입사일`,
    m.ename `선배 이름`,
    m.hiredate `선배 입사일`
FROM emp e
JOIN emp m ON e.mgr = m.empno
WHERE e.hiredate < m.hiredate;

INSERT INTO tcity VALUES ('강릉', 1040, 21, 'N', '강원');
SELECT * FROM tcity;

INSERT INTO tcity(region, name, popu, area, metro)
VALUES ('강원', '원주', 55, 867, 'y');

DESC tcity;

INSERT INTO tcity(name, metro, region)
VALUES ('구미', 'N', '경상');

INSERT INTO tcity VALUES ('상주', NULL, NULL, 'N', '경상');

INSERT INTO tcity VALUES
('인천', NULL, NULL, 'Y', '경기'),
('수원', NULL, NULL, 'Y', '경기'),
('충주', NULL, NULL, 'N', '충청'),
('천안', NULL, NULL, 'Y', '충청');

SELECT * FROM tcity;

INSERT INTO tCity (name, area, popu, metro, region) VALUES 
('서울',605,974,'y','경기'), 
('부산',765,342,'y','경상'),
('오산',42,21,'n','경기'),
('전주',205,65,'n','전라'),
('순천',910,27,'n','전라'),
('춘천',1116,27,'n','강원'),
('홍천',1819,7,'n','강원');

INSERT INTO tcity
VALUES ('이천', 461, 21, 'n', '경기'),
('대구', 883, 248, 'y', '경상'),
('영월', 1127, 4, 'n', '강원');

INSERT INTO tCity (name, area, popu, metro, region) 
SELECT factory, 940, 83, 'n', '충청'
FROM tmaker
WHERE maker = '쌍용';

SELECT * FROM tcity;

DELETE FROM tcity WHERE name = '부산';
DELETE FROM tcity WHERE region = '경기';

DELETE FROM tstaff WHERE depart = '영업부';
DELETE FROM tcity WHERE popu > 50;

UPDATE tcity SET popu = 1000, region = '충청' WHERE name = '서울';
UPDATE tcity SET popu = 2 * popu WHERE name = '오산';
