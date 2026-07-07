export interface SocialAccount {
    platform: string;
    url: string;
    icon: string;
}

export const contactEmail = 'anthony.rosado747@gmail.com';

export const cvUrl = '/CV_Anthony_Rosado.pdf';

export const accounts: SocialAccount[] = [
    {
        platform: 'GitHub',
        url: 'https://github.com/anthony-rosado',
        icon: '/icons/github.svg',
    },
    {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/anthony-rosado-ancajima',
        icon: '/icons/linkedin.svg',
    },
];
