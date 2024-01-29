import { useState } from 'react';
import { useZxing } from 'react-zxing';
import { Modal } from 'antd';

interface IModalScannerProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  setData: (value: string) => void;
}

export const ModalScanner = ({
  showModal,
  setShowModal
}: IModalScannerProps) => {
  const [data, setData] = useState('Not Found');
  const { ref } = useZxing({
    onDecodeResult(result) {
      console.log(result);
      setData(result.getText());
    },
    paused: showModal
  });

  return (
    <Modal
      title="Scannez un produit"
      styles={{ body: { maxHeight: '60vh', overflowY: 'auto' } }}
      footer={false}
      open={showModal}
      onCancel={() => setShowModal(false)}>
      <video width="300" height="300" ref={ref} />
      {data}
    </Modal>
  );
};
