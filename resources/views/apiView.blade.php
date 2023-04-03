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
            bdOrderId: "OAI519XTUZTEHT",
            authToken: "OToken 9C61354ED05F26C65FE2620124ED8D352B1CC2F96D7F74B85492091FAFB6ADB5D20D44C9FF5E126C05910D4E8571DD2AE232F3ADB706CDA9B925DCB80B6C28868848CB13A490025DAE7D3B1E4348A5562C59565995C6C522DD41F4A60D3A212BDFD217A881D20911EA73990A88A6417BFDEF3750A7994F4E13DAE91DAF3316E457F99AB5E7748F3BFC1C2A2BAE7BCAC616D1A1AC9F93E0A111CD08.4145535F55415431",
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