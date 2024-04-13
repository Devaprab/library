import {createRouter,createWebHistory} from 'vue-router';

import HomePage from './components/HomePage.vue';
import LoginPage from './components/LoginPage.vue';
import BookList from './components/BookList.vue';
import AdminPage from './components/AdminPage.vue';
import NavBar from './components/NavBar.vue';
import BookCard from './components/BookCard.vue';
import AddBook from './components/AddBook.vue';
import ManageBook from './components/ManageBook.vue';
import TeacherList from './components/TeacherList.vue';
import IssueBook from './components/IssueBook.vue';
import ReturnPage from './components/ReturnPage.vue';
import AdminRegister from './components/AdminRegister.vue'
const router = createRouter ({
    history:createWebHistory(),
    routes:[
        
        {
            path:'/',
            name: 'navbar',
            component:NavBar,
            children: [
                {
                    path:'/',
                    name: 'home',
                    component:HomePage,
                },
                {
                    path:'/login',
                    name: 'login',
                    component:LoginPage,
                },
                {
                    path:'/adminregister',
                    name: 'adminregister',
                    component:AdminRegister
                },
                {
                    path: '/booklist',
                    name: 'list',
                    component:BookList,
                },
            ],
        },
                {
                    path: '/adminpage',
                    name: 'adminpage',
                    component:AdminPage,
                    children: [
                        {
                            path:'/books',
                            alias:'',
                            name: 'books',
                            component:BookCard
                        },
                        {
                            path: '/addbook',
                            name: 'addbook',
                            component:AddBook,
                        },
                        {
                            path: '/managebook',
                            name: 'managebook',
                            component: ManageBook,
                        },
                        {
                            path: '/teachers',
                            name: 'teachers',
                            component: TeacherList
                        },
                        {
                            path: '/bookissue',
                            name: 'bookissue',
                            component: IssueBook
                        },
                        {
                            path: '/returnedBooks',
                            name: 'returnedBooks',
                            component: ReturnPage
                        }
                    ],
                },
    ],
})

export default router; 