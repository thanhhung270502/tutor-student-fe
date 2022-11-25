CREATE TABLE CUSTOMER (
	Customer_ID CHAR(8) NOT NULL PRIMARY KEY,
    Username VARCHAR(10) unique NOT NULL,
    Password VARCHAR(10) NOT NULL, 
    Name VARCHAR(25) NOT NULL,
    Birthday DATE NOT NULL,
    Gender CHAR NOT NULL,
    Address VARCHAR(20) NOT NULL,
    Phone CHAR(10) UNIQUE NOT NULL,
    Email VARCHAR(15) UNIQUE,
    Created_time DATE NOT NULL,
    Total_point BIGINT DEFAULT(0) 
);

CREATE TABLE ADMIN (
	Admin_ID CHAR(8) NOT NULL PRIMARY KEY,
    Username VARCHAR(10) UNIQUE NOT NULL,
    Password VARCHAR(10) NOT NULL, 
    Name VARCHAR(25) NOT NULL,
    Birthday DATE NOT NULL,
    Gender CHAR NOT NULL,
    Address VARCHAR(20) NOT NULL,
    Phone CHAR(10) UNIQUE NOT NULL,
    Email VARCHAR(15) UNIQUE,
    Created_time DATE NOT NULL,
    Certificate TEXT
);

CREATE TABLE C_ORDER (
	Invoice_num CHAR(8) NOT NULL PRIMARY KEY,
    Pay_time DATETIME NOT NULL,
    Total_price FLOAT NOT NULL
);

CREATE TABLE VOUCHER (
		Voucher_ID CHAR(8) NOT NULL PRIMARY KEY,
		S_time DATETIME NOT NULL, 
		E_time DATETIME,
		Gender char, 
		Order_price DOUBLE,
		Total_point BIGINT,
		Description TEXT,
		Discount_percent INT NOT NULL CHECK (discount_percent > 0 AND discount_percent <= 100)
);

CREATE TABLE APPLIED (
		Voucher_ID CHAR(8) NOT NULL PRIMARY KEY REFERENCES VOUCHER(Voucher_ID),
		Invoice_num CHAR(8) NOT NULL REFERENCES C_ORDER(Invoice_num),
		IsApplied BOOL NOT NULL
);

CREATE TABLE FOOD (
		Food_ID CHAR(8) NOT NULL PRIMARY KEY,
		Name VARCHAR(10) NOT NULL,
		Size CHAR NOT NULL CHECK (Size='S' OR Size='M' OR Size='L')
);

CREATE TABLE FOOD_ORDER (
		Food_ID CHAR(8) NOT NULL REFERENCES FOOD(Food_ID),
		Invoice_num CHAR(8) NOT NULL REFERENCES C_ORDER(Invoice_num),
		Amount INT NOT NULL
);

CREATE TABLE THEATER (
		Branch_code CHAR(8) NOT NULL PRIMARY KEY,
		Name VARCHAR(10) NOT NULL UNIQUE,
		Address VARCHAR(10) NOT NULL
);

CREATE TABLE ROOM (
		Branch_code CHAR(8) NOT NULL REFERENCES THEATER(Branch_code), 
		Number CHAR(3) NOT NULL UNIQUE,
		State BOOL NOT NULL, 
		PRIMARY KEY (Branch_code, Number)
);

CREATE TABLE SEAT (
		Branch_code CHAR(8) NOT NULL REFERENCES ROOM(Branch_code),
		Number CHAR(3) NOT NULL REFERENCES ROOM(Number),
		Row_index CHAR NOT NULL , 
		Col_index INT NOT NULL, 
		Type CHAR NOT NULL CHECK (Type='C' OR Type='S'), 
		State BOOL NOT NULL,
		PRIMARY KEY(Branch_code, Number, Row_index, Col_index)
);

CREATE TABLE TICKET (
	Ticket_ID CHAR(8) NOT NULL PRIMARY KEY,
    Invoice_num CHAR(8) NOT NULL	,
    Branch_code CHAR(8) NOT NULL,
    Room_number CHAR(3) NOT NULL,
    Row_index INT,
    Col_index INT,
    Show_ID CHAR(8) NOT NULL
);

CREATE TABLE MOVIE_SHOW (
	Show_ID			CHAR(8)			NOT NULL,
    Date			DATE			NOT NULL,
    Time			TIME 			NOT NULL,
    Admin_ID		CHAR(8)			NOT NULL		REFERENCES ADMIN(Admin_ID),
    PRIMARY KEY		(Show_ID)
);

CREATE TABLE MOVIE (
	Movie_code		CHAR(8)			NOT NULL,
    Director		VARCHAR(30)		NOT NULL,
    Release_date	DATE,
    Description		TEXT			NOT NULL,
    Age_limit		INT,
    CHECK			(Age_limit >= 0),
    Rating			INT,
    Time_limit		INT,
    CHECK			(Time_limit >= 0),
    Name			VARCHAR(50)		NOT NULL,
    PRIMARY KEY		(Movie_code)
);


CREATE TABLE SCHEDULED (
	Show_ID			CHAR(8)			NOT NULL	REFERENCES MOVIE_SHOW(Show_ID),
    Branch_code		CHAR(8)			NOT NULL,
    Room_number		CHAR(3)			NOT NULL,
    Movie_code		CHAR(8)			NOT NULL	REFERENCES MOVIE(Movie_code),
    FOREIGN KEY		(Branch_code, Room_number)	REFERENCES ROOM(Branch_code, Number),
    PRIMARY KEY (Show_ID, Branch_code, Room_number)
);

CREATE TABLE MOVIE_CAST (
	Movie_code		CHAR(8)			NOT NULL,
    Cast			VARCHAR(30)		NOT NULL,
    FOREIGN KEY 	(Movie_code) 				REFERENCES MOVIE(Movie_code),
    PRIMARY KEY (Movie_code, Cast)
);

CREATE TABLE MOVIE_FORMAT (
	Movie_code		CHAR(8)			NOT NULL	REFERENCES MOVIE(Movie_code),
    Format			VARCHAR(20)		NOT NULL,
    PRIMARY KEY (Movie_code, Format)
);

CREATE TABLE MOVIE_GENRES (
	Movie_code		CHAR(8)			NOT NULL	REFERENCES MOVIE(Movie_code),
    Genres			VARCHAR(20)		NOT NULL,
    PRIMARY KEY (Movie_code, Genres)
);

CREATE TABLE MOVIE_LANGUAGE (
	Movie_code		CHAR(8)			NOT NULL	REFERENCES MOVIE(Movie_code),
    Language		VARCHAR(10)		NOT NULL,
    PRIMARY KEY (Movie_code, Language)
);