import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import store from '../store/index'
import Error from '../views/Error'
import BaseTpl from '../components/BaseTpl'
import IndexHeadContent from '../views/index/IndexHeadContent'
import IndexMainContent from '../views/index/IndexMainContent'
import AboutMeHeadContent from '../views/aboutme/AboutMeHeadContent'
import AboutMeMainContent from '../views/aboutme/AboutMeMainContent'
import ContactHeadContent from '../views/contact/ContactHeadContent'
import ContactMainContent from '../views/contact/ContactMainContent'
import ArticleHeadContent from '../views/article/ArticleHeadContent'
import ArticleMainContent from '../views/article/ArticleMainContent'
import SecretArticle from '../views/secret/SecretArticle'
import RecordMeet from '../views/recordmeet/RecordMeet'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'base_tpl',
      component: BaseTpl,
      redirect: {name: 'index'},
      children:[{
        path: "/",
        name: "index",
        components: {
          headContent: IndexHeadContent,
          mainContent: IndexMainContent,
        },
        meta: {
          title: 'ZUZI-BLOG-首页'
        }
      },
        {
          path: 'aboutme',
          name: 'aboutMe',
          components: {
            headContent: AboutMeHeadContent,
            mainContent: AboutMeMainContent,
          },
          meta: {
            title: 'ZUZI-BLOG-关于我'
          }
        },
        {
          path: 'contact',
          name: 'contact',
          components: {
            headContent: ContactHeadContent,
            mainContent: ContactMainContent
          },
          meta: {
            title: 'ZUZI-BLOG-联系我'
          }
        },
        {
          path: 'article/:articleVisitUrl',
          name: 'article',
          components: {
            headContent: ArticleHeadContent,
            mainContent: ArticleMainContent
          },
          meta: {
            title: 'ZUZI-BLOG-文章详情'
          },
          beforeEnter(to, from, next) {
            if (Object.keys(store.state.article).length !== 0) {
              next()
            } else {
              const url = "/api/articles/" + to.params.articleVisitUrl
              axios.get(url).then((res) => {
                store.commit('update', res.data)
                next()
              }).catch(() => {
                next('/error')
              })
            }
          }
        },
        {
          path: 'error',
          name: 'error',
          components: {
            headContent: Error,
            mainContent: null
          },
          meta: {
            title: 'ZUZI-BLOG-ERROR'
          }
        },
        {
          path: '/article/secret/:articleVisitUrl',
          name: 'secret_article',
          components: {
            headContent: SecretArticle,
            mainContent: null
          },
          meta: {
            title: 'ZUZI-BLOG-私密文章'
          },
        },
        {
          path: 'record-meet',
          name: 'record_meet',
          components: {
            headContent: RecordMeet,
            mainContent: null
          },
          meta: {
            title: 'ZUZI-记遇'
          },
        },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.name) {
    next('error')
  }
  next();
})
router.afterEach((to) => {
  document.title = to.meta.title
})

export default router;