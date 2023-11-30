

import { useState } from 'react'
import {
  formContainer,
  dateForm, 
  addButton,
  listContainer,
  listItem,
  valueContainer,
  dateInputContainer,
  dateMoneyContainer,
  moneyContainer,
  dailyValueForm
} from './Formulario.module.css'

const Formulario = () => {
  const [listItens, setListItens] = useState([])
  const [dateValue, setDateValue] = useState('')
  const [dayValue, setDayValue] = useState(130)
  const [finalValue, setFinalValue] = useState(0)


  const addItemOnList = () => {
    if (dateValue !== '') {
      setListItens(oldList => [...oldList, dateValue])
      setFinalValue(dayValue * (listItens.length + 1))
    }
    
  }

  return (
    <div className={formContainer}>
      <div className={ dateMoneyContainer }>
        <div className={ dateInputContainer }>
          <input
            onChange={({ target }) => setDateValue(target.value)}
            className={dateForm}
            type="date"
          />
          <button onClick={addItemOnList} className={ addButton }>Adicionar</button>
        </div>
        <div className={ moneyContainer }>
          <p>R$ </p>
          <input
            onChange={({ target }) => setDayValue(parseInt(target.value))}
            className={dailyValueForm}
            type="number"
            value={dayValue.toFixed(2)}
            min="0"
            step="any"
          />
        </div>
      </div>
      <div className={ listContainer }>
        <div >
          <ul>
            <li className={ listItem }>
              <div>
                <p>Indice</p>
              </div>
              <div>
                <p>Data</p>
              </div>
            </li>
            {listItens.map((date, index) => (
              <li key={index} className={listItem}>
                <div>
                  <p>{index + 1}</p>
                </div>
                <div>
                  <p>{date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={ valueContainer }>
          <div>
            <h3>Valor Final: </h3>
          </div>
          <div>
            <h3>{`R$ ${finalValue}`}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formulario