import React, { Component } from 'react';
import CommentInput from './components/CommentInput';
import CommentView from './components/CommentsView';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.comments}>
          <CommentView />
        </div>
        <div style={styles.newComment}>
          <CommentInput />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  comments: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }
}

export default App;
