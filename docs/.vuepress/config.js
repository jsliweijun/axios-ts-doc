module.exports = {
    base: '/axios-ts-doc/',
    dest: 'dist',
    title: 'ts 实现 axios',
    description: '使用 ts 实现 axios 库',
    themeConfig: {
        displayAllHeaders: false,
        editLinks: false,
        docsDir: 'docs',
        // header组件的菜单栏配置
        nav: [
            {
                text: 'GitHub',
                link: 'https://github.com/jsliweijun/axios-ts-doc'
            }
        ],
        // 左侧菜单栏配置
        sidebar: [
            {
                title: 'ts-axios 项目初始化',
                collapsable: false,
                children: [
                    'c01/s01-requirements',
                    'c01/s02-initProject',
                    'c01/s03-base'
                ]
            }
        ]
    }
};
