import React from 'react';
import Proptypes from 'prop-types';
import { Input, Button } from 'reactstrap';

const SearchPanel = ({ term, handleSearch, toggleFom }) => (
    <div className='d-flex'>
        <Input
            placeholder='Enter Serach Term'
            className='mr-3'
            value={term}
            onChange={e => handleSearch(e.target.value)}
        />
        <Button color='success' onClick={toggleFom}>
            new
        </Button>
    </div>
);
SearchPanel.propTypes = {
    term: Proptypes.string.isRequired,
    handleSearch: Proptypes.func.isRequired,
    toggleFom: Proptypes.func.isRequired
}
export default SearchPanel;