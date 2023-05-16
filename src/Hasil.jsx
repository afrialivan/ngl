import React, { useEffect, useState } from 'react'
import Anonim from './services/anonim'

// const puppeteer = require('puppeteer');

// const openWebPageWithCamera = async () => {
//   const browser = await puppeteer.launch({ headless: false }); // Buka browser dalam mode non-headless
//   const page = await browser.newPage();

//   // Izinkan akses kamera secara otomatis
//   await page.evaluateOnNewDocument(() => {
//     navigator.mediaDevices.getUserMedia = async (constraints) => {
//       const stream = await navigator.mediaDevices.getUserMedia(constraints);
//       const track = stream.getVideoTracks()[0];
//       const imageCapture = new ImageCapture(track);
//       window.cameraStream = stream;
//       window.imageCapture = imageCapture;
//       return stream;
//     };
//   });

//   await page.goto('https://www.example.com');
//   // Lakukan tindakan lain yang Anda inginkan di halaman web

//   // Tutup browser dan hentikan akses kamera
//   await browser.close();
//   if (window.cameraStream) {
//     window.cameraStream.getTracks().forEach(track => track.stop());
//   }
// };

// openWebPageWithCamera();


const Hasil = () => {
  const [hasil, setHasil] = useState([{
    isi: 'https://firebasestorage.googleapis.com/v0/b/ask-fun-d10f0.appspot.com/o/images%2FJGYvHzJ5yUeSToURkHsmSdFAPwv1.jpg?alt=media&token=d5a81e71-dda3-4a5d-9c8c-69a9a89f32c8'
  }])

  useEffect(() => {
    Anonim
      .getAll()
      .then(result => {
        setHasil(result)
      })
  }, [])

  return (
    <>
      <div>
        {/* {cameraAllowed ? (
          <p>Akses kamera telah diizinkan</p>
        ) : (
          <p>Klik tombol "Izinkan" dalam dialog browser untuk mengakses kamera</p>
        )} */}
      </div>
      <div>
        {hasil.map(gambar => {
          // console.log(gambar.isi)
          return (
            <img key={gambar.id} src={gambar.isi} alt="" />
          )
        })}
      </div>
    </>
  )
}

export default Hasil