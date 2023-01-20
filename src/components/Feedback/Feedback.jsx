import React, { useState } from 'react';
import css from './Feedback.module.css';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  console.log(options[2]);

  const addsReviewFeedbackGood = state => {
    setState(prevState => prevState + 1);
    console.log('button +1');
  };

  const countTotalFeedback = () => {
    let TotalReviews = good + neutral + bad;
    return TotalReviews;
  };

  const countPositiveFeedbackPercentage = () => {
    let FeedbackPercentage = Math.round((good / countTotalFeedback()) * 100);
    return FeedbackPercentage;
  };

  return (
    <div className={css.boxFeedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={addsReviewFeedbackGood()}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          totalPercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}

// class Feedback extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addsReviewFeedback = option => {
//     this.setState(prevstate => {
//       return { [option]: prevstate[option] + 1 };
//     });
//     console.log('button +1');
//   };

//   countTotalFeedback = () => {
//     let TotalReviews = this.state.good + this.state.neutral + this.state.bad;
//     return TotalReviews;
//   };

//   countPositiveFeedbackPercentage = () => {
//     let FeedbackPercentage = Math.round(
//       (this.state.good / this.countTotalFeedback()) * 100
//     );
//     return FeedbackPercentage;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);

//     return (
//       <div className={css.boxFeedback}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.addsReviewFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             totalPercentage={this.countPositiveFeedbackPercentage()}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

// export default Feedback;
