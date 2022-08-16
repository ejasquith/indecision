let count = 0;

const incrementCount = () => {
    count++;
    renderCounterApp();
}
const decrementCount = () => {
    count--;
    renderCounterApp();
}
const resetCount = () => {
    count = 0;
    renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementCount}>+1</button>
            <button onClick={decrementCount}>-1</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();