USE study_db;
DROP TABLE students;
CREATE TABLE students(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(20),
    birthday DATE,
    address VARCHAR(255),
    mbti CHAR(4)
);
SELECT * FROM students;

INSERT INTO students VALUES
(NULL, "조다솜", "2000-02-16", "의정부시", "ISTJ"),
(NULL, "노효민", "2000-05-19", "구미시", "ISTJ"),
(NULL, "이은수", "2000-12-22", "수원시", "INFP");

SELECT * FROM students;

INSERT INTO students VALUES
(NULL, "이은수", "2000-12-22", "수원시", "INFP");

SELECT * FROM students;

DELETE FROM students WHERE id >= 3;

INSERT INTO students VALUES
(NULL, "이은수", "2000-12-22", "수원시", "INFP");

SELECT * FROM students;

DELETE FROM students WHERE id > 4;

ALTER TABLE students AUTO_INCREMENT=1;

INSERT INTO students VALUES
(NULL, "이은수", "2000-12-22", "수원시", "INFP");

INSERT INTO students
VALUES (NULL, '노성현', '2000-04-19', '나주시', "INTP");

INSERT INTO students
VALUES (NULL, '박소희', '2000-11-21', '시흥시', 'ISTP');

SELECT * FROM students;

# 컬럼 추가
ALTER TABLE students ADD COLUMN gender ENUM('남', '여');
SELECT * FROM students;
ALTER TABLE students DROP gender;
SELECT * FROM students;
ALTER TABLE students ADD COLUMN gender ENUM('남', '여') NOT NULL DEFAULT '여';
SELECT * FROM students;
UPDATE students SET gender = '남' WHERE id = 4;
SELECT * FROM students;
INSERT INTO students(`name`, `birthday`, `address`, `mbti`)
VALUES ('아이유', '20000204', '서울시', 'ENFP');
SELECT * FROM students;


CREATE TABLE tNullable (
	name CHAR(10) NOT NULL,
    age INT
);
SELECT * FROM tNullable;
INSERT INTO tNullable(name, age) VALUE ('흥부', 36);
SELECT * FROM tNullable;
INSERT INTO tNullable(name) VALUE ('놀부');
SELECT * FROM tNullable;
-- INSERT INTO tNullable(age) VALUE (44);


CREATE TABLE tCityDefault(
	name CHAR(10) PRIMARY KEY,
    area INT NULL,
    popu INT NULL,
    metro CHAR(1) DEFAULT 'n' NOT NULL,
    region CHAR(5) NOT NULL
);
SELECT * FROM tCityDefault;
DESC tCityDefault;
INSERT INTO tCityDefault(name, area, popu, region)
VALUES ('진주', 712, 34, '경상');
SELECT * FROM tCityDefault;
INSERT INTO tCityDefault(name, area, popu, metro, region)
VALUES ('인천', 1063, 295, 'y', '경기');
SELECT * FROM tCityDefault;
INSERT INTO tCityDefault VALUE ('강릉', 131, 24, DEFAULT ,'강원');
SELECT * FROM tCityDefault;

CREATE TABLE tstaffDefault(
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
    depart ENUM('영업부', '총무부', '인사과') NOT NULL DEFAULT '영업부',
    gender ENUM('남', '여') NOT NULL DEFAULT '여',
    joindate DATE NOT NULL DEFAULT (CURDATE()),
    grade CHAR(10) NOT NULL DEFAULT '수습',
    salary INT NOT NULL DEFAULT 280 CHECK(salary > 0),
    score FLOAT NOT NULL DEFAULT 1.0
);
SELECT * FROM tstaffDefault;
DROP TABLE tstaffDefault;
SELECT * FROM tstaffDefault;
INSERT INTO tstaffDefault(NAME) VALUES ('홍길동');

SELECT * FROM emp;

CREATE TABLE tPrimary (
	isLongHair BOOL,
    isGlasses BOOL,
    isStudent BOOL,
    CONSTRAINT ct_pk PRIMARY KEY(isLongHair, isGlasses, isStudent)
);

DESC tPrimary;
INSERT INTO tPrimary VALUES (0,0,0);
INSERT INTO tPrimary VALUES (0,0,1);
INSERT INTO tPrimary VALUES (0,1,0);
INSERT INTO tPrimary VALUES (0,1,1);
INSERT INTO tPrimary VALUES (1,0,0);
INSERT INTO tPrimary VALUES (1,0,1);
INSERT INTO tPrimary VALUES (1,1,0);
INSERT INTO tPrimary VALUES (1,1,1);

SELECT * FROM tPrimary;

CREATE TABLE celebrities(
	name VARCHAR(10) PRIMARY KEY,
    job VARCHAR(10)
);

SELECT * FROM celebrities;

INSERT INTO celebrities VALUES ('석구', '배우'); -- 손석구
INSERT INTO celebrities VALUES ('지은', '배우'); -- 아이유
INSERT INTO celebrities VALUES ('흥민', '운동선수'); -- 손흥민
INSERT INTO celebrities VALUES ('민호', '예능인'); -- 붐
INSERT INTO celebrities VALUES ('민호', '가수'); -- 샤이니 민호

DESC tstaff;

CREATE TABLE tStaffCompokey (
	name CHAR(15),
	depart CHAR(10),
	gender CHAR(3),
	joindate DATE not null,
	grade CHAR(10) not null,
	salary INT not null,
	score DECIMAL(5,2) not null,
	PRIMARY KEY (name, depart, gender)
);
DESC tStaffCompokey;
DROP TABLE tStaffCompokey;

CREATE TABLE tSale (
	saleno INT AUTO_INCREMENT PRIMARY KEY,
    customer VARCHAR(10),
    product VARCHAR(30)
);

INSERT INTO tSale(customer, product)
VALUES ('단군', '지팡이'), ('고주몽', '고등어');

SELECT * FROM tSale;
DELETE FROM tSale WHERE saleno = 2;

INSERT INTO tSale(customer, product)
VALUES ('박혁거세', '계란');
SELECT * FROM tSale;

INSERT INTO tSale
VALUES (2, '고주몽', '고등어');

SELECT * FROM tSale;

ALTER TABLE tSale AUTO_INCREMENT = 100;

INSERT INTO tSale(customer, product)
VALUES ('왕건', '너구리');
SELECT LAST_INSERT_ID();
SELECT * FROM tSale;

UPDATE tSale Set product = "짜파게티" WHERE saleno = LAST_INSERT_ID();
SELECT * FROM tSale;

CREATE TABLE tEmployee(
	name CHAR(10) PRIMARY KEY,
	salary INT NOT NULL,
	addr VARCHAR(30) NOT NULL
);
INSERT INTO tEmployee VALUES ('아이린', 650, '대구시');
INSERT INTO tEmployee VALUES ('슬기', 480, '안산시');
INSERT INTO tEmployee VALUES ('웬디', 625, '서울시');

CREATE TABLE tProject(
	projectID INT PRIMARY KEY,
	employee CHAR(10) NOT NULL,
	project VARCHAR(30) NOT NULL,
	cost INT
);
INSERT INTO tProject VALUES (1, '아이린', '홍콩 수출건', 800);
INSERT INTO tProject VALUES (2, '아이린', 'TV 광고건', 3400);
INSERT INTO tProject VALUES (3, '아이린', '매출분석건', 200);
INSERT INTO tProject VALUES (4, '슬기', '경영 혁신안 작성', 120);
INSERT INTO tProject VALUES (5, '슬기', '대리점 계획', 85);
INSERT INTO tProject VALUES (6, '웬디', '노조 협상건', 24);

SELECT * FROM tEmployee;
SELECT * FROM tProject;

SELECT *
FROM tEmployee e
JOIN tProject p ON e.name = p.employee
WHERE e.addr = '대구시';

INSERT INTO tProject VALUE (7, '조이', '원자재 매입', 900);
DELETE FROM tEmployee WHERE name = '아이린';

DROP TABLE tProject;
DROP TABLE tEmployee;

CREATE TABLE tEmployee(
	name CHAR(10) PRIMARY KEY,
	salary INT NOT NULL,
	addr VARCHAR(30) NOT NULL
);

INSERT INTO tEmployee VALUES ('아이린', 650, '대구시');
INSERT INTO tEmployee VALUES ('슬기', 480, '안산시');
INSERT INTO tEmployee VALUES ('웬디', 625, '서울시');

CREATE TABLE tProject(
	projectID INT PRIMARY KEY,
	employee CHAR(10) NOT NULL,
	project VARCHAR(30) NOT NULL,
	cost INT,
    CONSTRAINT FK_employee FOREIGN KEY(employee) REFERENCES tEmployee(name)
);

INSERT INTO tProject VALUES (1, '아이린', '홍콩 수출건', 800);
INSERT INTO tProject VALUES (2, '아이린', 'TV 광고건', 3400);
INSERT INTO tProject VALUES (3, '아이린', '매출분석건', 200);
INSERT INTO tProject VALUES (4, '슬기', '경영 혁신안 작성', 120);
INSERT INTO tProject VALUES (5, '슬기', '대리점 계획', 85);
INSERT INTO tProject VALUES (6, '웬디', '노조 협상건', 24);

SELECT * FROM tEmployee;
SELECT * FROM tProject;

INSERT INTO tProject VALUE (7, '조이', '원자재 매입', 900);
DELETE FROM tEmployee WHERE name = '아이린';
