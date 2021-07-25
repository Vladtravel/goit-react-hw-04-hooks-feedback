import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map((item) => (
      <button key={item} className="btn-good" type="button" onClick={() => onLeaveFeedback(item)}>
        {item}
      </button>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;
