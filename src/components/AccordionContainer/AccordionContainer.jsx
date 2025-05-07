import { accordionsData, mockHtml } from "../../mock/mockData";
import AccordionItem from "../AccordionItem/AccordionItem";
import './styles.scss';

const AccordionContainer = ({html}) => {
    return(
        <div className='AccordionContainer'>
            <div 
                className='AccordionContainer_desc'
                dangerouslySetInnerHTML={{ __html: mockHtml }}
            />
            <div className='AccordionContainer_items'>
                {
                    accordionsData.map(item => {
                        return <AccordionItem title={item.title} content={item.content}/>
                    })
                }
            </div>
        </div>
        

    )
}

export default AccordionContainer;