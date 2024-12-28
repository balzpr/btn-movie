import React, {useState} from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {database} from "../firebase/firebase";
import {ref, set} from "firebase/database";
import Swal from "sweetalert2";

const Request = () => {
  const [name, setName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [filmRequest, setFilmRequest] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const requestRef = ref(database, "requests/" + name);
      await set(requestRef, {
        name: name,
        instagram: instagram,
        filmRequest: filmRequest,
        reason: reason,
        timestamp: new Date().toISOString(),
      });
      Swal.fire({
        title: "Berhasil",
        text: "Data permintaan berhasil dikirim, silakan tunggu konfirmasi dari kami.",
        icon: "success",
        confirmButtonText: "Oke min",
      });
    } catch (error) {
      setLoading(false);
      setName("");
      setInstagram("");
      setFilmRequest("");
      setReason("");
      Swal.fire({
        title: "Error",
        text: "Terjadi kesalahan saat mengirim.",
        icon: "error",
        confirmButtonText: "Oke min",
      });
    } finally {
      setLoading(false);
      setName("");
      setInstagram("");
      setFilmRequest("");
      setReason("");
    }
  };

  return (
    <div data-bs-theme="dark">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card text-white bg-dark mb-4">
              <div className="card-header text-center">
                <h3 className="fw-bold">Form Permintaan Film</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nama Kamu
                    </label>
                    <p className="text-muted">Yuk, kasih tau nama kamu biar kita bisa kenal lebih dekat!</p>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="instagram" className="form-label">
                      Instagram Kamu
                    </label>
                    <p className="text-muted">Masukkan username Instagram kamu, biar kita bisa update tentang permintaanmu!</p>
                    <input type="text" className="form-control" id="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="filmRequest" className="form-label">
                      Film yang Mau Kamu Request
                    </label>
                    <p className="text-muted">Ceritakan film apa yang kamu pengen tonton. Kami siap mendengarkan!</p>
                    <input type="text" className="form-control" id="filmRequest" value={filmRequest} onChange={(e) => setFilmRequest(e.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="reason" className="form-label">
                      Alasan Permintaan
                    </label>
                    <p className="text-muted">Kenapa kamu pengen film ini? Ceritakan alasannya di sini!</p>
                    <textarea className="form-control" id="reason" rows="3" value={reason} onChange={(e) => setReason(e.target.value)} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Mengirim..." : "Kirim Yuk!"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Request;
