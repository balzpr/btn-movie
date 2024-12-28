import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Landing/Hero";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div data-bs-theme="dark">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* Kartu Informasi Kontak */}
          <div className="col-md-8">
            <div className="card text-white bg-dark mb-4">
              <div className="card-header text-center">
                <h3>Hubungi Kami</h3>
              </div>
              <div className="card-body">
                <p>
                  Kami sangat menghargai feedback dari kamu dan selalu berusaha untuk memperbaiki layanan kami. Kalau ada pertanyaan, saran, atau permintaan, jangan ragu untuk menghubungi kami.
                  Berikut adalah cara-cara untuk menghubungi kami:
                </p>

                <div className="mb-4">
                  <h5>Permintaan Penghapusan Konten</h5>
                  <p>Kalau kamu mau minta penghapusan konten dari platform kami, silakan hubungi kami. Kami berkomitmen untuk menangani kekhawatiran kamu dengan cepat dan profesional.</p>
                </div>

                <div className="mb-4">
                  <h5>Pertanyaan Umum</h5>
                  <p>
                    Untuk pertanyaan umum, feedback, atau saran tentang bagaimana kami bisa memperbaiki pengalaman kamu, kami siap mendengarkan! Kami sangat terbuka untuk semua masukan yang bisa bikin
                    layanan kami lebih baik.
                  </p>
                </div>

                <div className="mb-4">
                  <h5>Instagram</h5>
                  <p>Kalau mau minta penghapusan konten atau ada pertanyaan, kamu bisa langsung DM kami di Instagram:</p>
                  <a href="https://www.instagram.com/btndev_" target="_blank" rel="noopener noreferrer" className="btn btn-danger">
                    DM Kami di Instagram
                  </a>
                </div>

                <div className="mb-4">
                  <h5>Email</h5>
                  <p>Kalau lebih suka kirim email, kami siap bantu. Kamu bisa hubungi kami di email di bawah ini, dan kami akan balas secepatnya:</p>
                  <a href="mailto:balzpro54@gmail.com" className="btn btn-outline-light">
                    Kirim Email
                  </a>
                </div>

                <div className="mb-4">
                  <h5>Cara Lain untuk Terhubung</h5>
                  <p>
                    Kami paham kadang menghubungi lewat email atau Instagram itu belum cukup, jadi kami lagi nyiapin cara-cara lain buat tetap terhubung. Stay tuned untuk fitur-fitur seru kayak live
                    chat dan forum komunitas!
                  </p>
                </div>

                <div className="mb-4">
                  <h5>Jam Kerja</h5>
                  <p>
                    Tim kami tersedia dari Senin sampai Jumat, jam 9:00 AM sampai 6:00 PM (UTC). Kami berusaha untuk merespon semua pertanyaan dalam waktu 24-48 jam, tapi kami hargai kesabaran kamu
                    kalau lagi banyak permintaan.
                  </p>
                </div>

                <div>
                  <h5>Makasih!</h5>
                  <p>Makasih udah mampir ke situs kami dan tertarik untuk menghubungi kami. Kami selalu cari cara untuk memperbaiki diri, dan feedback kamu sangat penting untuk itu.</p>
                  <p>
                    Tim kami menghargai feedback kamu dan berkomitmen untuk menangani kekhawatiran kamu secepat mungkin. Kami pengen bikin pengalaman yang positif dan menyenangkan buat semua orang!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
