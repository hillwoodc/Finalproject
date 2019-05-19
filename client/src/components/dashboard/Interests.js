import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteInterests } from "../../actions/profile";

const Category = ({ category, deleteInterests }) => {
  const interests = category.map(cat => (
    <tr key={cat._id}>
      <td>{cat.company}</td>
      <td className='hide-sm'>{cat.title}</td>) : (
      <td>
        <button
          onClick={() => deleteInterests(cat._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{interests}</tbody>
      </table>
    </Fragment>
  );
};

Category.propTypes = {
  interests: PropTypes.array.isRequired,
  deleteInterests: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteInterests }
)(Category);
