// TranslateWidget.jsx
import React, { useEffect } from 'react';

const TranslateWidget = () => {
    useEffect(() => {
        function googleTranslateElementInit() {
            var config = {
                pageLanguage: 'en',
                includedLanguages: 'en,hi',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            };
            var langOptionsID = 'google_translate_element';
            new google.translate.TranslateElement(config, langOptionsID);
        }

        // Load the Google Translate script dynamically
        const script = document.createElement('script');
        script.src =
            '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return <div id="google_translate_element"></div>;
};

export default TranslateWidget;
