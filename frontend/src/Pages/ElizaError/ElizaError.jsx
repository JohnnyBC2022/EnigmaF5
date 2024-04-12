import "./ElizaError.css";

export default function ElizaError() {
  return (
    <main className="error-eliza-container">
      <div className="error-eliza">
        <div className="corporation">MKUltra Corp.</div>
        <div className="card-container">
          <section className="central-card">
            <p>ERROR AL ABRIR LA CONSOLA</p>
            <p>Eliza System Failure</p>
            <p>Cargando...</p>
          </section>
        </div>
      </div>
    </main>
  );
}
