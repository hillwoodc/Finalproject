import React from "react";
import PropTypes from "prop-types";

const ProfileInterests = ({
  interests: { health, automotive, events, household, groceries, educational }
}) => (
  <div>
    <h3 className='text-dark'>{health}</h3>
    <h3 className='text-dark'>{automotive}</h3>
    <h3 className='text-dark'>{events}</h3>
    <h3 className='text-dark'>{household}</h3>
    <h3 className='text-dark'>{groceries}</h3>
    <h3 className='text-dark'>{educational}</h3>
  </div>
);

ProfileInterests.propTypes = {
  Interests: PropTypes.array.isRequired
};

export default ProfileInterests;
