import { useRef } from 'react';
import QRCode from 'react-qr-code';
// import { useReactToPrint } from 'react-to-print';
import { Button } from './ui/button';

type InviteQRCodeProps = {
  inviteId: string;
};

function InviteQRCode({ inviteId }: InviteQRCodeProps) {
  const qrCodeRef = useRef(null);

  return (
    <>
      <Button variant="outline">Gerar QR Code</Button>
      <QRCode ref={qrCodeRef} className="sr-only" value={inviteId} size={200} />
    </>
  );
}

export default InviteQRCode;
