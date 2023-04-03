<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Orange</title>
        <link rel="icon" href="/media/custome/favicon.png" type="image/x-icon">
        <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
    </head>
    <body style="background: #F1EFEF">
        <div id="app">
        </div>
        <script src="{{ asset('/js/app.js') }}" type="text/javascript"></script>
    </body>
</html>
