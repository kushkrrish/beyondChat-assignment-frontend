import { useEffect, useState } from "react";
import { getArticles, generateArticle } from "../services/api";
import Tabs from "../components/Tabs";
import ArticleGrid from "../components/ArticleGrid";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [activeTab, setActiveTab] = useState("original");
  const [loadingId, setLoadingId] = useState(null);

  const fetchArticles = async () => {
    const res = await getArticles();
    setArticles(res.data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(a =>
    activeTab === "original" ? !a.isGenerated : a.isGenerated
  );

  const handleGenerate = async (id) => {
    try {
      setLoadingId(id);
      await generateArticle(id);
      await fetchArticles();
    } catch (err) {
      alert("Failed to generate article");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">BeyondChats Articles</h1>

      <Tabs active={activeTab} setActive={setActiveTab} />

      <ArticleGrid
        articles={filteredArticles}
        onGenerate={handleGenerate}
        loadingId={loadingId}
      />
    </div>
  );
};

export default Home;
