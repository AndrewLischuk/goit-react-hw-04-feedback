import { Container } from 'components/Container/Container';
import { Component } from 'react';

class FeedbackPage extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addGoodFeedback = () => {
    this.setState(state => ({
      good: this.state.good + 1,
    }));
  };
  addNeutralFeedback = () => {
    this.setState(state => ({
      neutral: this.state.neutral + 1,
    }));
  };
  addBadFeedback = () => {
    this.setState(state => ({
      bad: this.state.bad + 1,
    }));
  };
  render() {
    return (
      <Container>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.addGoodFeedback}>Good</button>
          <button onClick={this.addNeutralFeedback}>Neutral</button>
          <button onClick={this.addBadFeedback}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <span>Good: {this.state.good}</span>
          <span>Neutral: {this.state.neutral}</span>
          <span>Bad: {this.state.bad}</span>
        </div>
      </Container>
    );
  }
}

export default FeedbackPage;
