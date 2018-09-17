module.exports = {
    title: 'dev notes',
    description: '技術メモ',
    head: [
        ['link', { rel: 'icon', href: `/favicon.png` }],
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'GitHub', link: 'https://github.com/uphy/dev-notes/' },
        ],
        sidebar: [
            {
                title: 'macOS',
                collapsable: false,
                children: [
                    'mac/os',
                    'mac/softwares',
                    'mac/terminal',
                    'mac/devenv'
                ]
            }
        ]
    },
    base: "/dev-notes/",
    markdown: {
        config: md => {
            md.options.linkify = true;
            md.use(require('markdown-it-plantuml'));
        }
    }
}