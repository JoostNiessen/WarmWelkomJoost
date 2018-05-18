<?php
class Database {
	public $servername = "localhost";
	public $user = "root";
	public $pass = "";
	public $db_name = "kassa";


	public $link;
	public $error;	



	public function __construct() {
		$this->connect();
	}
	//
	// connector 
	// 
	private function connect()
	{
		$this->link = new mysqli($this->servername, $this->user, $this->pass, $this->db_name);

		if(!$this->link) {
			$this->error = "Connection Failed: ". $this->link->connect_error;
			return false;
		}
	
	}

/*
* Select Function
*/
 function select($query) {
	$result = $this->link->query($query) or die($this->link->error.__LINE__);
	if ($result->num_rows > 0) {
		return $result;
	} else {
		return false;
	}
}

/*
* Insert Function
*/
function insert($query){
$insert_row = $this->link->query($query) or die($this->link->error.__LINE__);

//validate insert

if($insert_row)		{
	header("Location: index.php?msg=".urlencode('Record Added'));
	exit();
} else
{
	die('Error : ('. $this->conn->errno .') '.  $this->conn->error);
}
}


/*
* Update Function
*/
function update($query){
$update_row = $this->link->query($query) or die($this->link->error.__LINE__);

//validate update

if($update_row)		{
	header("Location: index.php?msg=".urlencode('Record updated'));
	exit();
} else
{
	die('Error : ('. $this->conn->errno .') '.  $this->conn->error);
}
}


/*
* Delete Function
*/
function delete($query){
$delete_row = $this->link->query($query) or die($this->link->error.__LINE__);

//validate insert

if($delete_row)		{
	header("Location: index.php?msg=".urlencode('Record Deleted'));
	exit();
} else
{
	die('Error : ('. $this->conn->errno .') '.  $this->conn->error);
}
}



}
?>

