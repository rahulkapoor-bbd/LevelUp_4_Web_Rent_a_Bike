CREATE DATABASE BikeRental;

USE BikeRental;

-- table creation
CREATE TABLE Bike (
bikeId INT AUTO_INCREMENT PRIMARY KEY,
typeId INT,
statusId INT,
userId INT,
dailyRate DECIMAL(10, 2)
);

CREATE TABLE BikeType (
typeId INT AUTO_INCREMENT PRIMARY KEY,
description VARCHAR(50)
);

CREATE TABLE BikeStatus (
statusId INT AUTO_INCREMENT PRIMARY KEY,
description VARCHAR(50)
);

CREATE TABLE Rentals (
rentalId INT AUTO_INCREMENT PRIMARY KEY,
bikeId INT,
userId INT,
rentalStart DATE,
rentalEnd DATE
);

CREATE TABLE Users (
userId INT AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(50),
lastname VARCHAR(50),
emailAddress VARCHAR(100),
[password] VARCHAR(256),
passwordSalt VARCHAR(64)
);

-- FK constraints
ALTER TABLE Bike
ADD CONSTRAINT FK_Bike_BikeStatus
FOREIGN KEY (statusId)
REFERENCES BikeStatus(statusId);

ALTER TABLE Bike
ADD CONSTRAINT FK_Bike_BikeType
FOREIGN KEY (typeId)
REFERENCES BikeType(typeId);

ALTER TABLE Bike
ADD CONSTRAINT FK_Bike_BikeOwner
FOREIGN KEY (userId)
REFERENCES Users(userId);

ALTER TABLE Rentals
ADD CONSTRAINT FK_Rentals_Bike
FOREIGN KEY(bikeId)
REFERENCES Bike(bikeId);

ALTER TABLE Rentals
ADD CONSTRAINT FK_Rentals_Users
FOREIGN KEY(userId)
REFERENCES Users(userId);

-- sample data

-- Insert BikeType data
INSERT INTO BikeType (description) VALUES ('Mountain Bike');
INSERT INTO BikeType (description) VALUES ('Road Bike');
INSERT INTO BikeType (description) VALUES ('Hybrid Bike');
INSERT INTO BikeType (description) VALUES ('Gravel Bike');

-- Insert BikeStatus data
INSERT INTO BikeStatus (description) VALUES ('Available');
INSERT INTO BikeStatus (description) VALUES ('Rented');
INSERT INTO BikeStatus (description) VALUES ('Under Maintenance');

-- Insert Users data
INSERT INTO Users (firstname, lastname, emailAddress) VALUES ('John', 'Doe', 'johndoe@gmail.com');
INSERT INTO Users (firstname, lastname, emailAddress) VALUES ('Jane', 'Doe', 'janedoe@yahoo.com');
INSERT INTO Users (firstname, lastname, emailAddress) VALUES ('Bob', 'Smith', 'bobsmith@hotmail.com');

-- Insert Bike data
INSERT INTO Bike (typeId, statusId, dailyRate, userId) VALUES (1, 1, 25.00, 1);
INSERT INTO Bike (typeId, statusId, dailyRate, userId) VALUES (1, 2, 25.00, 2);
INSERT INTO Bike (typeId, statusId, dailyRate, userId) VALUES (2, 1, 30.00, 1);
INSERT INTO Bike (typeId, statusId, dailyRate, userId) VALUES (2, 3, 30.00, 3);
INSERT INTO Bike (typeId, statusId, dailyRate, userId) VALUES (3, 1, 20.00, 2);

-- Insert Rentals data
INSERT INTO Rentals (bikeId, userId, rentalStart, rentalEnd) VALUES (1, 1, '2023-05-01', '2023-05-03');
INSERT INTO Rentals (bikeId, userId, rentalStart, rentalEnd) VALUES (2, 2, '2023-05-02', '2023-05-04');
INSERT INTO Rentals (bikeId, userId, rentalStart, rentalEnd) VALUES (3, 1, '2023-05-05', '2023-05-08');
INSERT INTO Rentals (bikeId, userId, rentalStart, rentalEnd) VALUES (4, 3, '2023-05-06', '2023-05-09');