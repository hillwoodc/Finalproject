import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    name: "",
    location: ""
  });

  const [displayInterests, toggleInterests] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      name: loading || !profile.name ? "" : profile.name,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      health: loading || !profile.interests ? "" : profile.interests.health,
      automotive:
        loading || !profile.automotive ? "" : profile.interests.automotive,
      events: loading || !profile.interests ? "" : profile.interests.events,
      groceries:
        loading || !profile.interests ? "" : profile.interests.groceries,
      household:
        loading || !profile.interests ? "" : profile.interests.household,
      educational:
        loading || !profile.interests ? "" : profile.interests.educational
    });
  }, [loading, getCurrentProfile]);

  const {
    name,
    location,
    automotive,
    groceries,
    events,
    household,
    educational,
    health
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className='my-2'>
          <button
            onClick={() => toggleInterests(!displayInterests)}
            type='button'
            className='btn btn-light'
          >
            Add Interests
          </button>
          <span>Optional</span>
        </div>

        {displayInterests && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x' />
              <input
                type='toggle'
                placeholder='automotive'
                name='automotive'
                value={automotive}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x' />
              <input
                type='text'
                placeholder='household'
                name='household'
                value={household}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x' />
              <input
                type='text'
                placeholder='events'
                name='events'
                value={events}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x' />
              <input
                type='text'
                placeholder='health'
                name='health'
                value={health}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='educational'
                name='educational'
                value={educational}
                onChange={e => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x' />
              <input
                type='text'
                placeholder='groceries'
                name='groceries'
                value={groceries}
                onChange={e => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
