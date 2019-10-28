import React from 'react';

class Counter extends React.Component {

    state = {seconds: 40, color: 'blue'};

    componentDidMount() {
        setInterval(() => {
            const seconds = this.state;
            if (this.state.seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }

        }, 1000)
    }


    render() {
        const {seconds, color} = this.state;
        return (
            <div className="col-md-6 mx-auto">
                { seconds < 10 ? `0${ seconds }` : seconds }
            </div>
        );
    }
}

export default Counter;
