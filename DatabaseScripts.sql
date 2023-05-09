use master;

CREATE DATABASE BikeRental;
GO

USE BikeRental;
GO

-- table creation
CREATE TABLE Bike (
    bikeId INT IDENTITY(1,1) PRIMARY KEY CLUSTERED,
    typeId INT,
    statusId INT,
    dailyRate MONEY
);

CREATE TABLE BikeType (
    typeId INT IDENTITY(1,1) PRIMARY KEY CLUSTERED,
    description VARCHAR(50)
);

CREATE TABLE BikeStatus (
    statusId INT IDENTITY(1,1) PRIMARY KEY CLUSTERED,
    description VARCHAR(50)
);

CREATE TABLE Rentals (
    rentalId INT IDENTITY(1,1) PRIMARY KEY CLUSTERED,
    bikeId INT,
    userId INT,
    rentalStart DATE,
    rentalEnd DATE
);

CREATE TABLE Users (
    userId INT IDENTITY(1,1) PRIMARY KEY CLUSTERED,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    emailAddress VARCHAR(100)
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

ALTER TABLE Rentals
ADD CONSTRAINT FK_Rentals_Bike
FOREIGN KEY(bikeId)
REFERENCES Bike(bikeId);

ALTER TABLE Rentals
ADD CONSTRAINT FK_Rentals_Users
FOREIGN KEY(userId)
REFERENCES Users(userId);


-- sample data







