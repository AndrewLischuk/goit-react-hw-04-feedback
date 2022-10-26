import { Container } from 'components/Container/Container';
import { FeedbackOptions } from 'components/FeedbackPage/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Component } from 'react';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

class FeedbackPage extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    ).toFixed(0);
  };

  render() {
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={() => this.countTotalFeedback()}
              positivePercentage={() => this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default FeedbackPage;
