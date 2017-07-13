DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	Item_id int NOT NULL,
	Product_Name varchar(250) NOT NULL,
	Department_Name varchar(250) NOT NULL,
	Price DECIMAL (4,2) NOT NULL,
	Stock_Quantity int NOT NULL
);

INSERT INTO products (Item_id,Product_Name,Department_Name,Price,Stock_Quantity) VALUES (
	1,
	"Apple Headphones",
	"Electronics",
	19.99,
	5900
);

INSERT INTO products (Item_id,Product_Name,Department_Name,Price,Stock_Quantity) VALUES (
	2,
	"Nike Socks",
	"Mens Wearhouse",
	5.59,
	2450
);

INSERT INTO products (Item_id,Product_Name,Department_Name,Price,Stock_Quantity) VALUES (
	3,
	"Computer Mouse",
	"Electronics",
	55.89,
	379
);

INSERT INTO products (Item_id,Product_Name,Department_Name,Price,Stock_Quantity) VALUES (
	4, 
	"Hydro Flask",
	"Outdoors",
	45.52,
	241
);

INSERT INTO products (Item_id,Product_Name,Department_Name,Price,Stock_Quantity) VALUES (
	5,
	"Pet Shark",
	"Animal Department",
	25.99,
	852
);

INSERT INTO products (Item_id,Product_Name,Department_Name,Price,Stock_Quantity) VALUES (
	6,
	"Girl Shoes",
	"Womens Wearhouse",
	29.99,
	899
);

INSERT INTO products (Item_id,Product_Name,Department_Name,Price,Stock_Quantity) VALUES (
	7,
	"Star Craft II",
	"Gaming",
	20.00,
	54
);

INSERT INTO products (Item_id,Product_Name,Department_Name,Price,Stock_Quantity) VALUES (
	8,
	"Call of Duty WWII",
	"Gaming",
	64.9,
	85500
);

INSERT INTO products (Item_id,Product_Name,Department_Name,Price,Stock_Quantity) VALUES (
	9,
	"AR-15",
	"Outdoors",
	950.00,
	55
);

INSERT INTO products (Item_id,Product_Name,Department_Name,Price,Stock_Quantity) VALUES (
	10,
	"Weights",
	"Outdoors",
	40.42,
	165
);




