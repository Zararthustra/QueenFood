import { useState } from 'react';
import { useMediaDevices } from 'react-media-devices';
import { useZxing } from 'react-zxing';
import { App, Empty } from 'antd';
import { Select } from 'antd';

import { IconCrown, IconError, IconLoader, IconScan } from '@assets/index';
import { Button, ScannedProduct } from '@components/index';
import { useQueryRetrieveFoodByBarcode } from '@queries/index';
import { messageObject } from '@utils/formatters';

export const FoodScan = () => {
  const { message } = App.useApp();
  const [data, setData] = useState<string | undefined>();
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [selectedDevice, setSelectedDevice] = useState<string | null>();

  const constraints: MediaStreamConstraints = {
    video: true,
    audio: false
  };
  const { devices } = useMediaDevices({ constraints });
  const videoDevices = devices?.filter(
    (device) => device.kind === 'videoinput'
  );
  const {
    data: scan,
    isError,
    error,
    isSuccess,
    isLoading
  } = useQueryRetrieveFoodByBarcode(data);

  const { ref } = useZxing({
    onDecodeResult(result: any) {
      if (data) return;
      setData(result.getText());
      setIsScanning(false);
    },
    onDecodeError(error) {
      if (!selectedDevice || !!data) return;
      console.log(error);
      setIsScanning(true);
    },
    onError(error) {
      if (!selectedDevice || !!data) return;
      message.error(messageObject('error', 'Une erreur est survenue.'));
      console.log(error);
      setIsScanning(false);
    },
    paused: !selectedDevice,
    ...(!!selectedDevice && { deviceId: selectedDevice })
  });

  if (data)
    return (
      <div className="flex flex-col items-center gap-5">
        {isLoading && (
          <div className="flex flex-col items-center text-center text-zinc-400">
            <IconCrown loader width={100} height={100} />
            <i>Recherche en base de donnée...</i>
          </div>
        )}
        {isError &&
          (error.response?.status === 404 ? (
            <Empty description="Ce produit n'existe pas en base de donnée." />
          ) : (
            <div className="bubble bubble--error">
              <IconError className="shrink-0" />
              <p>Une erreur est survenue.</p>
            </div>
          ))}
        {isSuccess && <ScannedProduct product={scan.product} />}

        <Button
          primary
          className="w-full"
          onClick={() => {
            setData('');
            setSelectedDevice(null);
          }}>
          <IconScan />
          Scanner un autre produit
        </Button>
      </div>
    );

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <Select
        id="devices"
        className="my-5"
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

      {!videoDevices?.length && (
        <div className="bubble bubble--error">
          <IconError className="shrink-0" />
          <div>
            <p className="font-bold">
              Scan impossible. Cela peut être dû à plusieurs raisons:
            </p>
            <p>- Cet appareil n'a pas de caméra.</p>
            <p>- Vous avez refusé de la partager.</p>
          </div>
        </div>
      )}

      {isScanning && (
        <div className="bubble bubble--info text-primary-500">
          <IconLoader className="shrink-0" />
          <p>Scan en cours...</p>
        </div>
      )}

      <div className="relative">
        <video ref={ref} className="rounded" />
        {!!selectedDevice && (
          <div className="absolute left-[50%] top-[50%] h-[100px] w-[250px] translate-x-[-50%] translate-y-[-50%] animate-pulse rounded border-[1px] border-dashed border-primary-500" />
        )}
      </div>
    </div>
  );
};
