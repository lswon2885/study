const app = Vue.createApp({
    data() {
        return {
            myname: 'sion',
            myage: 29,
            image: 'https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/9Uc8/image/A-tfqN0k8L6gw8-2vLb28nqxxpI.jpg'
        };
    },
    methods: {
        add() {
            return this.myage + 5;
        },
        random(){
            return Math.random();
        }
    }
});

app.mount("#assignment");