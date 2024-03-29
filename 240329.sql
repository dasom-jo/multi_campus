use study_db;
create table students(
	id int not null auto_increment primary key,
    name varchar(20),
    birthday date,
    address varchar(255),
	mbti char(4)
);

insert into students values
(null,'조다솜','2000-02-16','의정부시','istj'),
(null,'노효민','2000-05-19','구미시','istj'),
(null,'이은수','2000-12-22','수원시','infp'),
(null, "이가영", "1998-01-12", "수원시", "intp");

#drop table students; 
delete from students where id ='3';

insert into students values
(null,'이은수','2000-12-22','수원시','infp');
#은수님원래 아이디 3이었는데 지웟다가 키니깐 5번됨
#3번은 앞으로 비어질예정
#실수로은수님 여러명만들면 
delete from students where id>5;

insert into students 
values (null,'노성현','2000-04-19','나주시','intp');
#아이디 21번됨

delete from students where id >3;

alter table students auto_increment = 1;
#테이블변경할때        초기화:번호 1번부터 재시작
#이거안쓰면 다음 아이이디 22번

insert into students values
(null,'이은수','2000-12-22','수원시','infp');
insert into students 
values (null,'노성현','2000-04-19','나주시','intp');

select *  from students;
#삭제-auto_increment -입력

#컬럼 추가
alter table students add column gender enum('남','여') default '여';
select *  from students;
#삭제
#alter table students drop gender;

update students set gender = '남' where id = 4;
insert into students values
	(null,'최인규','20000204','서울시','enfp',null);
update students set gender = '남' where id = 6;

#테이블 제약조건
create table tNullale(
	name char(10) not null,
    age int
);
select * from tNullale;
insert into tNullale(name,age)value('흥부',36);
#됨 나이는 null
insert into tNullale(name)value('놀부');
# 안됨 기본값지정안한 이름이없음
#insert into tNullale(age) value(44);

create table tcitydefault(
	name char(10) primary key,
    area int null,
    popu int null,
    metro char(1) default 'n'not null,
    region char(5) not null
    );

select * from tcitydefault;
insert into tcitydefault(name,area,popu,region)
values ('진주',721,34,'경상');

select * from tcitydefault;
insert into tcitydefault(name,area,popu,metro,region)
values ('인천',1063,295,'y','경상');

select * from tcitydefault;
#default 기본값이 잇을경우만
insert into tcitydefault
	values ('강릉',131,35,default,'강원');


#테이블생성문제
create table tStaffDefault(
	depart enum('영업부', '총무부', '인사과'),
    level varchar(10) default '수습',
    sal int default 280 check(sal > 0),
    achiev float default 1.0,
    gender enum('남','여') default '여'
);
desc tStaffDefault;
select * from tStaffDefault;
insert into tStaffDefault values 
	('영업부','계장',300,5.3,'남'),
	('총무부',default,100,0.7,'여'),
    ('인사과','과장',700,10.89,default);

alter table tStaffDefault add column id int not null auto_increment primary key;

delete from tStaffDefault where id >3;


alter table tStaffDefault add column birthday date not null default '1900-01-01';
insert into tStaffDefault values
	('영업부',default,default,default,default,default,'2016-12-16');

select * from tStaffDefault;

select * from emp;
create  table tprimary(
	islonghair bool,
    isglasses bool,
    isstudent bool,
    constraint ct_pk primary key(islonghair,isglasses,isstudent)
    );
    
desc tprimary;
insert into tprimary values (0,0,0);
insert into tprimary values (0,0,1);
insert into tprimary values (0,1,0);
insert into tprimary values (0,1,1);
insert into tprimary values (1,0,0);
insert into tprimary values (1,0,1);
insert into tprimary values (1,1,0);
insert into tprimary values (1,1,1);

create table celebrities(	
	name varchar(10) primary key,
	job varchar(10)
);

insert into celebrities values('석구','배우');
insert into celebrities values('지은','배우');
insert into celebrities values('흥민','운동선수');
insert into celebrities values('민호','예능인');
#중복되서 안들어감,고유한 식별키르르 기본키로 지정해서 
insert into celebrities values('민호','가수');

select * from celebrities;

#복합키(compokey) 만드는법 constraint 선택사항 
create table tstaffcompokey(	
	name char(15) not null ,
    depart char(10) not null ,
    gender char(3) not null ,
    joindate date not null,
    grade char(10) not null,
    salary int not null,
    score decimal(5,2) default null,
    primary key(name,depart,gender),
    constraint uni unique(score)
);
desc tstaffcompokey;
select * from tstaffcompokey;
drop table tstaffcompokey;
#제약조건 추가 수정삭제
alter table tstaffcompokey drop constraint uni;
desc tstaffcompokey;

#auto_increment
create table tsale (
	saleno int auto_increment primary key,
    customer varchar(10),
    product varchar(30)
    );
insert into  tsale(customer,product)
values ('단군','지팡이'),('고주몽','고등어');
select * from tsale;
delete from tsale where saleno = 2;
select * from tsale;
insert into  tsale(customer,product)
values ('박혁거세','계란');
select * from tsale;
insert into  tsale
values (2,'박혁거세','후라이');

alter table tsale auto_increment = 100;
insert into  tsale(customer,product)
values ('왕건','너구리');
insert into  tsale(customer,product)
values ('세종','고기');
select * from tsale;

select last_insesrt_id();
#update ??? 

#@
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

select * from tEmployee;
select * from  tProject;

select * 
from tProject p
join tEmployee e on e.name = p.employee
where e.addr = '대구시';

select * 
from tEmployee e
join tProject p on e.name = p.employee
where e.addr = '대구시';

insert into tProject value(7,'조이','원자재매입',900);

delete from tEmployee where name = '아이린';
#무결성 참조가 사라짐 참조하기 애매
select * from tEmployee;
select * from  tProject;

drop table tEmployee;
drop table tProject;

#다시~
CREATE TABLE tEmployee(
	name CHAR(10) PRIMARY KEY,
	salary INT NOT NULL,
	addr VARCHAR(30) NOT NULL
);
INSERT INTO tEmployee VALUES ('아이린', 650, '대구시');
INSERT INTO tEmployee VALUES ('슬기', 480, '안산시');
INSERT INTO tEmployee VALUES ('웬디', 625, '서울시');
#관계를 맻어줌
CREATE TABLE tProject(
	projectID INT PRIMARY KEY,
	employee CHAR(10) NOT NULL,
	project VARCHAR(30) NOT NULL,
	cost INT,
    constraint fk_emp foreign key(employee) 
		references tEmployee (name)
);
INSERT INTO tProject VALUES (1, '아이린', '홍콩 수출건', 800);
INSERT INTO tProject VALUES (2, '아이린', 'TV 광고건', 3400);
INSERT INTO tProject VALUES (3, '아이린', '매출분석건', 200);
INSERT INTO tProject VALUES (4, '슬기', '경영 혁신안 작성', 120);
INSERT INTO tProject VALUES (5, '슬기', '대리점 계획', 85);
INSERT INTO tProject VALUES (6, '웬디', '노조 협상건', 24);

select * from tEmployee;
select * from  tProject;
#연결하고 다시 추가및 삭제하면???
#에러남 add키 조건에 위반 티임플로이에 추가하셈 
insert into tProject value(7,'조이','원자재매입',900);
#에러남 아이린이 작업하는 데이터를 다른이름으로바꾼후
delete from tEmployee where name = '아이린';




