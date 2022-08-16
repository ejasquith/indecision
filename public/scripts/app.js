'use strict';

var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var addOption = function addOption(e) {
    e.preventDefault();

    var option = e.target.elements.optionInput.value;

    if (option) {
        app.options.push(option);
        e.target.elements.optionInput.value = '';
    }

    render();
};

var clearOptions = function clearOptions(e) {
    app.options = [];
    render();
};

var render = function render() {
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
            app.options.length > 0 ? 'Options:' : 'No options'
        ),
        React.createElement(
            'button',
            { onClick: clearOptions },
            'Clear Options'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option, i) {
                return React.createElement(
                    'li',
                    { key: i },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: addOption },
            React.createElement('input', { type: 'text', name: 'optionInput', id: 'optionInput' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
render();
