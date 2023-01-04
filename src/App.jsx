import './App.css';

import {GrFormNext, GrFormPrevious} from 'react-icons/gr';
import {FiSend} from 'react-icons/fi'

//Conponents
import Useform from './Components/UseForm';
import Reviewform from './Components/ReviewForm';
import Thanks from './Components/Thanks';
import Steps from './Components/Steps';


//Hooks

import { useForm } from './hooks/useForm';
import { useState } from 'react';

const formTemplate = {

  name: "",
  email:"",
  review:"",
  comment:"",
};


function App() {

  const [ data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [ 
  <Useform data={data} updateFieldHandler={updateFieldHandler} />, 
  <Reviewform data={data} updateFieldHandler={updateFieldHandler} />, 
  <Thanks data={data} />
];

  const {currentStep, currentComponent, changeStep, isFirstStep, isLastStep} = useForm(formComponents);


  return (
    <div className="App">
      <div className='header'> 
        <h2>Deixe sua avaliação</h2>
          <p> 
            Ficamos felizes com a sua compra, ultilize o formulário abaixo para avaliar o produto
          </p>
      </div>
    <div className='form-container'>
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1,e)}>
          <div className='inputs-container'>{currentComponent}</div>
          <div className='actions'>
              {!isFirstStep && (
                <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious/>
                  <span>Voltar</span>
                </button>
              ) }
             {!isLastStep ? (
               <button type='submit'>
               <span>Avançar</span>
               <GrFormNext/>
             </button>
             ) : (
              <button type='button'>
              <span>Enviar</span>
              <FiSend/>
            </button>
             )}
          </div>
        </form>
    </div>
    </div>
  );

}

export default App
