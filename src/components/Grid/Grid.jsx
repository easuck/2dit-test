import Card from '../Card/Card';
import './styles.scss';
import chair from '/Chair.png';

const Grid = () => {
    return(
        <div className='Grid'>
            <Card
                image={chair}
                category='Кресла театральные'
                title='Театральное кресло Прайм'
                article='789-2341'
                price='6 762'
                tag={1}
                isAvailable={true}
            />
            <Card
                image={chair}
                category='Кресла театральные'
                title='Театральное кресло Прайм'
                article='789-2341'
                price='6 762'
                tag={2}
                isAvailable={true}
            />
            <Card
                image={chair}
                category='Кресла театральные'
                title='Театральное кресло Прайм'
                article='789-2341'
                price='6 762'
                tag={3}
                isAvailable={true}
            />
            <Card
                image={chair}
                category='Кресла театральные'
                title='Театральное кресло Прайм'
                article='789-2341'
                price='6 762'
            />
            <Card
                image={chair}
                category='Кресла театральные'
                title='Театральное кресло Прайм'
                article='789-2341'
                price='6 762'
            />
            <Card
                image={chair}
                category='Кресла театральные'
                title='Театральное кресло Прайм'
                article='789-2341'
                price='6 762'
            />
        </div>
    )
}

export default Grid;