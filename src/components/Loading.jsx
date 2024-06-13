import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css'

const Loading = () => {
    return (
        <div id='spinner'>
        <Spinner  animation="border" role="status" variant='light' size='5rem' >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
      );
    }

export default Loading