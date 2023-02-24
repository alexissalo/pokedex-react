import { useState, useEffect } from "react";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  function toggleVisibility() {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <div className="scroll-button">
      {isVisible && (
        <button className="scroll-button-up" onClick={scrollToTop}>
          ⬆
        </button>
      )}
      {isVisible && (
        <button className="scroll-button-down" onClick={scrollToBottom}>
          ⬇
        </button>
      )}
    </div>
  );
}

export default ScrollButton;
