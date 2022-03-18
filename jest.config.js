module.exports = {
    testIgonePatterns: ["/node_modules/", "./next/"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)": "<rootDir>/node_modules/babel-jest"
    },
}