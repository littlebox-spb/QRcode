import { Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { QrCodeGenerator } from "./QrCodeGenerator";
import { QrCodeScanner } from "./QrCodeScanner";
import { GenerateHistory } from "./GenerateHistory";
import { ScanHistory } from "./ScanHistory";

export const Layout = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/scanHistory" element={<ScanHistory />} />
                <Route path="/generateHistory" element={<GenerateHistory />} />
            </Routes>
        </div>
    );
}