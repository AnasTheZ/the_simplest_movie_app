/* eslint-disable react/prop-types */
import { useRef } from "react";
export default function AddMovie({ movies, setMovies }) {
  const titleRef = useRef();
  const descRef = useRef();
  const ratingRef = useRef();
  const imageSrcRef = useRef();

  const handleAddMovie = () => {
    const title = titleRef.current.value;
    const description = descRef.current.value;
    const rating = ratingRef.current.value;
    const image = imageSrcRef.current.value;

    const newMovie = {
      id: Math.random() * 10,
      title,
      description,
      rating,
      image,
    };

    titleRef.current.value = "";
    descRef.current.value = "";
    ratingRef.current.value = "";
    imageSrcRef.current.value = "";

    setMovies([...movies, newMovie]);
  };
  return (
    <div>
      title: <input type="text" ref={titleRef} />
      desc: <input type="text" ref={descRef} />
      rating: <input type="number" ref={ratingRef} />
      imageSrc: <input type="text" ref={imageSrcRef} />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
}
