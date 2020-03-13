import React, {Component} from 'react';
import Select from 'react-select';
import './style.css';
import {extraIngredients} from "../../configs/constants";

class IngredientsDropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null,
        };
    }

    handleChange = selectedOption => {
        const {setIngredients} = this.props;
        setIngredients(selectedOption);
    };

    render() {
        const { selectedIngredients } = this.props;

        return (
            <Select className='ingredients'
                value={selectedIngredients}
                onChange={this.handleChange}
                options={extraIngredients}
                isMulti={true}
            />
        );
    }
}

export default IngredientsDropDown;