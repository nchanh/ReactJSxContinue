import { useEffect, useState } from "react";

function Content() {
  const [countdown, setCountdown] = useState(199);
  const [count, setCount] = useState(1);
  const [image, setImage] = useState();

  useEffect(() => {
    const onCountdown = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000);

    // Stop interval
    clearInterval(onCountdown);

    return () => clearInterval(onCountdown);
  }, []);

  useEffect(() => {
    console.log(`Mounted ${count}`);

    // Cleanup function
    return () => {
      console.log(`Unmounted ${count}`);
    };
  }, [count]);

  useEffect(() => {
    // Cleanup function
    return () => image && URL.revokeObjectURL(image.preview);
  }, [image]);

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    setImage(file)
  };

  return (
    <div style={{ padding: 20 }}>
      <h5>{countdown}</h5>
      <button
        onClick={() => setCount(count + 1)}
      >{count}</button>

      <hr/>
      <input
        type="file"
        onChange={onChangeImage}
      />
      {image && (
        <img src={image.preview} alt="" width="100" />
      )}
    </div>
  );
}

export default Content;
