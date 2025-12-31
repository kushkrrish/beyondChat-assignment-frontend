const Tabs=({ active, setActive })=> {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => setActive("original")}
        className={`px-4 py-2 rounded ${
          active === "original"
            ? "bg-blue-600 text-white"
            : "bg-gray-200"
        }`}
      >
        Original Articles
      </button>

      <button
        onClick={() => setActive("generated")}
        className={`px-4 py-2 rounded ${
          active === "generated"
            ? "bg-green-600 text-white"
            : "bg-gray-200"
        }`}
      >
        AI Updated Articles
      </button>
    </div>
  );
}

export default Tabs;
