import { useState } from 'react'
import '../styles/structure.css'

export default function Bernoulli() {
    const [exito, setExito] = useState(-1)
    const [fracaso, setFracaso] = useState(-1)

    function onExitoChange(e) {
        setExito(e.target.value)
    }

    function onFracasoChange(e) {
        setFracaso(e.target.value)
    }

    function onSelectChange(e) {
        if(e.target.value==='exito'){
            let iFracaso= document.getElementById('inputFracaso')
            iFracaso.classList.remove('hidden')
            let iExito = document.getElementById('inputExito')
            if (!iExito.classList.contains('hidden')){
                iExito.classList.add('hidden')
            }
        }else if(e.target.value==='fracaso'){
            let iExito = document.getElementById('inputExito')
            iExito.classList.remove('hidden')
            let iFracaso= document.getElementById('inputFracaso')
            if (!iFracaso.classList.contains('hidden')){
                iFracaso.classList.add('hidden')
            }
        }

    }
    function onSubmit(e) {
        e.preventDefault()
        let answer = document.getElementById('answerBernoulli')
        if(exito===-1 && fracaso !==-1){
            answer.textContent = calculateBernoulliProbability(fracaso) + '%'
        }else if(exito!==-1 && fracaso ===-1){
            answer.textContent = calculateBernoulliProbability(exito) + '%'
        }
        answer.classList.remove('hidden')
    }

    function calculateBernoulliProbability(exito_o_fracaso) {
        return 100-exito_o_fracaso;
    }


    return (
        <div className="distribution bernoulli">
            <h2 className='title'>
                Bernoulli
            </h2>

            <div className='containerDistribution'>
                <div className='containerInfo'>
                    <h2>
                        ¿Qué es?
                    </h2>

                    <div className='infoTextImg'>
                        <p className='definition'>
                            La distribución de Bernoulli es un modelo teórico utilizado para representar una variable aleatoria discreta la cual solo puede resultar en dos sucesos mutuamente excluyentes.
                        </p>

                        <img src={require('../images/bernoulli.png')}
                            alt='Function'
                            className='imageFunction'
                        />
                    </div>
                </div>
                <div className='containerSolution'>
                    <h2>
                        Solución
                    </h2>

                    <select name="calculate"
                        id="calculateBasedOn"
                        className='calculateBasedOnSelect'
                        onChange={onSelectChange}d
                        
                    >
                        <option value="none"
                        >
                            Seleccionar El Calculo
                        </option>
                        <option value='exito'>
                            Calcular Exito
                        </option>
                        <option value='fracaso'>
                            Calcular Fracaso
                        </option>

                    </select>

                    <form onSubmit={onSubmit}
                        className='form'
                    >
                        <input type="number" onChange={onExitoChange}
                            placeholder='Digite la probabilidad de exito'
                            className='input hidden' id='inputExito'
                            step="0.01"
                        />
                        <input type="number" onChange={onFracasoChange}
                            placeholder='Digite la probabilidad de fracaso'
                            className='input hidden'
                            id='inputFracaso'
                            step="0.01"
                        />

                        <input type="submit"
                            value='Calcular'
                            className='inputSubmit'
                        />
                    </form>

                    <div className='answerContainer'>
                        <p>
                            La probabilidad resultante es de:
                        </p>
                        <p id='answerBernoulli' className='hidden'>
                            0%
                        </p>
                    </div>


                </div>
            </div>

        </div>
    )
}