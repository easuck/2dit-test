import CardTag from '../CardTag/CardTag';
import './styles.scss';

const Card = ({image, category, title, article, price, tag, isAvailable}) => {
    const tags = {
        1: 'Хит продаж',
        2: 'Акция',
        3: 'Новинка'
    }

    return(
        <div className='Card'>
            <div className='Card_imageContainer'>
                <img src={image} alt='image'/>
                {tag && <CardTag tag={tag}/>}
                {isAvailable && 
                    <div className='Card_imageContainer_isAvailable'>
                        <img src='./Checkmark.png' alt='checkmark'/>
                        <span>В наличии</span>
                    </div>}
            </div>
            <div className='Card_desc'>
                <h3 className='Card_desc_category'>{category}</h3>
                <h2 className='Card_desc_title'>{title}</h2>
                <h3 className='Card_desc_article'>Aртикул: <span>{article}</span></h3>
                <div className='Card_desc_price'>от: <span>{price}</span> Р</div>
            </div>
        </div>
    )   
}

export default Card;