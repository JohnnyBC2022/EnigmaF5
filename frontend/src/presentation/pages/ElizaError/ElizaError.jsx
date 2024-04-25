import { useNavigate } from "react-router-dom";
import "./ElizaError.css";
import { useEffect } from "react";

export default function ElizaError() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/prueba02");
    }, 10000);

    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <main className="error-eliza-container">
      <div className="error-eliza">
        <div className="corporation">MKUltra Corp.</div>
        <div className="card-container">
          <section className="central-card">
            <p>ERROR AL ABRIR LA CONSOLA</p>
            <p>Eliza System Failure</p>
            <p className="flicker1">Cargando...</p>
          </section>
        </div>
      </div>
    </main>
  );
}
