import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'

const btns = [5, 10, 15, 25, 50]

function App() {
  const [amount, setAmount] = useState(4.27)
  const [total, setTotal] = useState(32.79)
  const [bill, setBill] = useState(Number(142.55))
  const [people, setPeople] = useState(Number(5))
  const [tip, setTip] = useState('')
  const [activeNo, setActiveNo] = useState(null)

  const handleTip = (e, index) => {
    setTip(Number(e.target.value))
    setActiveNo(index)
  }

  const calculate = () => {
    const tipPercent = tip / 100
    const orginalTip = bill / people
    const Amount = Number((orginalTip * tipPercent).toFixed(2))
    setAmount(Amount)
    setTotal((orginalTip + Amount).toFixed(2))
  }

  const reset = () => {
    setAmount(0)
    setTotal(0)
    setPeople(0)
    setBill(0)
    setTip(0)
  }

  return (
    <div className='wrapper'>
      <h2 className='heading'>
        SPLI <br /> TTER
      </h2>
      <div className='main-container'>
        <div className='inner-container'>
          <div className='selector-menu'>
            <h4>Bill</h4>
            <div className='form-control'>
              <input
                type='text'
                placeholder='0'
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
              />
              <span>$</span>
            </div>
            <h4>Select Tip %</h4>
            <div className='tip-btns'>
              {/* <button className='tip-btn' value='5' onClick={handleTip}>
                5%
              </button>
              <button className='tip-btn' value='10' onClick={handleTip}>
                10%
              </button>
              <button className='tip-btn active' value='15' onClick={handleTip}>
                15%
              </button>
              <button className='tip-btn' value='25' onClick={handleTip}>
                25%
              </button>
              <button className='tip-btn' value='50' onClick={handleTip}>
                50%
              </button> */}
              {btns.map((item, index) => {
                return (
                  <button
                    className={`${
                      index === activeNo ? 'tip-btn active' : 'tip-btn'
                    }`}
                    value={item}
                    onClick={(e) => handleTip(e, index)}
                  >
                    {item}%
                  </button>
                )
              })}

              <input
                type='text'
                placeholder='Custom'
                className='custom-input'
                value={tip}
                onChange={handleTip}
              />
            </div>
            <h4>Number of People</h4>
            <div className='form-control'>
              <input
                type='text'
                placeholder='0'
                value={people}
                class={`${!people > 0 && 'error'}`}
                onChange={(e) => setPeople(Number(e.target.value))}
              />
              <span>
                <FaUserAlt />
              </span>
            </div>
          </div>
          <div className='showcase-menu'>
            <div className='amount-container'>
              <div className='amount'>
                <h4>Tip Amount</h4>
                <h5>/ person</h5>
              </div>
              <h1>${amount}</h1>
            </div>
            <div className='amount-container'>
              <div className='amount'>
                <h4>Total</h4>
                <h5>/ person</h5>
              </div>
              <h1>${total}</h1>
            </div>
            <button className='reset calculate' onClick={calculate}>
              CALCULATE
            </button>
            <button className='reset' onClick={reset}>
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
