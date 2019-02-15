import React, { Component } from 'react'

class CommentInput extends Component {
  render() {
    return (
      <div style={styles.container}>
        <input type="text" className="form-control" placeholder="Novo comentário..." />
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