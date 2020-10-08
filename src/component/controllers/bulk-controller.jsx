import React from 'react';
import Proptypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';

const BulkController = ({ clearSelected, clearCompleted, reset }) => (
    < ButtonGroup >
        <Button color='danger' onClick={clearSelected}>Clear Selected</Button>
        <Button color='danger' onClick={clearCompleted}>Clear Completed</Button>
        <Button color='danger' onClick={reset}>Reset</Button>
    </ ButtonGroup >
);
BulkController.propTypes = {
    clearSelected: Proptypes.func.isRequired,
    clearCompleted: Proptypes.func.isRequired,
    reset: Proptypes.func.isRequired
}
export default BulkController;