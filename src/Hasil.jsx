import React, { useEffect, useState } from 'react'
import Anonim from './services/anonim'

const Hasil = () => {
  const [hasil, setHasil] = useState([{
    isi: 'https://firebasestorage.googleapis.com/v0/b/ask-fun-d10f0.appspot.com/o/images%2FJGYvHzJ5yUeSToURkHsmSdFAPwv1.jpg?alt=media&token=d5a81e71-dda3-4a5d-9c8c-69a9a89f32c8'
  }])

  useEffect(() => {
    Anonim
      .getAll()
      .then(result=> {
        setHasil(result)
      })
  }, [])

  console.log(hasil);
  return (
    <div>
      {hasil.map(gambar => {
        // console.log(gambar.isi)
        return (
          <img key={gambar.id} src={gambar.isi} alt="" />
        )
      })}
    </div>
  )
}

export default Hasil