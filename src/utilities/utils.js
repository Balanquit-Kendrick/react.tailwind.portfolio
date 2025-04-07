import { 
    html, 
    css, 
    js, 
    tailwind, 
    react,
    next,
    vue,
    java,
    laravel,
    mysql,
    aws,
    php,
    node,
    python,
    git,
    gitlab,
    github,
    filezilla,
    xampp,
    vscode, 
} from '../components/TechStack'

import proj1 from '../assets/Movie.png'
import proj2 from '../assets/Tic-tac-toe.png'
import proj3 from '../assets/Weather.png'
import proj4 from '../assets/Todo.png'
import githubs from '../assets/socials/github.svg'
import facebook from '../assets/socials/facebook.svg'
import linkedin from '../assets/socials/linkedin.svg'
import instagram from '../assets/socials/instagram.svg'

const mySkills =[
    {
        name: 'Frontend',
        items: [ 
            {   
                name: 'html',
                image: html
            }, 
            {   
                name: 'css',
                image: css
            }, 
            {   
                name: 'js',
                image: js
            }, 
            {   
                name: 'react',
                image: react
            }, 
            {   
                name: 'tailwind',
                image: tailwind
            }, 
            {   
                name: 'vue',
                image: vue
            }, 
            {   
                name: 'next',
                image: next
            }, 
        ]
    },
    {
        name: 'Backend',
        items: [ 
            {   
                name: 'php',
                image: php
            }, 
            {   
                name: 'java',
                image: java
            }, 
            {   
                name: 'python',
                image: python
            }, 
            {   
                name: 'laravel',
                image: laravel
            }, 
            {   
                name: 'aws',
                image: aws
            }, 
            {   
                name: 'node',
                image: node
            }, 
            {   
                name: 'mysql',
                image: mysql
            }, 
        ]
    },
    {
        name: 'Other',
        items:[ 
            {   
                name: 'git',
                image: git
            }, 
            {   
                name: 'gitlab',
                image: gitlab
            }, 
            {   
                name: 'python',
                image: python
            }, 
            {   
                name: 'github',
                image: github
            }, 
            {   
                name: 'filezilla',
                image: filezilla
            }, 
            {   
                name: 'xampp',
                image: xampp
            }, 
            {   
                name: 'vscode',
                image: vscode
            }, 
        ]
    }
]

const projects = [
    {
        name: 'Movie App',
        imageUrl: proj1,
        url: '/movie-app/'
    },
    {
        name: 'Tic-Tac-Toe',
        imageUrl: proj2,
        url: '/tic-tac-toe/'
    },
    {
        name: 'Weather App',
        imageUrl: proj3,
        url: '/weather-app/'
    },
    {
        name: 'Todo App',
        imageUrl: proj4,
        url: 'https://github.com/Balanquit-Kendrick/To-Do-App-Vue3'
    },
]

const socials = [
    {
        url: 'https://github.com/Balanquit-Kendrick',
        svg: githubs
    },
    {
        url: 'https://www.facebook.com/kendrick.balanquit',
        svg: facebook
    },
    {
        url: 'https://www.instagram.com/kendwiiick/',
        svg: instagram
    },
    {
        url: 'https://www.linkedin.com/in/kendrick-balanquit-6075aa171/',
        svg: linkedin
    },
]
export {
    mySkills,
    projects,
    socials
}