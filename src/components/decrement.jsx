function Decrement({symbol, label, count, setCount}) {

  const handleDecrement=()=> {
    setCount(count - 1)
  }
  
  return (
    <button className="decrement-btn" onClick={handleDecrement}>{symbol}{label}</button>
  )

}
 
export default Decrement 