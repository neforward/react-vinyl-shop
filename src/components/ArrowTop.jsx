
import { useEffect, useState } from 'react';
const ArrowTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <button
                className={`back-to-top ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
                title="Go to top"
            >
                <img src="./arrow.svg" alt="../public/arrow.svg" />
            </button>
        </>
    )
}

export default ArrowTop