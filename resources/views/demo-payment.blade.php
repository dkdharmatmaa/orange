<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Payment</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
</head>
<body>
    <form action="/create-order" method="post" style="text-align: center">
        @csrf
        <div style="margin-top: 10px">
            <label for="start">Start Date:</label>
            <input type="date" id="start" required name="start">
        </div>
        <div style="margin-top: 10px">
            <label for="end">End Date:</label>
            <input type="date" id="end" required name="end">
        </div>
        <div style="margin-top: 10px"><input type="submit"></div>
    </form>
</body>
</html>