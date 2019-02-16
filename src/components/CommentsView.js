import React, { Component } from 'react';

class CommentsView extends Component {
  renderItem = (comment, key) => (
    <div className='card' style={styles.card} key={key}>
      <div className='card-body'>
        <h5 className='card-title'>Comentário {key + 1}</h5>
        <p className='card-text'>{comment}</p>
      </div>
    </div>
  );

  render() {
    const { comments } = this.props;
    const renderedComments = comments.map((comment, key) =>
      this.renderItem(comment, key)
    );
    return <div style={styles.container}>{renderedComments}</div>;
  }
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  card: {
    width: '18rem',
    margin: 10
  }
};

export default CommentsView;
