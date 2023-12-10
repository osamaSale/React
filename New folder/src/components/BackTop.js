import React, { useEffect, useState } from "react"


export const BackTop = () => {
    const [backTopButton, setBackTopButton] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackTopButton(true)
            } else {
                setBackTopButton(false)
            }
        })
    }, [])
    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="app">
            {backTopButton && (
                <button
                    style={{
                        position: "fixed",
                        bottom: "50px",
                        right: "50px",
                        width: "50px",
                        fontSize: "20px"
                    }}
                    type="button"
                    className="btn btn-danger btn-floating btn-lg"
                    id="btn-back-to-top"
                    onClick={scroll}
                >
                    <i className="fas fa-arrow-up"></i>
                </button>
            )}
        </div>
    );
}

