<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name') }}</title>

        @vite(['resources/js/src/theme/sass/main.scss'])
    </head>
    <body>
        <div id="page-container" class="sidebar-o enable-page-overlay side-scroll page-header-classic main-content-boxed">
        </div>

        @vite(['resources/js/src/theme/codebase/app.js'])
        @vite(['resources/js/app.js'])
    </body>
</html>
