import {createStore} from 'vuex';
const store = createStore({
    state: {
        books: [
            {
              bookName:'Adujeevitham',
              authorName: 'Benyamin',
              Rack: '1',
              quantity: '50',
              category: 'Novel',
              image: require('@/assets/Adujeevitham.jpg'),
            },
            {
                bookName:' A Visit From The Goon Squad',
                authorName: 'Jennifer Egan',
                Rack: '6',
                quantity: '10',
                category: 'Novel',
                image: require('@/assets/jenni.jpg'),
            },
            {
                bookName:'Manju',
                authorName: 'M.T. Vasudevan Nair',
                Rack: '3',
                quantity: '9',
                category: 'Novel',
                image: require('@/assets/manju.jpg'),
            },
            {
                bookName:'Ram C/O Anandhi',
                authorName: 'Akhil P. Dharmajan',
                Rack: '6',
                quantity: '5',
                category: 'Novel',
                image: require('@/assets/Ram.jpg'),
            },
            {
                bookName:'Yakshi',
                authorName: 'Malayattoor Ramakrishnan',
                Rack: '7',
                quantity: '13',
                category: 'Novel',
                image: require('@/assets/yakshi.jpg'),
            },
            {
                bookName:'Premalekhanam',
                authorName: 'Vaikom Muhammad Basheer',
                Rack: '5',
                quantity: '19',
                category: 'Novel',
                image: require('@/assets/premalekhanam.jpg'),
            },
            {
                bookName:' A Visit From The Goon Squad',
                authorName: 'Jennifer Egan',
                Rack: '6',
                quantity: '10',
                category: 'Novel',
                image: require('@/assets/jenni.jpg'),
            },
            {
                bookName:'Manju',
                authorName: 'M.T. Vasudevan Nair',
                Rack: '3',
                quantity: '9',
                category: 'Novel',
                image: require('@/assets/manju.jpg'),
            },
            {
                bookName:'Ram C/O Anandhi',
                authorName: 'Akhil P. Dharmajan',
                Rack: '6',
                quantity: '5',
                category: 'Novel',
                image: require('@/assets/Ram.jpg'),
            },
            {
                bookName:'Yakshi',
                authorName: 'Malayattoor Ramakrishnan',
                Rack: '7',
                quantity: '13',
                category: 'Novel',
                image: require('@/assets/yakshi.jpg'),
            },
            {
                bookName:'Premalekhanam',
                authorName: 'Vaikom Muhammad Basheer',
                Rack: '5',
                quantity: '19',
                category: 'Novel',
                image: require('@/assets/premalekhanam.jpg'),
            },
        ]
    },
    getters: {
        displayBooks(state) {
            return state.books;
        },
    },
    mutations: {
        setBooks(state,payload) {
            state.books = payload;
        }
    }
});
export default store;