import { Link } from "react-router-dom";
export default function RenderSingle({ pin }) {
  return (
    <>
      <Link key={pin.id} to={`/pins/${pin.id}`} className="link">
        <img className="images" src={pin.imageUrl} alt={pin.title} />
        <h3 className="pintitle">{pin.title}</h3>
      </Link>
    </>
  );
}
