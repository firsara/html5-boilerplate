var app = {};

app.desktop = {};
app.tablet = {};
app.mobile = {};
app.global = {};
app.helper = {};


app.breakpoints = ['desktop', 'tablet', 'mobile'];

app.desktop.query = 'screen and (min-width: 980px)';
app.tablet.query = 'screen and (min-width: 768px) and (max-width: 979px)';
app.mobile.query = 'screen and (max-width: 767px)';