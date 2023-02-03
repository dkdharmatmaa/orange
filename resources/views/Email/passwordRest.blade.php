@component('mail::message')
# Ymca

Forgot password link


@component('mail::button', ['url' => 'http://52.206.247.236/PasswordForgotForm/'.$token.'/'.$email.'/'.$userType])
Click me
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent