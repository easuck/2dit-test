import './styles.scss';

const CardTag = ({tag}) => {
    const tags = {
        1: ['Хит продаж', './Star.svg', 'CardTag_hit'],
        2: ['Акция', './Discount.svg', 'CardTag_sale'],
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