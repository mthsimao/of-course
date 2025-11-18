import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p className="text-xl text-red-500">error</p>
      <h1>PAGE NOT FOUND</h1>
      <Link to="/" className="text-2xl mt-4 text-blue-700">
        VOLTAR PARA HOME
      </Link>
    </div>
  );
}
