import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import PlayfairCipher from "../utils/PlayfairCipher.js"; //Ganti import metode disini
import ReaderTxt from "../components/ReaderTxt.jsx";
import CipherTextComponent from "../components/CipherTextComponent.jsx";

const PlayfairPage = () => {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");

  const playfair = new PlayfairCipher(key); //tinggal ganti metode nya disini

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col className="col-spacing">
              <div className="">
                <h1>Playfair Cipher</h1>
                <p>
                  Metode menyandikan teks (26 karakter alfabet) dengan
                  mengenkripsi pasangan huruf (bigram) untuk mempersulit
                  analisis frekuensi kemunculan huruf pada teks.
                </p>
              </div>
              <div className="reader">
                <ReaderTxt
                  setPlaintext={setPlaintext}
                  setCiphertext={setCiphertext}
                />
              </div>
              <div className="input-group">
                <label htmlFor="key">Key:</label>
                <textarea
                  id="key"
                  value={key}
                  onChange={(e) =>
                    setKey(e.target.value.toUpperCase().replace(/[^A-Z]/g, ""))
                  }
                  rows={1} // Set the number of rows for the textarea
                />
              </div>
            </Col>
            <CipherTextComponent
              plaintext={plaintext}
              setPlaintext={setPlaintext}
              ciphertext={ciphertext}
              setCiphertext={setCiphertext}
              cipher={playfair}
            />
          </Row>
          <Row className="download d-flex align-items-center">
            <p>Download Cipher Text File Disini.</p>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default PlayfairPage;
