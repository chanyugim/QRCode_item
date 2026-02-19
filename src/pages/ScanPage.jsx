import PageInfo from "./pageInfo";
import QrScanner from "qr-scanner";
import {useState, useRef, useEffect} from 'react';

const ScanPage = ({pageName, number}) => {
  const videoRef = useRef(null);
  const scannerRef = useRef(null);
  const [qrResult, setQrResult] = useState("");

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      scannerRef.current = new QrScanner(
        videoElement,
        (result) => {
          console.log('스캔 결과:', result);
          setQrResult(result.data);
        },
        {
          onDecodeError: (error) => {},
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );
      scannerRef.current.start().catch((err) => {
        console.error("카메라 시작 실패:", err);
      });
    }
    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop();
        scannerRef.current.destroy();
      }
    };
  }, []);

  return (
        <div>
            <PageInfo name={pageName} num={number}></PageInfo>
            <div id="QRscanner">
                <video style={{width: '100%', height: '100%', objectFit: 'cover'}} ref={videoRef}></video>
            </div>
            <p>{qrResult}</p>
        </div>
    );
}
export default ScanPage;