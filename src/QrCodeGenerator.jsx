import { useState } from "react";   // Хранище значений в компаненте
import { QRCodeSVG } from "qrcode.react" // Библиотека генерации QR кода
import { GENERATE_DATA } from "./constants";

import s from './QrCodeGenerator.module.css'	// Стили

/**
 * Компонент для генерации QR кода
 * 
 * @return {JSX.Element} 
 */
export const QrCodeGenerator = () => {
    const [value, setValue] = useState(''); // Хранище значений в компаненте
    const [result, setResult] = useState('');
    
/**
 * Handles the click event by setting the result state to the current value 
 * and clearing the input value state.
 */
    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
        localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
        setResult(value);
        setValue('');
    };

    /**
     * Handles the change event by setting the value state to the current input value 
     * and clearing the result state.
     * 
     * @param {Event} event the change event
     */
    const onChangeHandler = (event) => {
        setValue(event.target.value);  // Читаем текущее значение из компанента, в котором происходит событие
        setResult('');
    };

    console.log(result);

    return (
        <div>
            <input // Компонент для ввода текста
                type="text" 
                value={value}
                placeholder="Введите текст..." 
                onChange={onChangeHandler} 
                className={s.result}  // Задание класса для стилизации компанента css
            />

            <button type="button" onClick={onClickHandler}>Сгенерировать QR</button>

            {result !== '' && (
                <QRCodeSVG value={value} />
            )}
        </div>
    );
};