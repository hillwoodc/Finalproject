import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addInterests } from '../../actions/profile';

const AddInterests = ({ addInterests, history }) => {
  const [formData, setFormData] = useState({
    household: '',
    events: '',
    automotive: '',
    health: '',
    educational: '',
    groceries: ''
   });

  const { household, events, automotive, health, educational, groceries } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add An Interest</h1>
  
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addInterests(formData, history);
        }}
      >  
        <div className='form-group'>
            <input
              type='toggle'
              name='household'
              checked={household}
              value={household}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='form-group'>
            <input
              type='toggle'
              name='events'
              checked={events}
              value={events}
              onChange={e => onChange(e)}
            />
          </div>

         <div className='form-group'>
            <input
              type='toggle'
              name='automotive'
              checked={automotive}
              value={automotive}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='form-group'>
            <input
              type='toggle'
              name='health'
              checked={health}
              value={health}
              onChange={e => onChange(e)}
            />
          </div>

         <div className='form-group'>
            <input
              type='toggle'
              name='educational'
              checked={educational}
              value={educational}
              onChange={e => onChange(e)}
            />
          </div>

          <div className='form-group'>
            <input
              type='toggle'
              name='groceries'
              checked={groceries}
              value={groceries}
              onChange={e => onChange(e)}
            />
          </div>    
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddInterests.propTypes = {
  addInterests: PropTypes.func.isRequired
};

export default connect(
  null,
  { addInterests }
)(withRouter(AddInterests));
