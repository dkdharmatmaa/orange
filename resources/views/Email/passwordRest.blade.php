@component('mail::message')
# Ymca

Forgot password link


@component('mail::button', ['url' => 'https://facheck.com/PasswordForgotForm/'.$token.'/'.$email.'/'.$userType])
Click me
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent