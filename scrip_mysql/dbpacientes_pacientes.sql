-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: dbpacientes
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
-- Table structure for table `pacientes`
--

DROP TABLE IF EXISTS `pacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacientes` (
  `tipoDoc` varchar(3) DEFAULT NULL,
  `Id` int NOT NULL,
  `Nombres` varchar(25) DEFAULT NULL,
  `Apellidos` varchar(25) DEFAULT NULL,
  `Edad` int DEFAULT NULL,
  `Direccion` varchar(30) DEFAULT NULL,
  `Sexo` varchar(9) DEFAULT NULL,
  `Peso` int DEFAULT NULL,
  `Estatura` int DEFAULT NULL,
  `Fuma` varchar(2) DEFAULT NULL,
  `ConsumoEnAnos` int DEFAULT NULL,
  `Dieta` varchar(2) DEFAULT NULL,
  `RelacionPE` float DEFAULT NULL,
  `Estado` varchar(9) DEFAULT NULL,
  `Prioridad` int DEFAULT NULL,
  `Riesgo` int DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientes`
--

LOCK TABLES `pacientes` WRITE;
/*!40000 ALTER TABLE `pacientes` DISABLE KEYS */;
INSERT INTO `pacientes` VALUES ('TI',86123,'carlita','Telles Telles ',7,'cr falsa # 51-18','Fememino',45,110,'No',0,'No',37.19,'Pendiente',39,3),('TE',4632178,'lula','lila',54,'cra 2 #5-12','Fememino',50,150,'No',0,'Si',22.22,'Pendiente',5,8),('TE',465879655,'Bob','Bed',21,'cr falsa # 51-18','Fememino',70,180,'Si',5,'Si',21.6,'Pendiente',3,1),('CC',1032465987,'Carl','Telles Telles ',60,'cr falsa # 51-18','Masculino',55,166,'Si',12,'No',19.96,'Pendiente',5,8),('CC',2013646818,'Carla','Telles Telles ',60,'cr falsa # 51-18','Fememino',40,155,'No',0,'Si',16.65,'Pendiente',7,10);
/*!40000 ALTER TABLE `pacientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-13 15:26:11
