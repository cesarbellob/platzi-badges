import React from 'react';

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log({ value: e.target.value, name: e.target.name });
  };

  handleClick = (e) => {
    console.log('Button was click!');
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submit!');
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>FirstName</label>
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="firstName"
            />
          </div>
          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
