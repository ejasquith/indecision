const app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const addOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.optionInput.value;

    if (option) {
        app.options.push(option);
        e.target.elements.optionInput.value = '';
    }

    render();
};

const clearOptions = (e) => {
    app.options = [];
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Options:' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={clearOptions}>Clear Options</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
    
            <form onSubmit={addOption}>
                <input type='text' name='optionInput' id='optionInput'></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
render();