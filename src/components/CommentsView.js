import React, { Component } from "react";

class CommentsView extends Component {
  renderItem = comment => (
    <div className="card" style={styles.card}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{comment}</p>
      </div>
    </div>
  );
  render() {
    const { comments } = this.props;
    const renderedComments = comments.map((comment, key) =>
      this.renderItem(comment, key)
    );
    return <div>{renderedComments}</div>;
  }
}

const styles = {
  card: {
    width: "18rem"
  }
};

export default CommentsView;
