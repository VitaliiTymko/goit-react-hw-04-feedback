import React from 'react';
import css from './Feedback.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addsReviewFeedback = option => {
    this.setState(prevstate => {
      return { [option]: prevstate[option] + 1 };
    });
    console.log('button +1');
  };

  countTotalFeedback = () => {
    let TotalReviews = this.state.good + this.state.neutral + this.state.bad;
    return TotalReviews;
  };

  countPositiveFeedbackPercentage = () => {
    let FeedbackPercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return FeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div className={css.boxFeedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addsReviewFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            totalPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;
