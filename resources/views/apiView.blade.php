<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Api view</title>
</head>

<body onload="window.close();">
    <button type="button" onclick="pay()" class="btn">Pay</button>
</body>
<script src="https://services.billdesk.com/checkout-widget/src/app.bundle.js"></script>
<script>
    function pay() {

        $.ajax({
            type: 'GET',
            url: '/getChecksum',
            data: {
                "_token": "{{ csrf_token() }}",
            },
            success: function(data) {
                alert(data);
            },
            error: function(error) {

            }
        });
    }
</script>

</html>
