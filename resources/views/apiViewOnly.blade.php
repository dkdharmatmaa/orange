<html>
<head>
    <meta charset="utf-8" />
    <title></title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <script type="module" src="https://pay.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.esm.js"></script>
    <script nomodule="" src="https://pay.billdesk.com/jssdk/v1/dist/billdesksdk.js "></script>
    <link href="https://pay.billdesk.com/jssdk/v1/dist/billdesksdk/billdesksdk.css" rel="stylesheet">
    <script>

        var mandate_flow_config = {
            merchantId: "<?php echo env('merchant_id') ?>",
            mandateTokenId: "<?php echo $data['auth_id'] ?>",
            authToken: "<?php echo $data['auth_token'] ?>",
            childWindow: false,
            returnUrl: "<?php echo env('response_url_only') ?>",
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
            flowConfig: mandate_flow_config,
            flowType: "emandate"
        };
        window.onload = function () {
            window.loadBillDeskSdk(config);
        };

    </script>
    
</head>
<body>
</body>
</html>
