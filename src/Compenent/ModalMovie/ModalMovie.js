import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const ModalMovie = ({movies, setMovies}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterUrl, setPostUrl ]= useState('');
  const [rate, setRate] = useState();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
}
const handleChangeDescription = (e) => {
  setDescription(e.target.value);
}

const handleChangePostUrl = (e) => {
  setPostUrl(e.target.value);
}

const handleChangeRate = (e) => {
  setRate (e.target.value)
  // return rate < 10 ? null : alert('set rate lower than 10')
}
  
const handleClickAdd = (title, description, posterUrl, rate) => {
  setMovies([...movies, {title, description, posterUrl, rate}]);
  setTitle('');
  setDescription('');
  setPostUrl('');
  setRate();
}


  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{height:"50px"}}>
      Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Title: <input  style={{margin: "10px"}} type="Text" onChange={handleChangeTitle} value={title}></input>
        <br></br>
        posterUrl: <input  style={{margin: "10px"}} type="Text" onChange={handleChangePostUrl} value={posterUrl}></input>
        <br></br>
        description: <input  style={{margin: "10px"}} type="Text" onChange={handleChangeDescription} value={description}></input>
        <br></br>
        Rate: <input  style={{margin: "10px"}} type="number" min={1} max={10} onChange={handleChangeRate} value={rate}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClickAdd(title, description, posterUrl, rate);handleClose()}}>Add Change</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMovie;
