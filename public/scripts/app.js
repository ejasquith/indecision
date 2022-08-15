'use strict';

console.log('App.js running!');

var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);

var user = {
    fname: 'Emily',
    lname: 'Asquith',
    age: 22,
    location: 'Kendal, UK'
};

var userInfoTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.fname,
        ' ',
        user.lname
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
