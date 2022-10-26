export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(item => (
        <button
          key={item}
          name={item}
          onClick={event => onLeaveFeedback(event.target.name)}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
};
