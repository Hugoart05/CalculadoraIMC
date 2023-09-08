import { useState } from 'react'
import styles from './App.module.css'
import imagep from './assets/react.svg'
function App() {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)


  function handleCalculateButton(){
    if(heightField && weightField)
    {
      
    }
    else
    {
      alert('digite todos os campos')
    }
  }
  return (
    <>
      <div className={styles.main}>
          <header>
            <div className={styles.headerContainer}>
              <img src={imagep} alt="" width={50}/>
            </div>
          </header>
          <div className={styles.container}>
            <div className={styles.leftSide}>
              <h1>Calcule seu IMC</h1>
              <p>O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso idea.</p>
              <input 
                type="number"
                placeholder="Digite sua altura. Ex: 1.5 (em metros)"
                value={heightField > 0 ? heightField : ''}
                onChange={e => setHeightField(parseFloat(e.target.value))}
              />
              <input
                type='number'
                placeholder='Digite seu peso. Ex: 80.1'
                value={weightField > 0 ? weightField : ''}
                onChange={e => setWeightField(parseFloat(e.target.value))}
              />
              <button onClick={handleCalculateButton}>Calcular </button>
            </div>

            <div className={styles.rightSide}>
              ...
            </div>

          </div>
      </div>
    </>
  )
}

export default App
