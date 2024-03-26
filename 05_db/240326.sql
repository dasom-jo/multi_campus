SELECT * FROM tcity; # tcity 테이블의 데이터 조회
DESC tcity; # tcity 테이블 구조와 속성 파악

SELECT name AS '도시명', popu AS '인구(만명)'
FROM tcity
WHERE metro = 'n';

SELECT name '도시명', popu '인구(만명)'
FROM tcity
WHERE metro = 'n';

SELECT name '도시명', popu * 10000 '인구(명)'
FROM tcity
WHERE metro = 'y';

SELECT name, area, popu, popu/area '인구밀도'
FROM tcity
WHERE metro = 'n';

SELECT 365*24*60*60;

SELECT concat(name, " ", grade) FROM tstaff;

SELECT DISTINCT region FROM tcity;
SELECT DISTINCT grade FROM tstaff;

SELECT * FROM tcity ORDER BY popu;
SELECT * FROM tcity ORDER BY popu ASC;
SELECT * FROM tcity ORDER BY popu DESC;

SELECT * FROM tcity ORDER BY region, name DESC;
SELECT * FROM tcity ORDER BY 5, 1 DESC;
SELECT name, region FROM tcity ORDER BY 2, 1 DESC;

SELECT name, area, popu, popu/area `인구밀도`
FROM tcity
WHERE metro = 'n'
ORDER BY `인구밀도` DESC;

SELECT * FROM tstaff ORDER BY salary, score DESC;

SELECT `name`, `popu`
FROM tcity
WHERE metro = 'n';

SELECT `name`, `depart`, `grade`, `joindate` AS `join`
FROM tstaff
WHERE `joindate` < '2015-01-01';

SELECT * FROM tstaff WHERE score IS NULL;
SELECT * FROM tstaff WHERE score IS NOT NULL;

DESC tstaff;

SELECT * FROM logic_operation;

SELECT `a`, `b`, `and`
FROM logic_operation
WHERE a = 1 AND b = 1;

SELECT `a`, `b`, `or`
FROM logic_operation
WHERE a = 1 OR b = 1;

SELECT `a`
FROM logic_operation
WHERE NOT a = 1;

SELECT *
FROM tstaff
WHERE salary < 300 AND SCORE >= 60;

SELECT *
FROM tstaff
WHERE
	(depart = "인사과" AND gender = "남") 
	OR
    (depart = "영업부" AND gender = "여");

SELECT *
FROM emp
WHERE ename LIKE '%T%';

SELECT *
FROM emp
WHERE ename NOT LIKE '%T%';

SELECT *
FROM emp
WHERE ename LIKE 'S__T_';

SELECT *
FROM promotion_tbl
WHERE promotion_msg LIKE '%30\%%';

SELECT *
FROM promotion_tbl
WHERE promotion_msg LIKE '%30#%%' ESCAPE '#';

SELECT *
FROM tcity
WHERE popu BETWEEN 50 AND 100;

SELECT *
FROM tcity
WHERE popu >= 50 AND popu <= 100;

SELECT *
FROM tstaff
WHERE name BETWEEN 'ㄱ' AND 'ㅅ';

SELECT *
FROM tstaff
WHERE joindate BETWEEN '20150101' AND '20151231';

SELECT *
FROM tcity
WHERE region IN ('경상', '전라');

SELECT *
FROM tstaff
WHERE grade NOT IN ('이사');

SELECT *
FROM tcity
WHERE area BETWEEN 500 AND 1000;

SELECT *
FROM tcity
WHERE region NOT IN ('경상', '전라');

SELECT *
FROM tstaff
WHERE name LIKE '이%' or name LIKE '안%';

SELECT *
FROM tstaff
WHERE depart IN ('총무부', '영업부');

SELECT *
FROM tstaff
WHERE depart IN ('인사과', '영업부') AND grade = '대리';

SELECT *
FROM tstaff LIMIT 0, 10;

SELECT *
FROM tstaff LIMIT 10, 20;

SELECT *
FROM tstaff
ORDER BY salary DESC
LIMIT 5;

SELECT *
FROM tcity
ORDER BY area DESC
LIMIT 3, 2;

SELECT *
FROM tcity
ORDER BY area DESC
LIMIT 2 OFFSET 3;

SELECT *
FROM tstaff
ORDER BY salary DESC
LIMIT 5 OFFSET 11;

SELECT *, popu*10000/area AS `인구밀도`
FROM tcity
WHERE popu*10000/area < 1000;

SELECT *, popu*10000/area AS `인구밀도`
FROM tcity
ORDER BY `인구밀도` DESC;

SELECT 
	NULL * 1, NULL - 1, NULL + 1, NULL / 1, 1 / NULL,
	NULL * NULL, NULL - NULL, NULL + NULL, NULL / NULL;

SELECT
	10 % 3 `연산자 연산`,
    MOD(10, 3) `함수 연산`;

SELECT
	*, MOD(FLOOR(score),2) `홀짝`
FROM tstaff;

SELECT
	*, ROUND(score,-2)
FROM tstaff;

DESC emp;

SELECT *
FROM emp
WHERE empno % 2 = 1;

SELECT *
FROM emp
WHERE MOD(empno, 2) = 1;

DESC products;

SELECT name, LENGTH(name)
FROM usertbl;

SELECT ename, LENGTH(ename)
FROM emp;

SELECT
	SUBSTRING(hiredate, 1, 4) `입사연도`, SUBSTRING(hiredate, 6, 2) `입사월`
FROM emp;

SELECT CURRENT_DATE(), SUBDATE(CURDATE(), INTERVAL 57 DAY);

SELECT CURRENT_TIME(), CURTIME();

SELECT NOW(), LOCALTIME(), LOCALTIMESTAMP(), CURRENT_TIMESTAMP();

SELECT
	*, DATEDIFF(CURDATE(), joindate) `근무일수`
FROM tstaff;

SELECT
	*,
    YEAR(CURDATE()) - birthyear  - (RIGHT(CURDATE(), 5) < RIGHT(mdate, 5)) `만 나이`
FROM usertbl;

SELECT 
	*,
    IF(salary >= 300, salary*0.3, salary*0.5) `성과금`
FROM tstaff;

SELECT
	*, 
	CASE
		WHEN salary >= 300 THEN salary * 0.3
        ELSE salary * 0.5
	END `성과금`
FROM tstaff;

SELECT
	*,
    CASE grade
		WHEN '사원' THEN 100
        WHEN '대리' THEN 200
        ELSE 300
	END `성과금`
FROM tstaff;