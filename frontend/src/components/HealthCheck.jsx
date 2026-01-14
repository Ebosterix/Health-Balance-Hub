import { useEffect, useState } from 'react';

function HealthCheck() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || 'https://health-balance-hub.onrender.com/api';
    fetch(`${API_URL}/health`)
      .then(res => res.json())
      .then(data => setStatus(data))
      .catch(err => console.error(err));
  }, []);

  if (!status) return <p>Loading...</p>;

  return (
    <div>
      <h2>Backend Health Check</h2>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
}

export default HealthCheck;
