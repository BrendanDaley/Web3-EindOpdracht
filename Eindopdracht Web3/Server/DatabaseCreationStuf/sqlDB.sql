CREATE DATABASE  IF NOT EXISTS `webshop_eindopdracht` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `webshop_eindopdracht`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: webshop_eindopdracht
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bestelling`
--

DROP TABLE IF EXISTS `bestelling`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bestelling` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `datum` date DEFAULT NULL,
  `klantNaam` varchar(200) NOT NULL,
  `klantAchterNaam` varchar(200) NOT NULL,
  `klantEmail` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bestelling`
--

LOCK TABLES `bestelling` WRITE;
/*!40000 ALTER TABLE `bestelling` DISABLE KEYS */;
INSERT INTO `bestelling` VALUES (1,'2022-01-10','brendan','daley','brendan.daley@student.hogent.be'),(2,'2022-01-10','David','Breckx','bavid.breckx@hogent.be');
/*!40000 ALTER TABLE `bestelling` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `imageLink` varchar(500) DEFAULT NULL,
  `naam` varchar(200) NOT NULL,
  `merk` varchar(200) NOT NULL,
  `prijs` int NOT NULL,
  `bescrhrijving` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'https://www.industryleadersmagazine.com/wp-content/uploads/2019/07/06.jpg','Solid Gold OVO x Air Jordans','Air Jordan',2000000,'There had to be a day when a pair of sneakers were coated in 24k gold, and that day finally came when Drake collabed with Nike to make the Solid Gold OVO x Air Jordan.'),
                             (2,'https://images.solecollector.com/complex/images/fl_lossy,q_auto/c_scale,w_690,dpr_2.0/v1/pkeceg2wm19pwzn1ejpt/michael-jordan-game-worn-converse-fast-break-high-1982-profile','Michael Jordan???s Game Worn Converse Fastbreak','Converse',190000,'In 1984, team USA won gold at the Olympics in Los Angeles. Decades later, a pair of Converse Fastbreaks signed by Michael Jordan came up for auction.'),
                             (3,'https://i.pinimg.com/736x/52/35/63/52356383987a84c8de658171f732f838.jpg','Buscemi 100 MM Diamond','Air Jordan',132000,'Loaded with 11.5 carats of diamonds and set in 18-karat gold, these shoes aren???t for the faint-hearted. If you???re looking for a fresh pair of white kicks, and fancy something totally unique, then cough up $132,000 and they???re yours!'),
                             (4,'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY4MjU5NTg0ODM0NDE0NDkz/michael-jordan-flu-game-1jpg.jpg','Air Jordan 12 (Flu Game)','Air Jordan',104000,'Once mentioned as the most expensive Jordans in the world; the price really derives from the fact that Michael Jordan wore the sneakers in the infamous ???Flu Game,??? ??? a game which he played while having the flu.'),
                             (5,'https://sneakernews.com/wp-content/uploads/2016/09/jordan-12-ovo-release-info-1.jpg','Air Jordan 12 OVO (Drake Edition)','Air Jordan',100000,'The Air Jordan 12 OVO has always been a popular shoe, however, the Drake edition blew the doors of its hinges, selling for $100,000 on eBay!'),
                             (6,'https://i.pinimg.com/originals/72/36/a8/7236a8ed862951bf60c389bd95d44909.jpg','Diamond Encrusted Air Force 1','Nike',50000,'Not the rarest of shoes in the world, nor worn by any major ballers, instead, these shoes are covered in champagne diamonds, which is why they cost $50,000.'),
                             (7,'https://www.jordaniusa.com/wp-content/uploads/2021/01/351792_147_2.png','Air Jordan 11 Jeter','Air Jordan',40000,'To commemorate Derek Jetter???s retirement in 2017, the Jordan Brand released five pairs of navy velvet Air Jordan 11s, in a pop-up shop auction near Yankee Stadium.'),
                             (8,'https://www.sneakersnstuff.com/images/95053/img-6461.jpg','OG Air Jordan 2','Air Jordan',31000,'Not the most good looking of shoes it has to be said, but you nonetheless, you can rock this shoe with a ton of different outfits and look fresh all day long.');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_bestelling`
--

DROP TABLE IF EXISTS `product_bestelling`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_bestelling` (
  `productId` int NOT NULL,
  `bestellingId` int NOT NULL,
  `aantal` int NOT NULL,
  PRIMARY KEY (`productId`),
  KEY `bestellingId_idx` (`bestellingId`,`productId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_bestelling`
--

LOCK TABLES `product_bestelling` WRITE;
/*!40000 ALTER TABLE `product_bestelling` DISABLE KEYS */;
INSERT INTO `product_bestelling` VALUES (1,1,1),(3,2,1),(6,1,2),(7,1,2);
/*!40000 ALTER TABLE `product_bestelling` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-10 16:42:45
