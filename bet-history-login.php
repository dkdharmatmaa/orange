<?php
require_once("../../betwin/class/misc-class.php");
$user_id=$_POST['username'];
$password=$_POST['password'];
$user_details=all_row('user_account','user_id',$user_id,'account_type','bet_history');
if($user_id==$user_details[0]['user_id'] and $password==$user_details[0]['password']){
    $_SESSION['bet-history-user']=$user_id;
    $_SESSION['bet-history-name']=$user_details[0]['username'];
    header("location:../user-bet-match-list.php");
}
else{
    $status="fauiler";
    $msg="invalid user_id and password";
}
?>
<script>
   window.location="../user-bet-history.php?status=<?php echo $status ?>&msg=<?php echo $msg ?>";
    </script>