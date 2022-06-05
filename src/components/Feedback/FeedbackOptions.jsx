import React from 'react';
import propTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <> <ul className={styles.list}>
                {
                    options.map((option) => (
                        <li className={styles.item} key={option}>
                            <button
                                className={styles.btn}
                                name={option}
                                type="button"
                                onClick={onLeaveFeedback}
                            >
                                {option}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
  options: propTypes.array.isRequired,
};

export default FeedbackOptions;