/** @type {import("prettier").Config} */
export default {
    printWidth: 100,
    tabWidth: 4,
    singleQuote: true,
    semi: true,
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
