<?php
include("config.php");

$dsn = "mysql:host=$DBSERVER;" . 
        "dbname=$DEFAULTDB;" .
        "charset=$CHARSET";

$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => true
	];

try 
{

    $pdo = new PDO($dsn, $DBUSER, $DBPASSWD, $options);
    
} 
catch (Exception $e)
{
  
  echo "Error al conectarse con la base de datos.\n";
  if( !error_reporting() ) 
      echo $e->getMessage();
  exit();

 }
 $link = new ccaMySQL($pdo);


?>