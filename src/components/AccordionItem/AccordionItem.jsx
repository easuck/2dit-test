import { useState } from 'react';
import './styles.scss';

const AccordionItem = ({title, content}) => {
    const [isExpanded, setisExpanded] = useState(false);
    return(
        <div 
            className='Accordion'
            onClick={() => setisExpanded(prev => !prev)}
        >
            <div className='Accordion_title'>
                <span>{title}</span>
                <img src='./Down.png'/>
            </div>
            {isExpanded && <div className='Accordion_content'>{content}</div>}
        </div>
    )
}

export default AccordionItem;