
export default function IndividualQuestion(props) {
    const {questionObject, index, Answers} = props
     return (
        <>
            <div className='individual_question'>
                <div className='specific_question'>
                    <h2 key={index}>{questionObject.title} </h2> 
                    <p>Replies: </p>
                    {/* {questionObject.answers.length}</p> */}
                </div>
                <p>Submitted by: {questionObject.user}  on (date)</p>
                <p>{questionObject.body}</p>
                <Answers answers={questionObject.answers} />
            </div>
        </>
    )
}