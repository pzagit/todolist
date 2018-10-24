import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";

const styles = theme => ({
  textField: {
    margin: "auto"
  },
  background: {
    width: "500px",
    height: "450px",
    margin: "auto"
  },
  centerDiv: {
    margin: "auto",
    paddingTop: "35%"
  },
  button: {
    marginTop: "1em"
  },
  list: {
    listStyle: "none"
  }
});

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    task: "",
    submit: ""
  };

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    this.setState({
      task: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.task
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <form onSubmit={this.handleSubmit}>
          <div className={classes.centerDiv}>
            <TextField
              label="To do:"
              placeholder="Enter a task"
              InputProps={{
                className: classes.textField
              }}
              value={this.state.task}
              variant="outlined"
              onChange={this.handleChange}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            onSubmit={this.handleSubmit}
          >
            Submit
          </Button>
        </form>
        <ul className={classes.list}>
          <li>
            <h1>{this.state.submit}</h1>
          </li>
        </ul>
      </div>
    );
  }
}

export default withStyles(styles)(Todo);
