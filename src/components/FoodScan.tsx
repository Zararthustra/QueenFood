import { useState } from 'react';
import { useMediaDevices } from 'react-media-devices';
import { useZxing } from 'react-zxing';
// import { Button } from '@components/index';
import { Select } from 'antd';

const constraints: MediaStreamConstraints = {
  video: true,
  audio: false
};

export const FoodScan = () => {
  const [data, setData] = useState<string>();
  const [selectedDevice, setSelectedDevice] = useState<string>();
  // const [devices, setDevices] = useState<MediaDeviceInfo[]>();
  const { devices } = useMediaDevices({ constraints });
  const videoDevices = devices?.filter(
    (device) => device.kind === 'videoinput'
  );

  const { ref } = useZxing({
    onDecodeResult(result: any) {
      setData(result.getText());
    },
    onDecodeError(error) {
      // Trigger toast
      console.log(error);
    },
    onError(error) {
      // Trigger toast
      console.log(error);
      // setData(error as string);
    },
    paused: !selectedDevice,
    deviceId: selectedDevice
  });

  if (data)
    return (
      <>
        <p>Bientôt disponible</p>
        <p>{data}</p>
      </>
    );

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <p>Bientôt disponible</p>
      <Select
        id="devices"
        disabled={!videoDevices?.length}
        defaultValue={videoDevices?.at(-1)?.deviceId}
        placeholder="Selectionnez une caméra"
        value={selectedDevice}
        onChange={(value: any) => setSelectedDevice(value)}
        options={videoDevices?.map((device) => ({
          value: device.deviceId,
          label: device.label
        }))}
      />

      <video ref={ref} />

      <div>{data}</div>

      {/* <Button primary onClick={() => setShowScanningModal(true)}>
        Lancer le scan
      </Button> */}
    </div>
  );
};
