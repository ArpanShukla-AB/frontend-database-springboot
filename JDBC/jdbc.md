jdbc - java database connectivity
JDbc stands for java database connectivity . It is a standard API provided by Oracle for java applications to interact with different set of databases.
api -- predefined classes 

jdbc connects jdbc to databases

--why jdbc --
to store the data for all future and fetch 

---how jdbc work(architecture of jdbc)--
java application -> <- jdbc api --> (jdbc database drivers (oracle databse , sql driver , mariaDb driver) <-> oracle , sql , mariaDB) - jdbc driver layer


--jdbc api--
Inportant Classes and interfaces
-java.sql.DriverManager
java.sql.Connection
java.sql.Statement
java.sql.PreparedStatement
java.sql.CallableStatement
java.sql.ResultSet
java.sql.ResultSetMetaData
java.sql.DatabaseMetada
-java.sql.SQLException

setup--
install java 
check java -version

database : Oracle , My Sql Db , 
My Sql 

JDBC Driver : My sql - connector: 5.1 , 8.0

notepad , notepad++ , sublime

-------------
how to set jar file in your class path

---------------=============---------------------========------=====-------==================-----
Swing , web app , mobile goes to jdbc api driver manager
you need a driver manager
jdbc driver ==> MySql => platform independent
native driver
thin driver
network prorocol driver


5 stepts to connect to jdbc 
step 1 : load the driver
2.Connection
3.Statement => interface 
4.Query execute 
5.close the connection at end 





