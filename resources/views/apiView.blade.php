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
            merchantId: "BDUATV2KTK",
            bdOrderId: "OAV419XTUZVZ3E",
            authToken: "OToken 6448DEF22D11DEC54C9E5B3F96DCF3D0A09E3C50D5379C2D6334D52054D1D86FCA68111F51DA9F66C2D6094157F262BC675D5D8D0270283039FC26F6D96F4621FFF759FDA5D03E1263F205ABF610F92C0522BC1EC47C94044437867BE10088690AF0CAA411FE55854158BC84F66D8E6FDC3EF9DF4CEBE3815D56AC4D6F7A5D9E9D089F540C422A031EDA8A107B4F693C0E82D94357394A3D9EF6A7.4145535F55415431",
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
