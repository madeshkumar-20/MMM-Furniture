export default function ServicePage() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Our Services</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="service-card">
            <h5>Custom Furniture</h5>
            <p>Design furniture as per your requirement.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-card">
            <h5>Home & Office</h5>
            <p>Furniture for home, office & showroom.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="service-card">
            <h5>Electronics</h5>
            <p>Laptop, Mobile, PC, Tablet furniture setups.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
