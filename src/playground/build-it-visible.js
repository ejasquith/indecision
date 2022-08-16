let visible = false;

const toggleVisible = () => {
    visible = !visible;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisible}>{visible ? 'Hide Details' : 'Show Details'}</button>
            {visible && <div><p>Here are some details.</p></div>}
        </div>
    );

    ReactDOM.render(template, appRoot)
};

const appRoot = document.getElementById('app');
render();