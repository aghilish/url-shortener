module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/e2e/**/*.[jt]s?(x)', '**/?(*.)+(e2e).[jt]s?(x)', '!src/**/*.d.{ts,js}'],
    modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/', '<rootDir>/src/spec.ts'],
    moduleDirectories: ['node_modules', 'src'],
};
