import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { Html5QrcodeScannerConfig } from 'html5-qrcode/esm/html5-qrcode-scanner';

import { Button } from '@components/index';

const qrcodeRegionId = 'html5qr-code-full-region';

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props: any) => {
  const config: any = {};
  if (props.fps) {
    config.fps = props.fps;
  }
  if (props.qrbox) {
    config.qrbox = props.qrbox;
  }
  if (props.aspectRatio) {
    config.aspectRatio = props.aspectRatio;
  }
  if (props.disableFlip !== undefined) {
    config.disableFlip = props.disableFlip;
  }
  return config;
};

const BarcodeScanner = (props: any) => {
  useEffect(() => {
    // when component mounts
    const config: Html5QrcodeScannerConfig = createConfig(props);
    const verbose = props.verbose === true;
    // Suceess callback is required.
    if (!props.qrCodeSuccessCallback) {
      throw 'qrCodeSuccessCallback is required callback.';
    }
    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      verbose
    );
    html5QrcodeScanner.render(
      props.qrCodeSuccessCallback,
      props.qrCodeErrorCallback
    );

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error('Failed to clear html5QrcodeScanner. ', error);
      });
    };
  }, []);

  return <div id={qrcodeRegionId} />;
};

export const FoodScan = () => {
  const [data] = useState('Not Found');
  // const [setShowScanningModal] = useState<boolean>(false);

  const onNewScanResult = (decodedText: string, decodedResult: any) => {
    // handle decoded results here
    console.log(decodedText);
    console.log(decodedResult);
  };

  return (
    <>
      <BarcodeScanner
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
      {data}
      <Button
        primary
        // onClick={() => setShowScanningModal(true)}
      >
        Lancer le scan
      </Button>
    </>
  );
};
