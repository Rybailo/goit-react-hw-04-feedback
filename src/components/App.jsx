import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  /* state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }; */

  const statisticsChange = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));

    /* setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    }); */
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const persentege =
      (100 / (feedback.good + feedback.neutral + feedback.bad)) * feedback.good;
    return persentege.toFixed(0);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <section>
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={statisticsChange}
            ></FeedbackOptions>
          </Section>
          {countTotalFeedback() > 0 ? (
            <Section title="Statistics">
              <Statistics
                good={feedback.good}
                neutral={feedback.neutral}
                bad={feedback.bad}
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
              ></Statistics>
            </Section>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </div>
      </section>
    </div>
  );
};
