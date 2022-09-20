SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: rickandmorty
--

-- --------------------------------------------------------
CREATE DATABASE rickandmorty;
--
-- Estructura de la taula credentials
--

CREATE TABLE credentials (
  id int(11) NOT NULL AUTO_INCREMENT,
  user varchar(40) NOT NULL UNIQUE,
  password varchar(80) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Bolcament de dades per a la taula credentials
--

INSERT INTO credentials (id, user, password) VALUES
(1, 'rick@gmail.com', '$2b$10$g6ha1xq46ofzx/Fff3sW1.7.iNqm202H3n9qkspPuphZUU57tvuIK');




/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
