import React, { Component } from 'react';

class CommentInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ''
    };
  };

  saveNewComment = comment => {
    this.setState({
      comment
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <input
          value={this.state.comment}
          type="text"
          className="form-control"
          placeholder="Novo comentário..."
          onChange={(e) => this.saveNewComment(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Comentar</button>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
}

export default CommentInput;