<!DOCTYPE html>
<html>
<head>
	<title>Payment Link</title>
</head>
<body>
	<div>
        <img src="{{ $message->embed(public_path('media/custome/orange-logo.png')) }}" style="width: 15%;">
        <p>Envisage Studios Private Limited</p>
    </div>
    <div>
        <h4>Hello  {{$full_name}}</h4>
    </div>
    <br>
    <p>Click on the below link to proceed with the payment.</p>
    <strong>Payment URL – </strong><span>{{$link}}</span>
    <br>
    <br>
    <strong>Product – </strong><span>{{$product_name}}</span>
    <br>
    <br>
    <strong>Branch – </strong><span>{{$branch_name}}</span>
    <br>
    <br>
    <strong>Customer Name – </strong><span>{{$full_name}}</span>
    <br>
    <br>
    <strong>Customer Email  – </strong><span>{{$email}}</span>
    <br>
    <br>
    <strong>Customer Phone – </strong><span>{{$phone}}</span>
    <br>
    <br>
    <br>
    <p>Team Orange Theory Fitness</p>
</body>
</html>