-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 27, 2020 at 04:27 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `partic`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category`) VALUES
(1, 'Party'),
(2, 'Music'),
(3, 'Bar'),
(4, 'Pub'),
(5, 'Festival');

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `name`) VALUES
(1, 'Medan'),
(2, 'Jakarta'),
(3, 'Surabaya'),
(4, 'Sulawesi'),
(5, 'Yogyakarta');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `message` varchar(500) DEFAULT NULL,
  `event` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `message`, `event`, `email`, `date`) VALUES
(1, 'Hello apa kabar', 10, 'kevinyusyus@gmail.com2', '2020-07-14'),
(2, 'Hello Apa kabar sayang ku', 9, 'sistech.uphmedan@gmail.com', '2020-07-14'),
(6, 'Apa kabar kalian semua ', 8, 'kevinyusyus@gmail.com2', '2020-07-23');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `slot` int(11) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `datecreate` date DEFAULT NULL,
  `start` date DEFAULT NULL,
  `openregis` date DEFAULT NULL,
  `closeregis` date DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `city_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `email` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `name`, `slot`, `location`, `description`, `image`, `datecreate`, `start`, `openregis`, `closeregis`, `status`, `price`, `city_id`, `category_id`, `email`) VALUES
(8, 'Event Name KAYEE', 3, 'My Location', 'Description again', 'http://localhost/partic/uploads/Event NameETIC_BLACK.png', '2020-07-12', '2020-08-08', '2020-08-08', '2020-08-08', 'open', 100000, 5, 5, 'kevinyusyus@gmail.com2'),
(9, 'Etic Event', 3, 'Location', 'Nama', 'http://localhost/partic/uploads/Etic EventBG meeting.jpg', '2020-07-12', '2020-08-08', '2020-08-08', '2020-08-08', 'open', 10000, 4, 4, 'kevinyusyus@gmail.com2'),
(10, 'SIstech Event', 10, 'Medan', 'SIstech first event', 'http://localhost/partic/uploads/SIstech Eventtipod.png', '2020-07-12', '2020-07-01', '2020-07-01', '2020-07-01', 'open', 10000, 3, 3, 'sistech.uphmedan@gmail.com'),
(11, 'KPU', 10, 'fdss', 'halloo', 'http://localhost/partic/uploads/KPUmessageImage_1589703332647.jpg', '2020-07-22', '2020-07-22', '2020-06-30', '2020-07-24', 'open', 1000, 1, 1, 'kevinyusyus@gmail.com2');

-- --------------------------------------------------------

--
-- Table structure for table `event_has_contact`
--

CREATE TABLE `event_has_contact` (
  `Event_id` int(11) NOT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `instagram` varchar(45) DEFAULT NULL,
  `facebook` varchar(45) DEFAULT NULL,
  `whatsapp` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `favourite`
--

CREATE TABLE `favourite` (
  `event` int(11) NOT NULL,
  `email` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `favourite`
--

INSERT INTO `favourite` (`event`, `email`) VALUES
(8, 'kevinyusyus@gmail.com2'),
(9, 'kevinyusyus@gmail.com2'),
(9, 'sistech.uphmedan@gmail.com'),
(10, 'kevinyusyus@gmail.com2'),
(11, 'sistech.uphmedan@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `id` varchar(10) NOT NULL,
  `method` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `payment_method`
--

INSERT INTO `payment_method` (`id`, `method`) VALUES
('cc', 'Credit Card'),
('dana', 'Dana'),
('gp', 'Go Pay'),
('ovo', 'OVO');

-- --------------------------------------------------------

--
-- Table structure for table `ticket`
--

CREATE TABLE `ticket` (
  `id` int(11) NOT NULL,
  `status` varchar(45) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `event` int(11) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `datecreate` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ticket`
--

INSERT INTO `ticket` (`id`, `status`, `qty`, `price`, `event`, `email`, `datecreate`) VALUES
(4, 'ATTENDED', 3, 300000, 8, 'kevinyusyus@gmail.com2', '2020-07-12'),
(5, 'ATTENDED', 1, 10000, 9, 'kevinyusyus@gmail.com2', '2020-07-12'),
(6, 'ATTENDED', 1, 10000, 9, 'sistech.uphmedan@gmail.com', '2020-07-12'),
(7, 'NOT ATTEND', 1, 10000, 10, 'kevinyusyus@gmail.com2', '2020-07-12'),
(9, 'ATTENDED', 2, 2000, 11, 'kevinyusyus@gmail.com2', '2020-07-22'),
(10, 'ATTENDED', 1, 1000, 11, 'kevinyusyus@gmail.com2', '2020-07-23'),
(11, 'WAITING CONFIRMATION', 1, 1000, 11, 'kevinyusyus@gmail.com2', '2020-07-23');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `payment_method` varchar(10) NOT NULL,
  `total` int(11) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `ticket` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `payment_method`, `total`, `name`, `email`, `ticket`) VALUES
(14, 'cc', 1000, 'Kevin Yuslianto', 'kevinyusyus@gmail.com', 7),
(18, 'cc', 1000, 'Kevin Yuslianto', 'kevinyusyus@gmail.com', 6),
(20, 'cc', 1000, 'Kevin Yuslianto', 'kevinyusyus@gmail.com', 10),
(21, 'cc', 1000, 'Kevin Yuslianto', 'kevinyusyus@gmail.com', 11);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `email` varchar(100) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `gender` varchar(10) NOT NULL,
  `instagram` varchar(20) NOT NULL,
  `website` varchar(20) NOT NULL,
  `blog` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `job` varchar(50) NOT NULL,
  `company` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`email`, `name`, `password`, `phone`, `gender`, `instagram`, `website`, `blog`, `address`, `job`, `company`, `country`) VALUES
('kevinyusyus@gmail.com', 'Kevin Yuslianto', '123', '083194617930', 'male', '', '', '', '', '', '', ''),
('kevinyusyus@gmail.com2', 'Kaye2', '123', '+62 1234', 'male', 'kevinyus', 'website', 'blog', '', 'Web Developer', 'apa', ''),
('kevinyusyus@gmail.com3', 'Kevin Yuslianto', '123', '083194617930', 'male', '', '', '', '', '', '', ''),
('sistech.uphmedan@gmail.com', 'Sistech', '123', '083194617930', 'male', 'kevinyus', '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_comment_Event1` (`event`),
  ADD KEY `fk_comment_User1` (`email`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Event_category1` (`category_id`),
  ADD KEY `fk_User_id` (`email`),
  ADD KEY `fk_Event_City` (`city_id`);

--
-- Indexes for table `event_has_contact`
--
ALTER TABLE `event_has_contact`
  ADD PRIMARY KEY (`Event_id`);

--
-- Indexes for table `favourite`
--
ALTER TABLE `favourite`
  ADD PRIMARY KEY (`event`,`email`),
  ADD KEY `fk_fav_user_idx` (`email`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Participant_Event1` (`event`),
  ADD KEY `fk_Ticket_User1` (`email`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ticket` (`ticket`),
  ADD KEY `pm_idx` (`payment_method`),
  ADD KEY `tk_idx` (`ticket`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `ticket`
--
ALTER TABLE `ticket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_comment_Event1` FOREIGN KEY (`event`) REFERENCES `event` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_comment_User1` FOREIGN KEY (`email`) REFERENCES `user` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `event`
--
ALTER TABLE `event`
  ADD CONSTRAINT `fk_Event_City` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Event_category1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_User_id` FOREIGN KEY (`email`) REFERENCES `user` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `event_has_contact`
--
ALTER TABLE `event_has_contact`
  ADD CONSTRAINT `fk_event_has_contact_Event1` FOREIGN KEY (`Event_id`) REFERENCES `event` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `favourite`
--
ALTER TABLE `favourite`
  ADD CONSTRAINT `fk_fav_user` FOREIGN KEY (`email`) REFERENCES `user` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_favourite_Event1` FOREIGN KEY (`event`) REFERENCES `event` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `fk_Participant_Event1` FOREIGN KEY (`event`) REFERENCES `event` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Ticket_User1` FOREIGN KEY (`email`) REFERENCES `user` (`email`) ON DELETE SET NULL ON UPDATE NO ACTION;

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `pm` FOREIGN KEY (`payment_method`) REFERENCES `payment_method` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `tr` FOREIGN KEY (`ticket`) REFERENCES `ticket` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
