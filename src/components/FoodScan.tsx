import { useEffect, useState } from 'react';
import { useZxing } from 'react-zxing';

import { Button } from '@components/index';

export const FoodScan = () => {
  const [data, setData] = useState('Not Found');
  const [devices, setDevices] = useState<MediaDeviceInfo[]>();
  // const [showScanningModal, setShowScanningModal] = useState<boolean>(false);

  const { ref } = useZxing({
    onDecodeResult(result: any) {
      setData(result.getText());
    },
    onDecodeError(error) {
      // eslint-disable-next-line no-console
      console.log(error);
    },
    onError(error) {
      // eslint-disable-next-line no-console
      console.log(error);
      // setData(error as string);
    }
  });

  useEffect(() => {
    const func = async () => {
      try {
        const availableDevices: MediaDeviceInfo[] =
          await navigator.mediaDevices.enumerateDevices();
        setDevices(availableDevices);
        const availableVideoDevices = availableDevices.filter(
          (device) => device.kind === 'videoinput'
        );
        if (availableVideoDevices.length) {
          setDevices(availableVideoDevices);
        }
      } catch (e) {
        console.log(e);
      }
    };
    func();
  }, []);

  return (
    <>
      {/* <ModalScanner
        showModal={showScanningModal}
        setShowModal={setShowScanningModal}
        setData={setData}
      /> */}
      <video ref={ref} />
      {data}
      {devices?.map((device) => device.kind)}
      <Button
        primary
        // onClick={() => setShowScanningModal(true)}
      >
        Lancer le scan
      </Button>
    </>
  );
};
