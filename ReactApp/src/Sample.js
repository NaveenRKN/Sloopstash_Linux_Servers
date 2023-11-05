import React from 'react';

class Sample extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Naveen",
            age: "28"
        }
    }

    changeColor = () => {
        this.setState({ name: "kiruthi" });
        this.setState({ age: "20" });
    }

    static getDerivedStateFromProps(props, state) {
        return { name: props.name };
    }

    render() {
        return (
            <div>
                <p> Class one da vennai {this.props.naveen} - {this.state.name} - {this.state.age} </p>
                <button type="button" onClick={this.changeColor}>Click me </button>

            </div>
        )
    }
}


export default Sample;
