<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/et-site.css">
    <link rel="stylesheet" type="text/css" href="css/et-spritesheet.css">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <script type="text/javascript" src="libs/jquery.js"></script>
    <script type="text/javascript" src="libs/underscore.js"></script>
    <script type="text/javascript" src="libs/backbone.js"></script>
    <script type="text/javascript" src="data/siteData.js"></script>
</head>
<body>

<div id="et-app">
    <div id="popup" class="popup-hidden">
        <h2 class="help-title">Help</h2>
        <span class="close-icon sprite-et-spritesheet et-spritesheet-closeX"></span>
        <div id="help-content"></div>
    </div>
    <div id="header">
        <div class="logo pull-left">
            <span class="logo-text">ExactTarget.</span>
        </div>
        <div class="account-menu pull-right">
            <ul>
                <li class="welcome">Welcome John!</li>
                <li><a href="#account" id="account-link">Account</a></li>
                <li><a href="#help" id="help-link">Help</a></li>
                <li><a href="#logout" id="logout-link">Logout</a></li>
            </ul>
        </div>
    </div>

    <div id="content">
        <div id="left-nav">
            <div class="heading">
                <span class="sprite-et-spritesheet et-spritesheet-icon-hub icon-hub"></span>
                <span class="nav-text hub-text">Interactive<br/>Marketing Hub</span>
            </div>
            <ul id="left-nav-list"></ul>
        </div>

        <div id="main">
            <div id="calendar-container">
                <div id="calendar">
                    <img src="images/tmpCalendarPH.jpg" alt="temporary placeholder for the calendar widget"/>
                </div>
            </div>
            <div id="pulse-container">
                <div id="pulse-header">
                    <span class="sprite-et-spritesheet et-spritesheet-pulse-title pulse-title"></span>
                </div>
                <div id="pulse-content">
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript" src="src/app.js"></script>
</body>
</html>
