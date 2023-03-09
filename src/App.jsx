import { useState } from 'react'
import ImgProduit from './assets/image 2.png'
import Cash from './assets/Vector.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='card'>
        <div className='prix'>
            <div className='SousTotal'>
             <img src={Cash} alt="Cash" className='Cash' />
             <h3 className="total">SOUS-TOTAL</h3>
            </div>
            <h3 className="prixTotal">2.800 DZD</h3>
        </div>
        <div className="produit">
          <img src={ImgProduit} alt="imgproduit" className='ImgProduit' />
          <div className="infos">
            <h5>Miellerie Mazouni Miel De Fleurs<br/>Sauvages - 250 Grs -</h5>
            <h5><span style={{'color':"#92CE08"}}>750.00 DZD</span></h5>
            <div className="h6Attributes">
              <h6 className='h6Price'>750.00 DZD</h6>
              <h6 className='h6Discount'>-53%</h6>
            </div>
          </div>
          <div className="quantite">
            <button onClick={() => {if (count>0) setCount((count) => count - 1)}} className="btnnbr">
              -
            </button>
              <p>{count}</p>
            <button onClick={() => setCount((count) => count + 1)} className="btnnbr">
              +
            </button>
          </div>
        </div>
        <div className="buttons">
          <button className="annuler">
             ANNULER
          </button>
          <button className="ajouter">
             AJOUTER AU PANIER
          </button>
        </div>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </div>
  )
}

export default App
