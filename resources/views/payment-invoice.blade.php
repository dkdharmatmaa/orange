<!DOCTYPE html>
<html>
<head>
	<title>Payment receipt</title>
</head>
<body>
	<div style="background: #ED700F;padding: 15px;text-align: center;">
        <img src="{{ $message->embed(public_path('media/custome/white-logo.png')) }}" style="width: 15%;">
    </div>
    <div>
        <h4>“We have received your payment of Rs. {{$amount}} via Transaction ID {{$trans_id}} at {{date("h:i:s")}}.</h4>
    </div>
    <br>
    <p>Live Life More Vibrantly</p>
    <p>You’ve just taken one big step toward becoming a better version of you, and that’s worth celebrating. The first step is the hardest, but we’ve got you covered. We’re a community, not a competition. You’ll discover how our coach-inspired workout is designed for every single fitness level.</p>
    <br>
    <br>
    <br>
    <p>Team Orange Theory Fitness</p>
</body>
</html>