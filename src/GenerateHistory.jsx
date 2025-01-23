import { QRCodeSVG } from "qrcode.react" // Библиотека генерации QR кода

import { GENERATE_DATA } from "./constants";

export const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

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