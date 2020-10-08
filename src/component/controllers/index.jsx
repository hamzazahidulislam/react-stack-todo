import React from 'react';
import Proptypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import SearchPanel from './search-panel';
import FilterController from './filter-controller';
import ViewController from './view-controller';
import BulkController from './bulk-controller';
const Controller = ({ term, changeView, view, handleSearch, toggleFom, handleFilter, clearSelected, clearCompleted, reset }) => (
    <div>
        <SearchPanel
            term={term}
            handleSearch={handleSearch}
            toggleFom={toggleFom}
        />
        <Row className='my-4'>
            <Col md={{ size: 4 }}>
                <FilterController
                    handleFilter={handleFilter}
                />
            </Col>
            <Col md={{ size: 4 }}>
                <ViewController view={view} changeView={changeView} />
            </Col>
            <Col md={{ size: 4 }} className='d-flex'>
                <div className='ml-auto'>
                    <BulkController
                        clearSelected={clearSelected}
                        clearCompleted={clearCompleted}
                        reset={reset}
                    />
                </div>
            </Col>
        </Row>
    </div>
);
Controller.propTypes = {
    term: Proptypes.string.isRequired,
    view: Proptypes.string.isRequired,
    handleSearch: Proptypes.func.isRequired,
    toggleFom: Proptypes.func.isRequired,
    handleFilter: Proptypes.func.isRequired,
    changeView: Proptypes.func.isRequired,
    clearSelected: Proptypes.func.isRequired,
    clearCompleted: Proptypes.func.isRequired,
    reset: Proptypes.func.isRequired,
}
export default Controller;