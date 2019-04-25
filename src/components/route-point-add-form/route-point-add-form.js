import React, { Component } from 'react';
import { connect } from 'react-redux';

import './route-point-add-form.css';

import { addRoutePoint } from '../../actions';

class PointAddForm extends Component {
    state = {
        label:''
    };

    onLabelChange = (e) =>{
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { label } = this.state;
        this.setState({ label: '' });
        const cb = this.props.addRoutePoint || (() => {});
        cb(label);
    };

    render() {
        return (
            <form className="bottom-panel d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       value={this.state.label}
                       onChange={this.onLabelChange}
                       placeholder="Новая точка маршрута"/>
            </form>
        )
    }
}

const mapDispatchToProps = {
        addRoutePoint
};

export default connect(null, mapDispatchToProps)(PointAddForm);