@include('js-localization::head')
<!DOCTYPE html>
<html>
<head>
    @yield('meta')
    <meta charset="UTF-8">
    <title>Cudrag.md</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="/img/clogo.png" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css">
    {{--<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>--}}
    <link rel="stylesheet" href="/css/app.css">

</head>
<body>
<div  id="app">
    <div class="content">
        <header>
            <div class="header">
                <div class="header-block header-block_left">
                    <div class="mobile-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14">
                            <rect  width="17" height="2"/>
                            <rect  y="6" width="17" height="2"/>
                            <rect  y="12" width="17" height="2"/>
                        </svg>
                    </div>
                    <div class="lang">
                        <ul>
                            <li><a href="">ru</a></li>
                            <li class="current"><a href="">en</a></li>
                            <li><a href="">ro</a></li>
                        </ul>
                    </div>
                    <div class="header-block_delim"></div>
                    <div class="account"><a href="">My account</a><a href="a" class="log-out">(sign out)</a></div>
                </div>
                <div class="header-block header-block_logo">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 524 487" style="enable-background:new 0 0 524 487;" xml:space="preserve">
                    <g>
                        <path class="logo_svg logo_svg_0" d="M114.5,95.5c17-56,87-85,129-81c112,9,127,99,127,99S262.5,21.5,114.5,95.5z"/>
                        <path class="logo_svg logo_svg_1" d="M376.5,68.5c0,0,117,11,130,127c29,221-181,188-181,188C525.5,280.5,401.5,82.5,376.5,68.5z"/>
                        <path class="logo_svg logo_svg_2" d="M124.5,404.5c0,0-80-35-107-133c-21-136,92-149,92-149C47.5,223.5,75.5,329.5,124.5,404.5z"/>
                        <path class="logo_svg logo_svg_3" d="M177.5,364.5c-51.4-32.8-82-82.1-74-162c19.8-80.6,71-91.5,136-72C134.5,167.5,119.5,288.5,177.5,364.5z"/>
                        <path class="logo_svg logo_svg_4" d="M280.5,128.5c68-1.8,107.3,30.9,118,98c0.2,89.8-52,134-110,134C349.5,314.5,354.3,193.5,280.5,128.5z"/>
                        <path class="logo_svg logo_svg_5" d="M195.5,178.5c73-50,142,41,64,92C261.8,222.8,242.3,190.9,195.5,178.5z"/>
                        <path class="logo_svg logo_svg_6" d="M179.5,235.5c21,63,67.5,79.8,136,52c-17.1,37.7-41.6,57.6-76,54C201.9,331.4,178.4,301.2,179.5,235.5z"/>
                        <path class="logo_svg logo_svg_7" d="M133.5,369.5c72.8,57.3,161.7,70.4,270,32c-22.7,46.9-70.8,66.5-135,69C197.5,469.4,149.8,439,133.5,369.5z"/>
                    </g>
                </svg>
                        <span>CuDrag.md</span>
                    </a>
                </div>
                <div class="header-block header-block_right">
                    <!--<a href="">-->
                    <!--<div class="wish">-->
                    <!--<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23px" height="23px" viewBox="0 0 16 16">-->
                    <!--<path d="M12.9 15.4l-4.9-2.6-4.9 2.6 0.9-5.4-4-3.9 5.5-0.8 2.4-5 2.4 5 5.5 0.8-3.8 3.9 0.9 5.4z"></path>-->
                    <!--</svg>-->
                    <!--<span class="wish-text" data-id="newsletter">wish list <b id="wishCount">3</b></span>-->
                    <!--</div>-->
                    <!--</a>-->
                    <!--<span class="header-block_delim"></span>-->
                    <!--<a href="">-->
                    <!--<div class="bag ">&lt;!&ndash; add class in to bag if product exists &ndash;&gt;-->
                    <!--<div class="bag-in">65</div>-->
                    <!--<svg  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23px" height="23px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">-->
                    <!--<path d="M27.996,8.91C27.949,8.395,27.519,8,27,8h-5V6c0-3.309-2.69-6-6-6c-3.309,0-6,2.691-6,6v2H5-->
                    <!--C4.482,8,4.051,8.395,4.004,8.91l-2,22c-0.025,0.279,0.068,0.557,0.258,0.764C2.451,31.882,2.719,32,3,32h26-->
                    <!--c0.281,0,0.549-0.118,0.738-0.326c0.188-0.207,0.283-0.484,0.258-0.764L27.996,8.91z M12,6c0-2.206,1.795-4,4-4s4,1.794,4,4v2h-8-->
                    <!--V6z M4.096,30l1.817-20H10v2.277C9.404,12.624,9,13.262,9,14c0,1.104,0.896,2,2,2s2-0.896,2-2c0-0.738-0.404-1.376-1-1.723V10h8-->
                    <!--v2.277c-0.596,0.347-1,0.984-1,1.723c0,1.104,0.896,2,2,2c1.104,0,2-0.896,2-2c0-0.738-0.403-1.376-1-1.723V10h4.087l1.817,20-->
                    <!--H4.096z"/>-->
                    <!--</svg>-->
                    <!--<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89.67 102.48" width="23px" height="23px" >-->
                    <!--<g>-->
                    <!--<path  d="M554.92,519.7a3.2,3.2,0,0,0-3.19-2.91h-16v-6.4a19.21,19.21,0,1,0-38.43,0v6.4h-16a3.2,3.2,0,0,0-3.19,2.91l-6.4,70.45a3.21,3.21,0,0,0,3.19,3.49h83.26a3.21,3.21,0,0,0,3.19-3.49Zm-22.07,22.7a6.39,6.39,0,0,1-3.2-11.92l-0.33-13.7H503.69l0.33,13.7a6.4,6.4,0,1,1-6.4,0l-0.12-13.57,6.19-.13v-6.4a12.81,12.81,0,1,1,25.62,0v6.4h6.4L536,530.48A6.39,6.39,0,0,1,532.85,542.4Z" transform="translate(-471.67 -491.17)"/>-->
                    <!--</g>-->
                    <!--</svg>-->
                    <!--<span class="bag-text">bag <b id="cartCount">3</b></span>-->
                    <!--</div>-->
                    <!--</a>-->
                </div>
            </div>
            <nav class="menu">
                <div class="menu-upper">
                    <div class="menu-upper_lang">
                        <div class="lang">
                            <ul>
                                <li><a href="">ru</a></li>
                                <li class="current"><a href="">en</a></li>
                                <li><a href="">ro</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu-close">
                        <svg width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
                            <g>
                                <path fill="#1D1D1B" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <ul class="menu-ul1">
                    <li class="menu-ul1_li current deeper">
                        <router-link to="/catalog" class="menu-ul1_link"><span>Каталог</span></router-link>
                        <div class="menu-ul2_div">
                            <ul class="menu-ul2">
                                <li class="menu-ul2_li"><a href="" class="menu-ul2_link">Papetarie</a></li>
                                <li class="menu-ul2_li"><a href="" class="menu-ul2_link">Floristica</a></li>
                                <li class="menu-ul2_li"><a href="" class="menu-ul2_link">Accesorii</a></li>
                                <li class="menu-ul2_li"><a href="" class="menu-ul2_link">Decor</a></li>
                                <!--<li class="menu-ul2_li"><a href="" class="menu-ul2_link">FALL WINTER 2016</a></li>-->
                                <!--<li class="menu-ul2_li"><a href="" class="menu-ul2_link">FALL WINTER 2016</a></li>-->
                            </ul>
                            <!--<ul class="menu-ul2">-->
                            <!--<li class="menu-ul2_li"><a href="" class="menu-ul2_link"><span>FALL WINTER 2015-2016</span></a></li>-->
                            <!--<li class="menu-ul2_li"><a href="" class="menu-ul2_link"><span>FALL SUMMER 2016</span></a></li>-->
                            <!--<li class="menu-ul2_li"><a href="" class="menu-ul2_link"><span>FALL WINTER 2016</span></a></li>-->
                            <!--</ul>-->

                        </div>
                    </li>
                    <li class="menu-ul1_li deeper">
                        <a href="" class="menu-ul1_link">Услуги</a>
                        <div class="menu-ul2_div">
                            <ul class="menu-ul2">
                                <li class="menu-ul2_li"><a href="" class="menu-ul2_link">Оформление торжеств</a></li>
                                <li class="menu-ul2_li"><a href="" class="menu-ul2_link">Декоративная упаковка</a></li>
                                <li class="menu-ul2_li"><a href="" class="menu-ul2_link">Дизайн пригласительных</a></li>
                                <li class="menu-ul2_li"><a href="" class="menu-ul2_link">Бумага декоративная</a></li>
                                <!--<li class="menu-ul2_li"><a href="" class="menu-ul2_link">FALL WINTER 2016</a></li>-->
                                <!--<li class="menu-ul2_li"><a href="" class="menu-ul2_link">FALL WINTER 2016</a></li>-->
                            </ul>

                        </div>
                    </li>
                    <li class="menu-ul1_li"><router-link to="/" class="list-group-item menu-ul1_link">Home</router-link></li>
                    <li class="menu-ul1_li"><router-link to="/gallery" class="menu-ul1_link">Галерея</router-link></li>
                    <li class="menu-ul1_li"><router-link to="/product" class="menu-ul1_link">Product</router-link></li>
                    <li class="menu-ul1_li"><router-link to="/contacts" class="menu-ul1_link">контакты</router-link></li>
                    <li class="menu-ul1_li deeper">
                        <a href="" class="menu-ul1_link"><span>my account</span></a>
                        <div class="menu-ul2_div">
                            <ul class="menu-ul2">
                                <li class="menu-ul2_li"><a href="#userInfo" onclick="userGo(this)" class="menu-ul2_link">General information</a></li>
                                <li class="menu-ul2_li"><a href="#userAddress" onclick="userGo(this)" class="menu-ul2_link">Addresses</a></li>
                                <li class="menu-ul2_li"><a href="#userWish" onclick="userGo(this)" class="menu-ul2_link">Wish list</a></li>
                                <li class="menu-ul2_li"><a href="#userHistory" onclick="userGo(this)" class="menu-ul2_link">Buying history</a></li>
                                <li class="menu-ul2_li"><a href="" class="menu-ul2_link">Log out</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-ul1_li"><a href="" class="menu-ul1_link">wish list</a></li>
                </ul>
                <div class="menu-back"></div>
            </nav>
        </header>
        <router-view></router-view>
    </div>
    <footer class="footer">
        <div class="footer-line1">
            <div class="footer-menu">
                <h3 class="footer-menu_title">usefull information</h3>
                <ul class="footer-menu_ul">
                    <li class="footer-menu_li"><a href="" class="footer-menu_link">Свяжитесь с нами</a></li>
                    <li class="footer-menu_li"><a href="" class="footer-menu_link">Доставка</a></li>
                    <li class="footer-menu_li"><a href="" class="footer-menu_link">Условия и сроки</a></li>
                    <li class="footer-menu_li"><a href="" class="footer-menu_link">FaQ</a></li>
                    <li class="footer-menu_li"><a href="" class="footer-menu_link">Личный кабинет</a></li>
                    <li class="footer-menu_li"><router-link to="/news" class="footer-menu_link">Блог</router-link></li>
                </ul>
            </div>
        </div>
        <div class="footer-line2">
            <div class="footer-subscribe">
                <div class="footer-subscribe_wrapper">
                    <div class="footer-subscribe_text">Stay up to date with all our news. All in one email.</div>
                    <div class="footer-subscribe_input">
                        <form action="a" id="sbs_form">
                            <input type="text" name="sbs_email" placeholder="Your email address" class="input-base">
                            <button class="btn-base">subscribe</button>
                        </form>
                    </div>
                </div>
                <div class="footer-subscribe_social">
                    <div class="social">
                        <a href="" class="social-link facebook">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  width="21px" height="21px" viewBox="0 0 470.513 470.513" style="enable-background:new 0 0 470.513 470.513;" xml:space="preserve">
                <g>
                    <path d="M271.521,154.17v-40.541c0-6.086,0.28-10.8,0.849-14.13c0.567-3.335,1.857-6.615,3.859-9.853
                        c1.999-3.236,5.236-5.47,9.706-6.708c4.476-1.24,10.424-1.858,17.85-1.858h40.539V0h-64.809c-37.5,0-64.433,8.897-80.803,26.691
                        c-16.368,17.798-24.551,44.014-24.551,78.658v48.82h-48.542v81.086h48.539v235.256h97.362V235.256h64.805l8.566-81.086H271.521z"/>
                </g>
            </svg>
                        </a>
                        <a href="" class="social-link pinterest">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 486.392 486.392" style="enable-background:new 0 0 486.392 486.392;" xml:space="preserve" width="21" height="21">
                <g>
                    <path  d="M430.149,135.248C416.865,39.125,321.076-9.818,218.873,1.642
                        C138.071,10.701,57.512,76.03,54.168,169.447c-2.037,57.029,14.136,99.801,68.399,111.84
                        c23.499-41.586-7.569-50.676-12.433-80.802C90.222,77.367,252.16-6.718,336.975,79.313c58.732,59.583,20.033,242.77-74.57,223.71
                        c-90.621-18.179,44.383-164.005-27.937-192.611c-58.793-23.286-90.013,71.135-62.137,118.072
                        c-16.355,80.711-51.557,156.709-37.3,257.909c46.207-33.561,61.802-97.734,74.57-164.704
                        c23.225,14.136,35.659,28.758,65.268,31.038C384.064,361.207,445.136,243.713,430.149,135.248z"/>
                </g>
            </svg>
                        </a>
                        <a href="" class="social-link instagramm">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve" width="21" height="21">
                <g>
                    <path  d="M20,7c-0.551,0-1-0.449-1-1V4c0-0.551,0.449-1,1-1h2c0.551,0,1,0.449,1,1v2c0,0.551-0.449,1-1,1H20z
                        "/>
                    <path  d="M13,9.188c-0.726,0-1.396,0.213-1.973,0.563c0.18-0.056,0.367-0.093,0.564-0.093
                        c1.068,0,1.933,0.865,1.933,1.934c0,1.066-0.865,1.933-1.933,1.933s-1.933-0.866-1.933-1.933c0-0.199,0.039-0.386,0.094-0.565
                        C9.4,11.604,9.188,12.274,9.188,13c0,2.107,1.705,3.813,3.813,3.813c2.105,0,3.813-1.705,3.813-3.813S15.105,9.188,13,9.188z"/>
                    <g>
                        <path  d="M13,7c3.313,0,6,2.686,6,6s-2.688,6-6,6c-3.313,0-6-2.686-6-6S9.687,7,13,7 M13,5
                            c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S17.411,5,13,5L13,5z"/>
                    </g>
                    <path  d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25
                        C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M24,9h-6.537C18.416,10.063,19,11.461,19,13
                        c0,3.314-2.688,6-6,6c-3.313,0-6-2.686-6-6c0-1.539,0.584-2.938,1.537-4H2V4.875C2,3.29,3.29,2,4.875,2h16.25
                        C22.711,2,24,3.29,24,4.875V9z"/>
                </g>
            </svg>
                        </a>
                        <a href="" class="social-link twitter">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 310 310" style="enable-background:new 0 0 310 310;" xml:space="preserve" width="21" height="21">
                <g >
                    <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
                        c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
                        c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
                        C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
                        c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
                        c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
                        c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
                        c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
                        c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
                        c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
                        c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
                        C307.394,57.037,305.009,56.486,302.973,57.388z"/>
                </g>
            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-line3">
            <div class="footer-bottom">
                <div class="footer-bottom_social"><div class="social">
                        <a href="" class="social-link facebook">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  width="21px" height="21px" viewBox="0 0 470.513 470.513" style="enable-background:new 0 0 470.513 470.513;" xml:space="preserve">
                <g>
                    <path d="M271.521,154.17v-40.541c0-6.086,0.28-10.8,0.849-14.13c0.567-3.335,1.857-6.615,3.859-9.853
                        c1.999-3.236,5.236-5.47,9.706-6.708c4.476-1.24,10.424-1.858,17.85-1.858h40.539V0h-64.809c-37.5,0-64.433,8.897-80.803,26.691
                        c-16.368,17.798-24.551,44.014-24.551,78.658v48.82h-48.542v81.086h48.539v235.256h97.362V235.256h64.805l8.566-81.086H271.521z"/>
                </g>
            </svg>
                        </a>
                        <a href="" class="social-link pinterest">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 486.392 486.392" style="enable-background:new 0 0 486.392 486.392;" xml:space="preserve" width="21" height="21">
                <g>
                    <path  d="M430.149,135.248C416.865,39.125,321.076-9.818,218.873,1.642
                        C138.071,10.701,57.512,76.03,54.168,169.447c-2.037,57.029,14.136,99.801,68.399,111.84
                        c23.499-41.586-7.569-50.676-12.433-80.802C90.222,77.367,252.16-6.718,336.975,79.313c58.732,59.583,20.033,242.77-74.57,223.71
                        c-90.621-18.179,44.383-164.005-27.937-192.611c-58.793-23.286-90.013,71.135-62.137,118.072
                        c-16.355,80.711-51.557,156.709-37.3,257.909c46.207-33.561,61.802-97.734,74.57-164.704
                        c23.225,14.136,35.659,28.758,65.268,31.038C384.064,361.207,445.136,243.713,430.149,135.248z"/>
                </g>
            </svg>
                        </a>
                        <a href="" class="social-link instagramm">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 26 26" style="enable-background:new 0 0 26 26;" xml:space="preserve" width="21" height="21">
                <g>
                    <path  d="M20,7c-0.551,0-1-0.449-1-1V4c0-0.551,0.449-1,1-1h2c0.551,0,1,0.449,1,1v2c0,0.551-0.449,1-1,1H20z
                        "/>
                    <path  d="M13,9.188c-0.726,0-1.396,0.213-1.973,0.563c0.18-0.056,0.367-0.093,0.564-0.093
                        c1.068,0,1.933,0.865,1.933,1.934c0,1.066-0.865,1.933-1.933,1.933s-1.933-0.866-1.933-1.933c0-0.199,0.039-0.386,0.094-0.565
                        C9.4,11.604,9.188,12.274,9.188,13c0,2.107,1.705,3.813,3.813,3.813c2.105,0,3.813-1.705,3.813-3.813S15.105,9.188,13,9.188z"/>
                    <g>
                        <path  d="M13,7c3.313,0,6,2.686,6,6s-2.688,6-6,6c-3.313,0-6-2.686-6-6S9.687,7,13,7 M13,5
                            c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S17.411,5,13,5L13,5z"/>
                    </g>
                    <path  d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25
                        C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M24,9h-6.537C18.416,10.063,19,11.461,19,13
                        c0,3.314-2.688,6-6,6c-3.313,0-6-2.686-6-6c0-1.539,0.584-2.938,1.537-4H2V4.875C2,3.29,3.29,2,4.875,2h16.25
                        C22.711,2,24,3.29,24,4.875V9z"/>
                </g>
            </svg>
                        </a>
                        <a href="" class="social-link twitter">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 310 310" style="enable-background:new 0 0 310 310;" xml:space="preserve" width="21" height="21">
                <g >
                    <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
                        c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
                        c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
                        C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
                        c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
                        c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
                        c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
                        c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
                        c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
                        c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
                        c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
                        C307.394,57.037,305.009,56.486,302.973,57.388z"/>
                </g>
            </svg>
                        </a>
                    </div></div>
                <div class="footer-bottom_author">© 2017 CuDrag.md</div>
                <div class="footer-bottom_visa">
                    <div class="visa payblock"></div><div class="pal payblock"></div><div class="mastercard payblock"></div>
                </div>
                <div class="footer-bottom_copyright">
                    <!--<a href="a">Website Development<br>www.uniweb.md </a>-->
                </div>
            </div>
        </div>
    </footer>
    <div class="modal" id="newsletter">
        <div class="modal-close">
            <svg width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
                <g>
                    <path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
                </g>
            </svg>
        </div>
        <div class="modal-body">
            <div class="modal-title">NEWSLetter</div>
            <div class="modal-title-down">Sign up for our newsletter to recive product and event announcements before anyone else.</div>
            <form action="" id="modal-newsletter">
                <div class="input-wrapper">
                    <input type="text" placeholder="Your e-mail*" class="gray-input" name="modal_newsletter_email">
                    <div class="input-error">Your e-mail</div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Country*" class="gray-input" name="modal_newsletter_country">
                    <div class="input-error">Country</div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Zipcode*" class="gray-input" name="modal_newsletter_zipcode">
                    <div class="input-error">Zipcode</div>
                </div>
                <div class="input-wrapper"><button type="submit" class="btn-color">Submit</button></div>
            </form>
        </div>
    </div>

    <div class="modal" id="tableSize">
        <div class="modal-close">
            <svg width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
                <g>
                    <path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
                </g>
            </svg>
        </div>
        <div class="modal-body">
            <div class="modal-title">Size guide</div>
            <div class="modal-title-down">Please use these size charts to help determine your size. Because we carre wide variety of brand and styles, sizing may slightly vary.</div>
            <table class="table-size">
                <thead>
                <tr>
                    <td>size</td>
                    <td>pant size(inches)</td>
                    <td>us</td>
                    <td>uk</td>
                    <td>australia</td>
                    <td>france</td>
                    <td>italy</td>
                    <td>japan</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>xs</td>
                    <td>24</td>
                    <td>03</td>
                    <td>57</td>
                    <td>45</td>
                    <td>55</td>
                    <td>99</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>xxs</td>
                    <td>24</td>
                    <td>03</td>
                    <td>57</td>
                    <td>45</td>
                    <td>55</td>
                    <td>99</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>sm</td>
                    <td>24</td>
                    <td>03</td>
                    <td>57</td>
                    <td>45</td>
                    <td>55</td>
                    <td>99</td>
                    <td>2</td>
                </tr>
                </tbody>
            </table>
            <p>Have questions about sizing?</p>
            <p>Email us <a href="mailto:info@divero.com">info@divero.com</a> or Call <strong>373-022-134-567</strong></p>
        </div>
    </div>

    <div class="modal" id="one-click">
        <div class="modal-close">
            <svg width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
                <g>
                    <path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
                </g>
            </svg>
        </div>
        <div class="modal-body">
            <div class="modal-title">buy in one click</div>
            <div class="modal-title-down">Please use these size charts to help determine your size. Because we carre wide variety of brand and styles, sizing may slightly vary.</div>
            <form action="" id="buyOneClick">
                <div class="input-wrapper">
                    <input type="text" placeholder="Name" class="gray-input" name="buyOneClick_name">
                    <div class="input-error">Enter name</div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Your e-mail*" class="gray-input" name="buyOneClick_email">
                    <div class="input-error">Your e-mail</div>
                </div>
                <div class="input-wrapper"><button class="btn-color">Submit</button></div>
            </form>
        </div>
    </div>

    <div class="modal" id="orders">
        <div class="modal-close">
            <svg width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
                <g>
                    <path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
                </g>
            </svg>
        </div>
        <div class="modal-body">
            <div class="modal-title">request</div>
            <div class="modal-title-down">Now that you are familiar with our creativity and learn about what we do, we can write a letter to be our chosen customer.</div>
            <form action="" id="aa">
                <div class="input-wrapper">
                    <input type="text" placeholder="Your name*" class="gray-input" name="">
                    <div class="input-error">Your name</div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Your lastname*" class="gray-input" name="">
                    <div class="input-error">Your lastname</div>
                </div>
                <div class="input-wrapper">
                    <div class="acc-form_divselect">
                        <div class="acc-form_divwrapper">
                            <select name="" id="" >
                                <option value="" disabled selected>Select country</option>
                                <option value="p" >Moldova</option>
                                <option value="n" >Russia</option>
                            </select>
                        </div>
                    </div>
                    <div class="input-error">Select country</div>
                </div>
                <input type="text" hidden name="prod_id">
                <div class="input-wrapper">
                    <input type="text" placeholder="Your e-mail*" class="gray-input" name="mail">
                    <div class="input-error">Your e-mail</div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Subject*" class="gray-input" name="">
                    <div class="input-error">Zipcode</div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Your phone*" class="gray-input" name="">
                    <div class="input-error">Your phone</div>
                </div>
                <div class="input-wrapper">
                    <textarea name="" class="gray-input" placeholder="Your message*"></textarea>
                    <div class="input-error">Your e-mail</div>
                </div>
                <div class="input-wrapper"><button type="submit" class="btn-link">Send request</button></div>
            </form>
        </div>
    </div>

    <div class="modal" id="social">
    <div class="modal-close">
        <svg width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
            <g>
                <path d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
            </g>
        </svg>
    </div>
    <div class="modal-body">
        <div class="modal-title">NEWSLetter</div>
        <div class="modal-title-down">Sign up for our newsletter to recive product and event announcements before anyone else.</div>
        <form action="" id="modal-social">
            <div class="input-wrapper">
                <input type="text" placeholder="Your e-mail*" class="gray-input" name="modal_newsletter_email">
                <div class="input-error">Your e-mail</div>
            </div>
            <div class="input-wrapper"><button type="submit" class="btn-color">Submit</button></div>
        </form>
    </div>
</div>
</div>
<script>

    window.Laravel =  {!!  json_encode(['csrfToken' => csrf_token(),]) !!}
</script>

<!-- ========= scripts ========= -->
<script src="/js/app.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script><!-- on catalog2 -->
<script src="/js/lib/lightbox.min.js"></script><!-- on catalog2 -->
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-touch-events/1.0.5/jquery.mobile-events.js"></script>
{{--<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min.js"></script>--}}
<script src="/js/lib/jquery.validate.min.js"></script>
<script src="/js/lib/plugin.js"></script>
<script src="/js/lib/buggfill.js"></script>


<script>window.viewportUnitsBuggyfill.init();</script>
<script>
    var modalShow = false;
    if( !(getCookie('modalShow'))){
        modalShow = true;
        writeCookie('modalShow','true',1);
        modalUp('newsletter');
    }else{
        modalShow = false;
    }
    function writeCookie (key, value, days) {
        var date = new Date();
        days = days || 365;
        date.setTime(+ date + (days * 86400000));
        window.document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + ";";
        return value;
    }
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
</script>

<!-- ========= /scripts ========= -->



</body>
</html>