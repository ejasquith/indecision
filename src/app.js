class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer.</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I Do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Your options:</p>
                <ul>
                    <Option />
                    <Option />
                </ul>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>Option</li>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="option" id="option"></input>
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));