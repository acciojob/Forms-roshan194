export default function Card({ children }) {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      {children}
    </div>
  );
}