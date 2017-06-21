CREATE DATABASE  IF NOT EXISTS `HotelReservationsDB` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `HotelReservationsDB`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: HotelReservationsDB
-- ------------------------------------------------------
-- Server version	5.7.17-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `rid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `number` int(10) unsigned NOT NULL,
  `floor` int(10) NOT NULL,
  `beds` int(10) NOT NULL,
  `category` varchar(45) NOT NULL,
  `view` varchar(45) NOT NULL,
  PRIMARY KEY (`rid`),
  UNIQUE KEY `rid_UNIQUE` (`rid`),
  UNIQUE KEY `number_UNIQUE` (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_user`
--

DROP TABLE IF EXISTS `test_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `test_user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_user`
--

LOCK TABLES `test_user` WRITE;
/*!40000 ALTER TABLE `test_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `test_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `testtable`
--

DROP TABLE IF EXISTS `testtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `testtable` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `testtable`
--

LOCK TABLES `testtable` WRITE;
/*!40000 ALTER TABLE `testtable` DISABLE KEYS */;
INSERT INTO `testtable` VALUES (1,'Gosho',35),(2,'Rumi Canova',31),(3,'Pesho',22),(4,'Minko',53),(5,'Lili',19),(6,'Pencho',27);
/*!40000 ALTER TABLE `testtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role` varchar(45) NOT NULL DEFAULT 'visitor',
  `ssn` varchar(20) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `address` varchar(150) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `username` varchar(30) DEFAULT NULL,
  `password` varchar(30) DEFAULT NULL,
  `comment` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `uid_UNIQUE` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','7601013333','Ivo','Peev','BG','Sofia','Mladost-1, bl.71, fl.3, apt. 107','+359(899)300-123','igpeev@yahoo.com','igpeev','parola','System administrator'),(2,'admin','6612129999','Rumen','Boyadzhiev','BG','Sofia','Bul.Rakovski 123, entr.A, fl.5, apt. 11','+359(888)761-555','rboyadzhiev@yahoo.com','rboyadzhiev','parola','Hotel administrator'),(3,'admin','7703213344','Ivan','Petrov','BG','Sofia','Z.K. Reduta, bl.71, entr.3, fl.7, apt. 20','+359(877)355-111','ipavlov@yahoo.com','ipavlov','parola','Hotel facility manager'),(4,'visitor','6612347777','Ivan','Savic','Slovenia','Zagreb','LublqnaSt11','003571234235','savic@lubliana.org','savic','password','testuser'),(5,'monkey','6612347777','Ivan','Savic','Slovenia','Zagreb','LublqnaSt11','003571234235','savic@lubliana.org','savic','password','testuser'),(10,'visitor','7612123355','Joze','Robeznik','Slovenia','Lubljana','Slovenski rid 22 St, fl.1','+337(251)761-123','robeznik@peteven.sl','robeznik','parola','Mnogo hrabrij muj'),(11,'visitor','7612123355','Joze','Robeznik','Slovenia','Lubljana','Slovenski rid 22 St, fl.1','+337(251)761-123','robeznik@peteven.sl','robeznik','parola','Mnogo hrabrij muj'),(12,'visitor','7612123355','Joze','Robeznik','Slovenia','Lubljana','Slovenski rid 22 St, fl.1','+337(251)761-123','robeznik@peteven.sl','robeznik','parola','Mnogo hrabrij muj'),(13,'visitor','7612123355','Joze','Robeznik','Slovenia','Lubljana','Slovenski rid 22 St, fl.1','+337(251)761-123','robeznik@peteven.sl','robeznik','parola','Mnogo hrabrij muj');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userBAK`
--

DROP TABLE IF EXISTS `userBAK`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userBAK` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role` varchar(45) NOT NULL DEFAULT 'visitor',
  `ssn` varchar(20) NOT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `address` varchar(150) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `comment` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `uid_UNIQUE` (`uid`),
  UNIQUE KEY `ssn_UNIQUE` (`ssn`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userBAK`
--

LOCK TABLES `userBAK` WRITE;
/*!40000 ALTER TABLE `userBAK` DISABLE KEYS */;
INSERT INTO `userBAK` VALUES (1,'admin','7601013333','Ivo','Peev','BG','Sofia','Mladost-1, bl.71, fl.3, apt. 107','+359(899)300-123','igpeev@yahoo.com','igpeev','parola','System administrator'),(2,'admin','6612129999','Rumen','Boyadzhiev','BG','Sofia','Bul.Rakovski 123, entr.A, fl.5, apt. 11','+359(888)761-555','rboyadzhiev@yahoo.com','rboyadzhiev','parola','Hotel administrator'),(3,'admin','7703213344','Ivan','Petrov','BG','Sofia','Z.K. Reduta, bl.71, entr.3, fl.7, apt. 20','+359(877)355-111','ipavlov@yahoo.com','ipavlov','parola','Hotel facility manager');
/*!40000 ALTER TABLE `userBAK` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visit`
--

DROP TABLE IF EXISTS `visit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visit` (
  `vid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `is_confirmed` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `is_completed` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `room` int(10) DEFAULT NULL,
  `confirmator_id` int(10) DEFAULT NULL,
  `confirm_date` date DEFAULT NULL,
  `visitor_id` int(10) DEFAULT NULL,
  `booking_date` date DEFAULT NULL,
  `from_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `preference` varchar(45) DEFAULT NULL,
  `comment` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`vid`),
  UNIQUE KEY `vid_UNIQUE` (`vid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visit`
--

LOCK TABLES `visit` WRITE;
/*!40000 ALTER TABLE `visit` DISABLE KEYS */;
/*!40000 ALTER TABLE `visit` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-22  2:26:44
