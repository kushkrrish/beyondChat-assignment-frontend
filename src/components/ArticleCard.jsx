import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article, onGenerate, loading }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/article/${article._id}`)}
      className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
    >
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          {article.title}
        </h3>

        {!article.isGenerated && (
          <p className="text-gray-600 text-sm mb-3">
            {article.summary}
          </p>
        )}

        {/* AI badge */}
        {article.isGenerated && (
          <span className="inline-block text-xs px-2 py-1 bg-green-100 text-green-700 rounded">
            AI Updated Article
          </span>
        )}

        {/* Generate button */}
        {!article.isGenerated && (
          <button
            onClick={(e) => {
              e.stopPropagation(); 
              onGenerate(article._id);
            }}
            disabled={loading}
            className={`mt-3 w-full text-sm px-3 py-2 rounded text-white
              ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}
            `}
          >
            {loading ? "Generating..." : "Generate AI Version"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
