import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Movies from './components/Movies'
import Filter from './components/Filter'
import MoviesContainer from './components/MoviesContainer'
import { Button, Modal, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const initialMovies = [
  { id: uuidv4(), title: "Batman and Robin", year: 1949, image: "https://upload.wikimedia.org/wikipedia/en/6/62/Batman_and_Robin_1949_poster.jpg", rating: 3.5 },
  { id: uuidv4(), title: "The New Adventures of Batman", year: 1977, image: "https://upload.wikimedia.org/wikipedia/en/b/b4/New_Adventures_of_Batman_logo.jpg", rating: 4 }
]

function App() {
  const [movies, setMovies] = useState(initialMovies)
  const [modalIsShown, setModalIsShown] = useState(false)

  const [filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(() => {
    setFilteredMovies(movies)
  }, [movies])

  const [filmFormValues, setFilmFormValues] = useState({
    title: '',
    year: '',
    image: '',
    rating: ''
  })

  const handleFormChange = (e) => {
    setFilmFormValues({
      ...filmFormValues,
      [e.target.name]: e.target.value
    })
  }

  const handleValuesChange = (str, stars) => {
    if (stars !== "") {
      setFilteredMovies(movies.filter(item => item.title.toLocaleLowerCase().includes(str.toLocaleLowerCase()) && item.rating == Number(stars)))
    } else {
      setFilteredMovies(movies.filter(item => item.title.toLocaleLowerCase().includes(str.toLocaleLowerCase())))
    }
  }

  const saveFilm = () => {
    const newObject = {...filmFormValues}
    delete newObject.rating
    if (Object.values(newObject).includes("")) {
      alert("All fields must be filled")
      return
    }
    setMovies([...movies, filmFormValues])
    setModalIsShown(false)
    setFilmFormValues({
      title: '',
      year: '',
      image: '',
      rating: ''
    })
  }

  return (
    <MoviesContainer>
      <Button style={{ marginBottom: 50 }} onClick={() => setModalIsShown(true)}>Add</Button>
      <Filter onValuesChange={(str, stars) => handleValuesChange(str, stars)} />
      <Movies allMovies={filteredMovies} />
      <Modal show={modalIsShown} onHide={() => setModalIsShown(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Film Title</Form.Label>
              <Form.Control name="title" onChange={(e) => handleFormChange(e)} value={filmFormValues.title} type="text" placeholder="Enter film title" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Control name="year" onChange={(e) => handleFormChange(e)}  value={filmFormValues.year} type="number" placeholder="Film Year" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Film Image</Form.Label>
              <Form.Control name="image" onChange={(e) => handleFormChange(e)} value={filmFormValues.image} type="text" placeholder="Film Image" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control name="rating" onChange={(e) => handleFormChange(e)} value={filmFormValues.rating} type="number" placeholder="Film Rating" />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalIsShown(false)}>
            Close
            </Button>
          <Button variant="primary" onClick={() => saveFilm()}>
              Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
    </MoviesContainer>
  );
}

export default App;
