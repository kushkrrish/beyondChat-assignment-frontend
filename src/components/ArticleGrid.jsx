import ArticleCard from "./ArticleCard";

const ArticleGrid = ({ articles, onGenerate, loadingId }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map(article => (
        <ArticleCard
          key={article._id}
          article={article}
          onGenerate={onGenerate}
          loading={loadingId === article._id}
        />
      ))}
    </div>
  );
};

export default ArticleGrid;
