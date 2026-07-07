import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="md:text-4xl text-2xl py-10">404 Page Not Found</h1>
        <Link to="/">
          <button className="button-light-blue">Return to Home</button>
        </Link>
      </div>
    </>
  );
}
