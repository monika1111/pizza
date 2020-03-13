import React, {Component} from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

class MultiDropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [{name: 'Srigar', id: 1},{name: 'Sam', id: 2}, {name: 'bb', id: 3}, {name: 'mm', id: 4}]
        };
    }

    render() {
        return (
            <Multiselect
                options={this.state.options}
                selectedValues={this.state.selectedValue}
                style={{multiselectContainer: {maxWidth: '200px'}}}
                // onSelect={this.onSelect}
                // onRemove={this.onRemove}
                displayValue="name"
            />
        );
    }
}

export default MultiDropDown;