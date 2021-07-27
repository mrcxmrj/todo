import React, { useMemo, useState } from "react";

export const TodoText = (props) => {
    // calculates text width in lowercase-letter width using following approximations:
    // lowercase-letter = 1/37 line; uppercase-letter = 1/26 line
    // therefore uppercase-letter = 37/26 lowercase-letter; which is approximately k=1.42
    const k = 1.42;
    const calculateWidth = (text) => {
        console.log("calculating ;l");
        let countUppercase = (text.match(/[A-Z]/g) || []).length;
        let countLowercase = text.length - countUppercase;
        let textWidth = Math.trunc(countUppercase * 1.42 + countLowercase);
        //console.log(textWidth);
        return textWidth;
    };

    // calculates text width only on value change
    // currently no editing is available, so should only calculate on todo creation
    const textWidth = useMemo(() => calculateWidth(props.text), [props.text]);

    const lineWidth = 30;
    const [isShortened, toggleLength] = useState(props.text.length > lineWidth);

    const handleClick = () => {
        if (textWidth > lineWidth) {
            toggleLength(!isShortened);
        }
    };

    const shortenText = (text) => {
        let shortenedText = "";
        let shortenedTextWidth = 0;
        [...text].forEach((c) => {
            let width = 1;
            if (c === c.toUpperCase()) {
                width = k;
            }
            if (shortenedTextWidth + width < lineWidth) {
                shortenedText += c;
                shortenedTextWidth += width;
            }
        });

        return shortenedText;
    };

    return (
        <p
            className={`todo-text${props.completed ? " todo-completed" : ""}`}
            onClick={handleClick}
            style={{
                cursor: textWidth > lineWidth ? "pointer" : "auto",
            }}
        >
            {isShortened ? shortenText(props.text) + "..." : props.text}
        </p>
    );
};
