//Con un click su “CREA” viene pushato un nuovo post nell’array posts, con il testo della textarea.
//Sviluppare sia in vanilla/es6 che in VueJS
Vue.config.devtools = true;

new Vue(
    {
        el: '#profile-page',
        data: {
            myProfile: {
                details: {
                    name: 'Pierfilippo',
                    surname: 'Baudo',
                    pic: 'https://www.focus.it/site_stored/imgs/0003/042/nerd2.1020x680.jpg',
                },
                posts: [
                    {
                        text: "C'è nessuno?",
                        mediaPath: 'https://acqualete.it/wp-content/uploads/2015/09/La-Particella-di-Sodio-1.jpg',
                        date: '26-05-2021'
                    }, {
                        text: "Vi ricordate di Windows XP? Che ricordi, non ce la faccio...",
                        mediaPath: 'https://upload.wikimedia.org/wikipedia/it/d/d3/Colline_%28immagine%29.jpg',
                        date: '01-06-2021'
                    }, {
                        text: "Mi sono iscritto in palestra!",
                        date: '16-06-2021'
                    },
                    {
                        text: 'Vi presento il mio amico Mimmo',
                        mediaPath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Supernerd_%283262512306%29.jpg/1024px-Supernerd_%283262512306%29.jpg',
                        date: '17-06-2021'
                    }
                ],
            },
            input: ''
        },
        methods:{
            addMessage: function(){
                const time = dayjs();
                const dateTimeString = time.format('DD/MM/YYYY HH:mm:ss');

                let newPost = this.input;
                this.myProfile.posts.push({
                    text: newPost,
                    date: dateTimeString
                });
                this.input='';
                setTimeout(() => {
                    document.querySelector('.post:last-child').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
                },);
            }
        },
    }
);