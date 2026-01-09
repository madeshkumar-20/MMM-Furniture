export default function ServicePage() {
  return (
    <div className="container py-5">

      {/* Page Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Services</h2>
        <p className="text-muted mt-2">
          About M.M.M Furniture Showroom – We deliver quality furniture across India
          with free home delivery and professional service teams.
        </p>
      </div>

      {/* Services Section */}
      <div className="row g-4">

        <div className="col-md-4 col-sm-6">
          <div className="service-card">
            <h5>Custom Furniture</h5>
            <p>
              Made-to-order furniture designed exactly as per your space,
              style, and functional requirements.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-card">
            <h5>Living Room Furniture</h5>
            <p>
              Sofas, TV units, coffee tables and storage solutions crafted
              with premium materials.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-card">
            <h5>Bedroom Furniture</h5>
            <p>
              Beds, wardrobes, dressers and side tables that combine comfort
              with elegant design.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-card">
            <h5>Home & Office</h5>
            <p>
              Complete furniture solutions for homes, offices, showrooms and
              commercial spaces.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-card">
            <h5>Office & Commercial</h5>
            <p>
              Workstations, office chairs, conference tables and custom
              commercial furniture.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-sm-6">
          <div className="service-card">
            <h5>Electronics Furniture</h5>
            <p>
              Furniture setups for laptops, desktops, mobile counters and
              electronic showrooms.
            </p>
          </div>
        </div>

      </div>

      {/* Delivery Section */}
      <div className="mt-5">
        <h3 className="fw-bold mb-3">📦 Free Delivery & Installation</h3>
        <p>
          We provide <strong>free home delivery across India</strong> with safe
          packaging and professional handling.
        </p>
        <ul>
          <li>✔ Free doorstep delivery (Pan-India)</li>
          <li>✔ Delivery within 3–10 business days</li>
          <li>✔ Express delivery for metro cities</li>
          <li>✔ Installation support available</li>
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="mt-5">
        <h3 className="fw-bold mb-3">Why Choose M.M.M Furniture?</h3>
        <ul>
          <li>✔ High-quality materials & finishing</li>
          <li>✔ Custom design as per customer needs</li>
          <li>✔ Skilled professional service team</li>
          <li>✔ Warranty & after-sales support</li>
          <li>✔ Trusted by residential & commercial clients</li>
        </ul>
      </div>

    </div>
  );
}
