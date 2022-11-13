import { Container } from 'components/Container/Container';
import { FeedbackOptions } from 'components/FeedbackPage/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { useState } from 'react';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

const FeedbackPage = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    event === 'good' && setGood(good + 1);
    event === 'neutral' && setNeutral(neutral + 1);
    event === 'bad' && setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / (good + neutral + bad)) * 100).toFixed(0);
  };

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={() => countTotalFeedback()}
            positivePercentage={() => countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
};

export default FeedbackPage;
