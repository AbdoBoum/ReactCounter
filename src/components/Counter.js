import React from 'react';

class Counter extends React.Component {

    state = {seconds: 40};
    color = 'blue';

    componentDidMount() {
        setInterval(() => {
            const seconds = this.state;
            if (this.state.seconds > 0) {
                this.setState(({seconds}) => ({
                    seconds: seconds - 1
                }))
            }

        }, 1000)
    }

    renderCounter() {
        const {seconds} = this.state;
        if (seconds > 20) {
            this.color = 'blue'
        } else if (seconds > 12) {
            this.color = 'orange';
        } else {
            this.color = 'red'
        }
        return (
            <div className="col-md-6 mx-auto py-4 text-white" style={{backgroundColor: `${this.color}`}}>
                {seconds < 10 ? `0${seconds}` : seconds}
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.renderCounter()}
            </React.Fragment>);
    }
}

export default Counter;
