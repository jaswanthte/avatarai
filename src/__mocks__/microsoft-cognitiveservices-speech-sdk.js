// src/__mocks__/microsoft-cognitiveservices-speech-sdk.js
const mockSpeechSDK = {
    // Mock methods and properties you use from microsoft-cognitiveservices-speech-sdk
    SpeechRecognizer: jest.fn().mockImplementation(() => ({
      startContinuousRecognitionAsync: jest.fn(),
      stopContinuousRecognitionAsync: jest.fn(),
      // add other methods you use
    })),
  };
  
  module.exports = mockSpeechSDK;
  