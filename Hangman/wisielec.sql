-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Paź 2022, 11:20
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `wisielec`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `hasla`
--

CREATE TABLE `hasla` (
  `id_hasla` int(11) NOT NULL,
  `nazwa_hasla` text DEFAULT NULL,
  `kategoria` text DEFAULT NULL,
  `podpowiedz` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `hasla`
--

INSERT INTO `hasla` (`id_hasla`, `nazwa_hasla`, `kategoria`, `podpowiedz`) VALUES
(1, 'CYPR', 'GEOGRAFIA', 'Leży we wschodniej części Morza Śródziemnego'),
(2, 'OSLO', 'GEOGRAFIA', 'Stolica Norwegii'),
(3, 'RZYM', 'GEOGRAFIA', 'Wieczne miasto'),
(4, 'WĘGRY', 'GEOGRAFIA', 'Polak, Węgier, dwa bratanki, i do szabli, i do szklanki'),
(5, 'DANIA', 'GEOGRAFIA', 'Najmniejszse z państw nordyckich'),
(6, 'AMAZONKA', 'GEOGRAFIA', 'Rzeka Ameryki Południowej o największym średnim przepływie na Ziemi'),
(7, 'MADAGASKAR', 'GEOGRAFIA', 'Wyginam śmiało ciało'),
(8, 'BANAN', 'JEDZENIE', 'Żółty owoc'),
(9, 'SZARLOTKA', 'JEDZENIE', 'Składa się z kruchego ciasta i owoców'),
(10, 'MAKARON', 'JEDZENIE', 'Jest wiele rodzajów tego produktu'),
(11, 'INTERSTELLAR', 'KINO', 'Film fantastycznonaukowy z 2014 w reżyserii Christophera Nolana'),
(12, 'LŚNIENIE', 'KINO', 'Adaptacja powieści Stephena Kinga'),
(13, 'PIŁA', 'KINO', 'Seria filmów o psychopatycznym zabójcy Johnie Krammerze'),
(14, 'INCEPCJA', 'KINO', 'Zdobywca 4 Oscarów za najlepsze: zdjęcia, dźwięk, montaż dźwięku i efekty specjalne. Twórcą i reżyserem filmu jest Christopher Nolan'),
(15, 'SPIELBERG', 'KINO', 'Jeden z najsłynniejszych i najbardziej uznanych reżyserów i producentów w historii amerykańskiego kina'),
(16, 'LEKKOATLETYKA', 'SPORT', 'Jedna z najstarszych dyscyplin sportu, oparta na naturalnym ruchu'),
(17, 'JEŹDZIECTWO', 'SPORT', 'Obejmuje: ujeżdżenie, skoki przez przeszkody'),
(18, 'NARCIARSTWO', 'SPORT', '102 metry'),
(19, 'KAJAKARSTWO', 'SPORT', 'Sport wodny'),
(20, 'GOLF', 'SPORT', 'Hole in one'),
(21, 'ELEKTRONIKA', 'NAUKA', 'Dziedzina techniki i nauki zajmująca się wytwarzaniem i przetwarzaniem sygnałów w postaci prądów i napięć elektrycznych lub pól elektromagnetycznych'),
(22, 'GRAWITACJA', 'NAUKA', 'Ogólna teoria względności'),
(23, 'CAŁKA', 'NAUKA', 'Sumy nieskończenie wielu nieskończenie małych wartości');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `hasla`
--
ALTER TABLE `hasla`
  ADD PRIMARY KEY (`id_hasla`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `hasla`
--
ALTER TABLE `hasla`
  MODIFY `id_hasla` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
