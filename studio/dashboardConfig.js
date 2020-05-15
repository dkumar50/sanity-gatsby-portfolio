export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ebe396f33a14048dd8c26c8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ep1c44gb',
                  apiId: 'f1305f43-640f-48c0-81ca-537ca15f629b'
                },
                {
                  buildHookId: '5ebe396fb31058c2f54a8567',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6f7s6etw',
                  apiId: 'efed0f91-d484-4821-a180-b116b2dce08a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dkumar50/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6f7s6etw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
