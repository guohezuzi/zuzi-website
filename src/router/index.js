import Vue from 'vue'
import Router from 'vue-router'
import Error from '../components/Error'
import IndexHeadContent from '../components/IndexHeadContent'
import IndexMainContent from '../components/IndexMainContent'
import AboutMeHeadContent from '../components/AboutMeHeadContent'
import AboutMeMainContent from '../components/AboutMeMainContent'
import ContactHeadContent from '../components/ContactHeadContent'
import ContactMainContent from '../components/ContactMainContent'
import ArticleHeadContent from '../components/ArticleHeadContent'
import ArticleMainContent from '../components/ArticleMainContent'


Vue.use(Router)

const router =new Router({
    scrollBehavior(to,from,savePosition){
        if (savePosition){
            return savePosition
        }else {
            return {x:0,y:0}
        }
    },
    routes: [
        {
            path: '/',
            name: 'index',
            components: {
                headContent: IndexHeadContent,
                mainContent: IndexMainContent,
            },
            meta:{
                title: 'ZUZI-BLOG-首页'
            }
        },
        {
            path: '/aboutme',
            name: 'aboutMe',
            components: {
                headContent: AboutMeHeadContent,
                mainContent: AboutMeMainContent,
            },
            meta:{
                title: 'ZUZI-BLOG-关于我'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            components: {
                headContent: ContactHeadContent,
                mainContent: ContactMainContent
            },
            meta:{
                title: 'ZUZI-BLOG-联系我'
            }
        },
        {
            path: '/article/',
            name: 'article',
            components: {
                headContent: ArticleHeadContent,
                mainContent: ArticleMainContent
            },
            meta:{
                title: 'ZUZI-BLOG-文章详情'
            },
            beforeEnter(to,from,next){
                if (JSON.stringify(to.query) === '{}') {
                    next('/error')
                }else
                    next()
            }
        },
        {
            path: '/error',
            name: 'error',
            components:{
                headContent: Error,
                mainContent: null
            },
            meta:{
                title: 'ZUZI-BLOG-ERROR'
            }
        }
    ],
})

router.beforeEach ((to, from, next) => {
    if (!to.name) {next('error')}
    next();
})
router.afterEach((to) =>{
    document.title=to.meta.title
})

export default router;