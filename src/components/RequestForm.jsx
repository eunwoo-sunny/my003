import PropTypes from 'prop-types';
import { useState } from "react";
import RequestList from './requestList';
 
export default function RequestForm({addContents, requests}) {
    const [ content, setContent] = useState('');
    RequestForm.propTypes = {
        addContents : PropTypes.func,
        requests : PropTypes.array
    } 

    const handleSubmit = (e) => {
        e.preventDefault();  
        if ( !content.trim() ) return;
        addContents(content);
        e.target.reset();
        console.log(e, e.target)
    } 
  return (
    <> 
        <form onSubmit={handleSubmit}>
            <textarea 
                placeholder="문의 내용을 입력하세요"
                onChange={ e => setContent(e.target.value)}></textarea>
            <button type="submit" className="btn">등록</button>
        </form>

        <RequestList requests={requests} />
    </>
  )
}
