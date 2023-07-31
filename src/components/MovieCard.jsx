/* eslint-disable react/prop-types */
export default function MovieCard(props) {
  console.log(props);
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.rating}</p>
    </div>
  );
}
