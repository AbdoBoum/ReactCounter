import React from 'react';

class Counter extends React.Component {

    state = {seconds: this.props.seconds || 40, isCounting: true};
    color = 'blue';

    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.state.seconds > 0) {
                this.setState(({seconds}) => ({
                    seconds: seconds - 1
                }))
            }

        }, 1000);
    }

    renderCounter() {
        if (this.state.seconds > 20) {
            this.color = 'blue'
        } else if (this.state.seconds > 12) {
            this.color = 'orange';
        } else {
            this.color = 'red'
        }
        return (
            <div className="col-md-4 mx-auto py-4 text-white" style={{backgroundColor: `${this.color}`}} id="rec">
                {this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}
            </div>
        );
    }

    startCounter = () => {
        this.setState({isCounting: true});
        this.myInterval = setInterval(() => {
            if (this.state.seconds > 0) {
                this.setState(({seconds}) => ({
                    seconds: seconds - 1
                }))
            }

        }, 1000);
    };

    stopCounter = () => {
        this.setState({isCounting: false});
        clearInterval(this.myInterval);
    };

    renderButtons = () => {
        if(this.state.isCounting) {
            return(
                <React.Fragment>
                    <div className="btn btn-green disabled" onClick={this.startCounter}>Start</div>
                    <div className="btn btn-red" onClick={this.stopCounter}>Stop</div>
                </React.Fragment>
            )
        } else {
            return(
                <React.Fragment>
                    <div className="btn btn-green" onClick={this.startCounter}>Start</div>
                    <div className="btn btn-red disabled" onClick={this.stopCounter}>Stop</div>
                </React.Fragment>
            )
        }
    };

    render() {
        return (
            <React.Fragment>
                {this.renderCounter()}
                {this.renderButtons()}
            </React.Fragment>);
    }
}

export default Counter;
