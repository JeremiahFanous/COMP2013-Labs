import type { ResortListing } from "../data/data";
export default function ResortCard({
  pic,
  country,
  location,
  rating,
  price,
}: ResortListing) {
  const ratingClass = rating > 4.0 ? "rating-green" : "rating-red";
  return (
    <div className="ResortCard">
      <img src={pic} alt="" width="100px" />
      <h2>{country}</h2>
      <p>{location}</p>
      <p className={`Rating ${ratingClass}`}>{rating}★</p>
      <p>${price}/night</p>
    </div>
  );
}