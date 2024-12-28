import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Landing/Hero";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div data-bs-theme="dark">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card text-white bg-dark mb-4">
              <div className="card-header text-center">
                <h3 className="fw-bold">Tentang Kami</h3>
              </div>
              <div className="card-body">
                <p className="lead text-center">Selamat datang di situs kami! Platform ini dibikin dengan semangat dan dedikasi buat kasih kamu pengalaman terbaik.</p>

                <h5 className="fw-bold">Pengembang</h5>
                <p className="text-muted">
                  Website ini dikerjain sama <strong>BTN Dev</strong>, seorang developer yang passionate dan punya pengalaman dalam bikin aplikasi web yang dinamis, interaktif, dan pastinya
                  user-friendly.
                </p>

                <h5 className="fw-bold">Teknologi yang Dipakai</h5>
                <ul className="list-unstyled">
                  <li>🔹 React JS</li>
                  <li>🔹 Vite</li>
                  <li>🔹 Bootstrap</li>
                </ul>

                <h5 className="fw-bold">Fitur Website</h5>
                <p>Website ini dibangun dengan teknologi terbaru dan fokus pada desain responsif. Ini ada fitur-fitur keren kayak:</p>
                <ul className="list-unstyled">
                  <li>🔹 Konten yang dimuat secara dinamis</li>
                  <li>🔹 Antarmuka yang modern dan user-friendly</li>
                  <li>🔹 Kinerja cepat berkat Vite</li>
                  <li>🔹 Desain responsif buat semua perangkat</li>
                </ul>

                <h5 className="fw-bold">Makasih Udah Berkunjung</h5>
                <p className="text-muted">Semoga kamu enjoy dengan pengalaman ini. Kalo ada pertanyaan atau feedback, jangan sungkan buat hubungi kami!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
