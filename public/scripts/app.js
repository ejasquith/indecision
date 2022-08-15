'use strict';

console.log('App.js running!');

var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Options:" : "No options"
    )
);

var user = {
    fname: 'Emily',
    lname: 'Asquith',
    age: 22,
    location: 'Kendal, UK'
};

var getLocation = function getLocation(user) {
    return user.location && React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    );
};

var userInfoTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.fname ? user.fname : 'Anonymous',
        ' ',
        user.lname
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
