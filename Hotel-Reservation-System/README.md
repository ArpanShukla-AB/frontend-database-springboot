# Hotel Reservation System 🏨

Welcome to the Hotel Reservation System, a Java-based application for managing hotel reservations efficiently. Whether you're running a small inn or a boutique hotel, this system simplifies the reservation process, enhances guest management, and keeps your business organized.

## Features 🌟

- **Reserve a Room:** Easily make new reservations by providing guest details, room numbers, and contact information.

- **View Reservations:** Get an overview of all current reservations, including guest names, room numbers, contact details, and reservation dates.

- **Edit Reservation Details:** Update guest names, room numbers, and contact information for existing reservations.

- **Delete Reservations:** Remove reservations that are no longer needed.


hotel reservation syatem
1.New reservation
2.Check reservation
3.Get room number
4.Update reseravation
5.Delete Reservation

DATABASE NAME => hotel_db
Table NAme => reservation
Schema =>
reservation_id int auto incr
guest_name varchar not null
room_number int not null
contact_number varcahr not null
reservation_date timestamp default

how to create database
1.open terminal
2.mysql -u root -p
3.CREATE DATABASE studentdb;
4.SHOW DATABASES;
5.USE studentdb;
6.CREATE TABLE student (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100),
phone VARCHAR(15)
);

mysql -u root -p
SHOW TABLES;
SELECT * FROM reservations;
+----------------+------------+-------------+----------------+---------------------+
| reservation_id | guest_name | room_number | contact_number | reservation_date    |
+----------------+------------+-------------+----------------+---------------------+
| 1              | Arpan      | 101         | 9876543210     | 2026-06-06 18:30:00 |
+----------------+------------+-------------+----------------+---------------------+


DESCRIBE reservations;



cd "/Users/arpanshukla/Desktop/OS/scrimba_web/Hotel-Reservation-System/Hotel Reservation System"
javac -cp "lib/libraries/*" HotelReservationSystem.java
java -cp ".:lib/libraries/*" HotelReservationSystem


