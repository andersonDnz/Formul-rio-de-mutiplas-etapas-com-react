import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,    
    BsFillEmojiFrownFill,
} from 'react-icons/bs'

import "./Thanks.css";

const emojidata = {

    unsatisied:<BsFillEmojiFrownFill/>,
    neutral:<BsFillEmojiNeutralFill />,
    satisfied:<BsFillEmojiSmileFill />,
    very_satisfied:<BsFillEmojiHeartEyesFill />

};

const status = {

    unsatisied:"Iinsatisfeito",
    neutral:"Poderia ser melhor",
    satisfied:"Satisfeito",
    very_satisfied:"Muito Satisfeito",

}

const Thanks = ( { data } ) => {
     
        return( <div className='thanks-container'>
                <h2>Falta pouco...</h2>
                <p>
                    A sua opinião é muito importante, em breve você recebrá um cupom de 10% de desconto para a sua próxima compra.
                </p>
                <p>
                    Para concluir sua avalição clique no botão de Enviar abaixo.
                </p>
                <h3>Aqui está o resumo da sua avaliação, {data.name}: </h3>
                <p className='review-data'>
                    <span>Satisfação com o produto: {emojidata[data.review]} </span>
                </p>
                <p className='review-data'>
                   <span> Status: {status[data.review]}</span> 
                </p>
                <p className='review-data'>
                    <span>Comentário: {data.comment}</span>
                </p>
            </div>
        );
};

export default Thanks;