function Reset({ count, setCount }) {

  const handleReset = () => {
    setCount(0)
  }
  
  return (
    <button className="reset-btn" onClick={handleReset}>Reset</button>
  )
}
 
export default Reset 