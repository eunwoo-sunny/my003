import PropTypes from 'prop-types';
export default function RequestList({requests}) {
  
    RequestList.propTypes = {
        requests : PropTypes.array
    } 
    console.log('requests:', typeof requests)
  return (
    <>
        <h2>Request List</h2>
        <ul>
            {requests.map( item => ( 
                <li key={item}>{item}</li> 
            ))}
        </ul>
       
    </>
  )
}
