import React, { Component } from "react";
import './App.css';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  changeState = (e) => {
    const name = e.target.name;

    this.setState((prevState) => ({
      [name]: prevState[name] + 1,
    }));
  };

  calculateTotalFeedback = () => Object.values(this.state).reduce((sum, value) => (sum += value), 0);

  calculatePositiveFeedbackPercentage = () => Math.round((this.state.good / this.calculateTotalFeedback()) * 100) || 0;

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.changeState}
          />
        </Section>
        <Section title="Statistics">
          {this.calculateTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.calculateTotalFeedback()}
              positivePercentage={this.calculatePositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
export default App;
