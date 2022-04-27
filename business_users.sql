-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2022 at 02:15 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `igapecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `business_users`
--

CREATE TABLE `business_users` (
  `id` int(11) NOT NULL,
  `businessid` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `mobileno` int(11) NOT NULL,
  `password` varchar(500) NOT NULL,
  `firebaceid` varchar(500) NOT NULL,
  `billingaddressid` int(11) NOT NULL,
  `shipingaddressid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `business_users`
--

INSERT INTO `business_users` (`id`, `businessid`, `name`, `email`, `mobileno`, `password`, `firebaceid`, `billingaddressid`, `shipingaddressid`) VALUES
(1, 1, 'new', 'axy@gmail.com', 999999999, '56565656', '5555', 0, 67676),
(3, 1, 'new', 'axy@gmail.com', 999999999, '56565656', 'undefined', 67676, 0),
(4, 1, 'new', 'axy@gmail.com', 999999999, '56565656', 'undefined', 67676, 0),
(5, 1, 'new', 'axy@gmail.com', 999999999, '56565656', 'undefined', 67676, 0),
(6, 1, 'new', 'axy@gmail.com', 999999999, '56565656', 'undefined', 67676, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `business_users`
--
ALTER TABLE `business_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `business_users`
--
ALTER TABLE `business_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
