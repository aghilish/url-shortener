module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageDirectory: 'test-results',
    collectCoverageFrom: ['src/**/*.{ts,js}', '!src/{routes,index,server}.ts'],
    moduleDirectories: ['node_modules', 'src'],
    modulePathIgnorePatterns: [
        '<rootDir>/dist/',
        '<rootDir>/node_modules/',
        '<rootDir>/src/spec.ts',
        '/e2e/',
    ],
    testTimeout: 10000,
};
