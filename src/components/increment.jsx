function Increment({ label, count, setCount, numberToAdd }) {

  const handleIncrement = () => {
    setCount(count + numberToAdd);
  };

  return (
    <button className="increment-btn" onClick={handleIncrement}>
      {label}
    </button>
  );
}

export default Increment;
