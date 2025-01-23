import { QRCodeSVG } from "qrcode.react" // Библиотека генерации QR кода

import { SCAN_DATA } from "./constants";

export const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    return (
        <div>
            {data.map((text) => (
                <p key={text}>
                    {text}
                    <QRCodeSVG value={text} />
                </p>
            ))}
        </div> 
    )
}