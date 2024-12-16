function HomePage() {
    // ... existing code ...

    const handleSpeechRecognition = () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US'; // Set the language
        recognition.interimResults = false; // Get final results only

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            // Assuming you have a function to handle the input submission
            handleInputSubmit(transcript);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
        };

        recognition.start();
    };

    return (
        <div>
            <input type="text" placeholder="Type or speak..." />
            <button onClick={handleSpeechRecognition}>🎤 Speak</button>
            {/* ... existing code ... */}
        </div>
    );
} 