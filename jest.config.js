module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testMatch: ['**/tests/**/*.spec.[jt]s?(x)'],
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(vuetify)/)', // Transform Vuetify's ES Modules
    ],
    moduleNameMapper: {
        '\\.css$': '<rootDir>/__mocks__/styleMock.js',
        '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
        '^vuetify/lib$': '<rootDir>/__mocks__/vuetify.js',
    },
};
