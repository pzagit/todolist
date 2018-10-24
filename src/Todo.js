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
    marginTop: "2em"
  },
  list: {
    fontSize: "1.5em",
    paddingTop: "1em",
    margin: "0",
    listStyle: "none",
    padding: "0"
  }
});

class Todo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    task: "",
    submit: []
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
    this.setState(prevState => ({
      submit: [...prevState.submit, this.state.task]
    }));
  }

  clearForm = () => {
    this.setState({
      task: "",
      submit: ""
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
      <ul className={classes.list}>
          {this.state.submit.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <div className={classes.centerDiv}>
            <TextField
              label="To do:"
              placeholder="Enter a task"
              InputProps={{
                className: classes.textField
              }}
              variant="outlined"
              value={this.state.task}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Todo);
