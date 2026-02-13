function Decrement({label, count,  setCount, numberToSubtract}) {

  const handleDecrement=()=> {
    setCount(count - numberToSubtract)
  }
  
  return (
    <button className="decrement-btn" onClick={handleDecrement}>
      {label}
      </button>
  )

}
 
export default Decrement 