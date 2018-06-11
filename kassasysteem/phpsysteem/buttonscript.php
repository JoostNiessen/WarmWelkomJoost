
<body> 
<form name="form" method="post">
<input type="submit" name="button1" value="Button 1" /> 
<input type="submit" name="button2" value="Button 2" /> 
<input type="submit" name="button3" value="Button 3" /> 
<input type="submit" name="button4" value="Button 4" />

</form> 
</body> 

<?php

if(isset($_POST['button1'])){

echo("You clicked button one!");
$query = mysql_query("SELECT * FROM gerechten")or die(mysql_error()); 
if($query) { 
echo "successful"; 
}else { 
echo "error"; 
} 
}


if(isset($_POST['button2'])){

echo("You clicked button two!");

}//if isset

if(isset($_POST['button3'])){

echo("You clicked button three!");

}//if isset

if(isset($_POST['button4'])){

echo("You clicked button four!");

}//if isset

?> 

