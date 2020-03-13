import React, {Component} from 'react';
import './style.css'

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    reduceCount = () => {
        const {count, setCount} = this.props;
        setCount(count - 1);
    };

    increaseCount = () => {
        const {count, setCount} = this.props;
        setCount(count + 1);
    };

    onChange = (e) => {
        const {setCount} = this.props;
        setCount(e.target.value);
    };

    render() {
        const {count} = this.props;
        return (
            <div className='counter-cont'>
                <button onClick={this.reduceCount} className='minus'>-</button>
                <input type='text' value={count} onChange={this.onChange} className='count'/>
                <button onClick={this.increaseCount} className='plus'>+</button>
            </div>
        );
    }
}

export default Counter;