import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const VisitorCount = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  


  useEffect(() => {
    const visited = localStorage.getItem("visited");//null

    const fetchCount = async () => {
      try {
        if (!visited) {
          // First-time visitor → increment count
          const response = await fetch(`${API_URL}/api/visit`, {
            method: "POST",
          });
          const count = await response.json();
          setCount(count);
          localStorage.setItem("visited", "true");
        } else {
          // Returning visitor → just fetch count
          const response = await fetch(`${API_URL}/api/visit-count`);
          const data = await response.json();
          setCount(data.visits);
        }
      } catch (error) {
        console.error("Failed to fetch visitor count", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

    if (loading) {
    return <p>Loading visitors...</p>;
  }

  return (
    <div style={styles.container}>
      <span style={styles.label}>Visitors</span>
      <span style={styles.count}>{count}</span>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    fontSize: "30px",
    fontWeight: "700",
    border: "2px solid white",
    borderRadius: "6px",
    padding: "8px"
  },
  label: {
    color: "#d6d6d6",
  },
  count: {
    color: "#15ff00",
    fontWeight: "1000",
  },
};

export default VisitorCount;