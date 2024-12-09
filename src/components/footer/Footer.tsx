

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="h-12 flex flex-col justify-center items-center bg-black bg-opacity-90 text-white">
      <h3 className="font-semibold">
        Jamal Gastro
      </h3>
      <span className="text-xs">
        Copyright &copy; {year}
      </span>
    </footer>
  );
}