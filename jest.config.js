module.exports = {
  transformIgnorePatterns: [
    "node_modules/(?!(microsoft-cognitiveservices-speech-sdk)/)"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  }
};
