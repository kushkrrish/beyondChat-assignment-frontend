import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getArticleById, getArticles } from "../services/api";

const ArticleDetail=()=> {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [linkedArticle, setLinkedArticle] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await getArticleById(id);
      setArticle(res.data);

      // Fetch linked article
      const all = await getArticles();
      const related = all.data.find(a =>
        res.data.isGenerated
          ? a._id === res.data.originalArticleId
          : a.originalArticleId === res.data._id
      );

      setLinkedArticle(related);
    }

    fetchData();
  }, [id]);

  if (!article) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 mb-4"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-2">
        {article.title}
      </h1>

      <div className="text-sm text-gray-500 mb-6">
        {article.author && <span>By {article.author}</span>}
        {article.publishedAt && (
          <span> • {new Date(article.publishedAt).toDateString()}</span>
        )}
      </div>

      {/* Markdown Content */}
      <div className="prose max-w-none">
        <ReactMarkdown>
          {article.content || article.summary}
        </ReactMarkdown>
      </div>

      {/* References */}
      {article.references?.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">References</h2>
          <ul className="list-disc ml-6">
            {article.references.map((ref, i) => (
              <li key={i}>
                <a
                  href={ref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600"
                >
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Link original ↔ generated */}
      {linkedArticle && (
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <button
            onClick={() => navigate(`/article/${linkedArticle._id}`)}
            className="text-blue-600 font-medium"
          >
            {article.isGenerated
              ? "View Original Article"
              : "View AI-Generated Version"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ArticleDetail;
