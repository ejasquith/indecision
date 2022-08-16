class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer.';
        const options = ['Option 1', 'Option 2', 'Option 3'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handle pick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I Do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    removeAll() {
        alert('remove all');
    }

    render() {
        return (
            <div>
                <button onClick={this.removeAll}>Remove All</button>
                <p>Your options:</p>
                <ul>
                    {this.props.options.map((option, i) => <Option option={option} key={i} />)}
                </ul>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.option}</li>
        );
    }
}

class AddOption extends React.Component {
    addOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" id="option" />
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));