import Vue from 'vue'

import App from './components/App'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Topic from './components/Topic'
import Topics from './components/Topics'
import NewTopic from './components/NewTopic'


import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)

Vue.use(VueResource)

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
Vue.http.options.root = 'http://forumapi.dev:8000'

export var router = new VueRouter
export default Vue

router.map({
  '/':{
    name: 'home',
    component: Home
  },
  '/signin':{
    name:'auth.signin',
    component:  SignIn
  },
  '/signup':{
    name:'auth.signup',
    component: SignUp
  },
  '/section/:sectionId':{
    name: 'section',
    component: Topics
  },
  '/topic/:topicId': {
    name: 'topic',
    component: Topic
  },
  '/topic/new': {
    name: 'topic.new',
    component: NewTopic
  }
})


router.start(App, '#app')
