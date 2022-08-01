import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import moment from 'moment'

export default function IndividualQuestion(props) {
    const {questionObject, index} = props

    
    // const dateToFormat = new Date('DD/MM/YYYY');
    
    return (
        <>
            <div className='individual_question'>
                <div className='specific_question'>
                   <h2 key={index}><Link to={`/question/${questionObject.id}`}> {questionObject.title}</Link></h2>
                    <p>Replies: </p>
                        {/* {questionObject.answers.length}</p> */}
                </div>
                <p>Submitted by: {questionObject.user}  on {moment(questionObject.created_at).format('MM/DD/YY h:mm a')} </p>
                <p>{questionObject.body}</p>
                
            </div>
        </>
    )
}