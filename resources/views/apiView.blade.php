<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <script type="module" src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.esm.js"></script>
    <script nomodule="" src="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk.js"></script>
    <link href="https://uat.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.css" rel="stylesheet">
    <script>

        var flow_config = {
            merchantId: "<?php echo $merchant_id; ?>",
            bdOrderId: "<?php echo $transaction_id; ?>",
            authToken: "<?php echo $auth_token; ?>",
            childWindow: false,
            returnUrl: "https://ot.brandshark.in/paymentresponse",
			crossButtonHandling: 'Y',
			retryCount: 0
        };
        var responseHandler = function (txn) {
            if (txn.response) {
                alert("callback received status:: ", txn.status);
                alert("callback received response:: ", txn.response);
            }
        };

        var config = {
            flowConfig: flow_config,
            flowType: "payments"
        };
        window.onload = function () {
            alert(config);
            window.loadBillDeskSdk(config);
        };

    </script>
    
</head>
<body>

</body>
</html>
