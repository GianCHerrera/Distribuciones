import { useState } from 'react'
import '../styles/structure.css'

export default function Poisson() {

    const [intervalo, setIntervalo] = useState(-1)
    const [ocurrencias, setOcurrencias] = useState(-1)

    function onIntervaloChange(e) {
        setIntervalo(e.target.value)
    }

    function onOcurrenciasChange(e) {
        setOcurrencias(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        if(intervalo >= 0 && ocurrencias >= 0)calculatePoissonProbability(intervalo, ocurrencias)
    }

    function calculatePoissonProbability(intervalo, ocurrencias) {
        var res = ((Math.exp(intervalo*-1) * Math.pow(intervalo, ocurrencias)) / factorial(ocurrencias)).toFixed(10)
        console.log(res);
        let answer = document.getElementById('answerPoisson')
        answer.textContent = res + '%'
        answer.classList.remove('hidden')
    }

    function factorial(n) {
        var total = 1;
        for (let i = 1; i <= n; i++) {
            total = total * i;
        }
        return total;
    }
    return (
        <div className="distribution poisson">
            <h2 className='title'>
                Poisson
            </h2>

            <div className='containerDistribution'>
                <div className='containerInfo'>
                    <h2>
                        ¿Qué es?
                    </h2>

                    <div className='infoTextImg'>
                        <p className='definition'>
                            La distribución de Poisson es una distribución de probabilidad discreta que modeliza la frecuencia de eventos determinados durante un intervalo de tiempo fijado a partir de la frecuencia media de aparición de dichos eventos.
                        </p>

                        <img src={require('../images/poisson.png')}
                            alt='Function'
                            className='imageFunction'
                        />
                    </div>
                </div>
                <div className='containerSolution'>
                    <h2>
                        Solución
                    </h2>

                    <form onSubmit={onSubmit}
                        className='form'
                    >
                        <input type="number"
                            onChange={onIntervaloChange}
                            placeholder='ƛ'
                            className='input'
                            required
                            step="0.01"
                        />
                        <input type="number"
                            onChange={onOcurrenciasChange}
                            placeholder='𝑋'
                            className='input'
                            required
                            step="0.01"
                        />
                        <input type="submit"
                            value='Calcular'
                            className='inputSubmit'
                        />
                    </form>

                    <div className='answerContainer'>
                        <p>
                            La probabilidad es de:
                        </p>
                        <p id='answerPoisson' className='hidden'>
                            0%
                        </p>
                    </div>


                </div>
            </div>

        </div>
    )
}