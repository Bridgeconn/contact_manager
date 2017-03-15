  CREATE TABLE myself (
  id     INT PRIMARY KEY AUTO_INCREMENT,
  author VARCHAR(100) NOT NULL,
  title  VARCHAR(100) NOT NULL,
  body   TEXT         NOT NULL
);

CREATE TABLE IF NOT EXISTS `Signup` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userEmail` varchar(60) NOT NULL,
  `userPass` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userEmail` (`userEmail`)
);
