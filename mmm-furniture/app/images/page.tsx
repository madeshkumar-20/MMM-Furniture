import Image from "next/image";

const images = [
  "/gallery/img1.jpg",
  "/gallery/img2.jpg",
  "/gallery/img7.jpg",
  "/gallery/img4.jpg",
  "/gallery/img5.jpg",
  "/gallery/img6.jpg",
  "/gallery/img21.jpg",
  "/gallery/img44.jpg",
  "/gallery/img9.jpg",
  "/gallery/img11.jpg",
  "/gallery/img6.jpg",
  "/gallery/img177.jpg",
  "/gallery/img50.jpg",
  "/gallery/img8.jpg",
  "/gallery/img37.jpg",
  

];

export default function ImagesPage() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Furniture Gallery</h2>

      <div className="row g-4">
        {images.map((src, index) => (
          <div key={index} className="col-md-4">
            <div className="gallery-card">
              <Image
                src={src}
                alt={`Furniture ${index + 1}`}
                width={400}
                height={300}
                className="gallery-img"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
