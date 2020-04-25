import React, {Component, Fragment} from 'react';
import {withAlert} from "react-alert";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {error, alert} = this.props;
        if (error !== prevProps.error) {
            if (error.message.name) {
                alert.error(`Name: ${error.message.name}`);
            }
            if (error.message.email) {
                alert.error(`Email: ${error.message.email }`);
            }
            if (error.message.message) {
                alert.error(`Message: ${error.message.message }`);
            }
        }
    }

    render() {
        return <Fragment/>
    }
}

const mapStateToProps = state => ({
    error: state.errors
});

export default connect(mapStateToProps)(withAlert()(Alerts));