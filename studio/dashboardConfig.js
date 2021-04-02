export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60670aa96887e56f3a2fee3d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-2-studio-2n2jqc6t',
                  apiId: '79c00734-da0b-4895-9aac-982954ac8344'
                },
                {
                  buildHookId: '60670aa94b2cd73f96c69732',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-2-web-x6dnm469',
                  apiId: 'e56e47a2-362f-4c4f-b211-ffbc319b0087'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fj67890/sanity-eleventy-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-2-web-x6dnm469.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
