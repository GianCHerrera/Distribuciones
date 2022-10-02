import { useState } from 'react'
import '../styles/structure.css'

export default function Binomial() {
    const [n, setN] = useState(-1)
    const [r, setR] = useState(-1)
    const [p, setP] = useState(-1)
    const [q, setQ] = useState(-1)

    function onNChange(e) {
        setN(e.target.value)
    }

    function onPChange(e) {
        setP(e.target.value)
    }

    function onQChange(e) {
        setQ(e.target.value)
    }

    function onRChange(e) {
        setR(e.target.value)
    }


    function onSubmit(e) {
        e.preventDefault()
        let answer = document.getElementById('answerBinomial')
        if (n !== -1 && r !== -1 && p !== -1 && q !== -1 ) {
            let res = calculateBinomialProbability(n,r,q,p)*100
            answer.textContent = res + '%'
        } 
        answer.classList.remove('hidden')
    }

    function calculateBinomialProbability(n, r, p, q) {
        return numerosCombinatorios(n, r) * Math.pow(p, r) * Math.pow(q, (n - r))
    }


    function factorial(n) {
        var total = 1;
        for (let i = 1; i <= n; i++) {
            total = total * i;
        }
        return total;
    }

    function numerosCombinatorios(n, r) {
        if (r === 1) return n
        if (r === 0) return 0
        return (factorial(n)) / (factorial(r) * factorial(n - r))
    }

    return (
        <div className="distribution binomial">
            <h2 className='title'>
                Binomial
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

                    <form onSubmit={onSubmit}
                        className='form formBinomial'
                    >
                        <div className='group'>
                            <input type="number"
                                onChange={onNChange}
                                placeholder='Digite N'
                                className='input inputBinomial'
                                step="0.01"
                                required
                            />
                            <input type="number"
                                onChange={onRChange}
                                placeholder='Digite R'
                                className='input inputBinomial'
                                required
                                step="0.01"
                            />
                        </div>
                        <div className='group'>

                            <input type="number"
                                onChange={onPChange}
                                placeholder='Digite p'
                                className='input inputBinomial'
                                required
                                step="0.01"
                            />
                            <input type="number"
                                onChange={onQChange}
                                placeholder='Digite q'
                                className='input inputBinomial'
                                required
                                step="0.01"
                            />
                        </div>


                        <input type="submit"
                            value='Calcular'
                            className='inputSubmit'
                        />
                    </form>

                    <div className='answerContainer'>
                        <p>
                            La probabilidad resultante es de:
                        </p>
                        <p id='answerBinomial' className='hidden'>
                            0%
                        </p>
                    </div>


                </div>
            </div>

        </div>
    )
}