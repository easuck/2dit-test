import './styles.scss';

const CardTag = ({tag}) => {
    const tags = {
        1: ['Хит продаж', './Star.png', 'CardTag_hit'],
        2: ['Акция', './Discount.png', 'CardTag_sale'],
        3: ['Новинка', './Rocket.svg', 'CardTag_new']
    }
    return(
        <div className={`CardTag ${tags[tag][2]}`}>
            <img src={tags[tag][1]} alt='icon'/>
            <span>{tags[tag][0]}</span>
        </div>
    )
}

export default CardTag;