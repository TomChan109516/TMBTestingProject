
--Create Database with name of VICSS_DEV:
--==================================================================================================================================
--1. Login with Sql server DB as a sadministrator and execute the following DB creation script for VICSS_DEV DB Creation:
--Size : 2GB 

--** Primary File path has to be modified as per On Perm 
--** Log file path has to be modofied as per On Perm 
--==================================================================================================================================
--Please login as a SADMINISTRATOR for creating below Database 
--==================================================================================================================================

CREATE DATABASE [VICSS_DEV]
--CONTAINMENT = NONE
--ON  PRIMARY 
--NAME = N'VICSS_DEV', FILENAME = N'D:\rdsdbdata\DATA\VICSS_DEV.mdf' , SIZE = 2048000KB , FILEGROWTH = 10%)
--LOG ON 
--( NAME = N'VICSS_DEV_log', FILENAME = N'D:\rdsdbdata\DATA\VICSS_DEV_log.ldf' , SIZE = 409600KB , FILEGROWTH = 10%)
--WITH LEDGER = OFF
GO
ALTER DATABASE [VICSS_DEV] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [VICSS_DEV] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [VICSS_DEV] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [VICSS_DEV] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [VICSS_DEV] SET ARITHABORT OFF 
GO
ALTER DATABASE [VICSS_DEV] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [VICSS_DEV] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [VICSS_DEV] SET AUTO_CREATE_STATISTICS ON(INCREMENTAL = OFF)
GO
ALTER DATABASE [VICSS_DEV] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [VICSS_DEV] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [VICSS_DEV] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [VICSS_DEV] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [VICSS_DEV] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [VICSS_DEV] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [VICSS_DEV] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [VICSS_DEV] SET  DISABLE_BROKER 
GO
ALTER DATABASE [VICSS_DEV] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [VICSS_DEV] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [VICSS_DEV] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [VICSS_DEV] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [VICSS_DEV] SET  READ_WRITE 
GO
ALTER DATABASE [VICSS_DEV] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [VICSS_DEV] SET  MULTI_USER 
GO
ALTER DATABASE [VICSS_DEV] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [VICSS_DEV] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [VICSS_DEV] SET DELAYED_DURABILITY = DISABLED 
GO
USE [VICSS_DEV]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = Off;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = Primary;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = On;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = Primary;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = Off;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = Primary;
GO
USE [VICSS_DEV]
GO
IF NOT EXISTS (SELECT name FROM sys.filegroups WHERE is_default=1 AND name = N'PRIMARY') ALTER DATABASE [VICSS_DEV] MODIFY FILEGROUP [PRIMARY] DEFAULT
GO


--========================================================================================================================================================
--2. Create New Login VICSS_DEV_OWNER with Password "Infosys123" 

--========================================================================================================================================================
USE [master]
GO
CREATE LOGIN [VICSS_DEV_OWNER] WITH PASSWORD=N'Infosys123', DEFAULT_DATABASE=[VICSS_DEV], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO

--========================================================================================================================================================

--3. Create New User VICSS_DEV_OWNER and mapped wiuth login VICSS_DEV_OWNER
--========================================================================================================================================================
USE [VICSS_DEV]
GO
CREATE USER [VICSS_DEV_OWNER] FOR LOGIN [VICSS_DEV_OWNER]
GO

--========================================================================================================================================================

--4. CREATE SCHEMA
--========================================================================================================================================================

USE [VICSS_DEV]
GO
CREATE SCHEMA [VICSS_DEV_OWNER] AUTHORIZATION [VICSS_DEV_OWNER]
GO

--========================================================================================================================================================

--4. ALTER USER 
--========================================================================================================================================================

USE [VICSS_DEV]
GO
ALTER USER [VICSS_DEV_OWNER] WITH DEFAULT_SCHEMA=[VICSS_DEV_OWNER]
GO
--=============================================================================================================================

--5.GRANT PERMISSION TO VICSS_DEV_OWNER
--==============================================================================================================================


use [VICSS_DEV]
GO
GRANT CONNECT TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT CREATE FUNCTION TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT CREATE SERVICE TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT CREATE SYMMETRIC KEY TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT CREATE SYNONYM TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT CREATE TABLE TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT CREATE TYPE TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT CREATE USER TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT CREATE VIEW TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT DELETE TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT EXECUTE TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT INSERT TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
use [VICSS_DEV]
GO
GRANT SELECT TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT UPDATE TO [VICSS_DEV_OWNER]
GO
use [VICSS_DEV]
GO
GRANT VIEW DEFINITION TO [VICSS_DEV_OWNER]
GO
