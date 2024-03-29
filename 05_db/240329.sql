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

