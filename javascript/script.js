/**
 * Descrizione:
 * Rifare l'esercizio dello slider come fatto assieme in classe, e una volta raggiunto il risultato richiesto,
 * sperimentate e provate ad implementare quello che volete, anche qualche funzionalità particolare!
 * 
*/

let root = new Vue(
    {
        el: '#root',
        
        data: {
            images: [
                {
                    source: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2020/05/Lord-of-the-Rings-Gandalf-Grey-and-White.jpg',
                    alt: 'wizard image of Gandalf',
                },
                {
                    source: 'https://imperodisney.files.wordpress.com/2018/01/merlino-merlin-la-spada-nella-roccia-disney-live-action.jpg',
                    alt: 'wizard image of Merlin',
                },
                {
                    source: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/24/17/Albus-Dumbledore.jpg?width=1200',
                    alt: 'wizard image of Dumbledore',
                },
                {
                    source: 'https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/yoda-advice-always-with-you-what-cannot-be-done.jpg',
                    alt: 'wizard image of Yoda',
                },
                {
                    source: 'https://tech.everyeye.it/public/immagini/21122020/curiosita-storiche_notizia-2.jpg',
                    alt: 'wizard image of Houdini',
                },
                {
                    source: 'https://upload.wikimedia.org/wikipedia/it/thumb/d/db/Aladdin_-_Jafar.JPG/1200px-Aladdin_-_Jafar.JPG',
                    alt: 'wizard image of Jafar',
                },
                {
                    source: 'https://www.ciakclub.it/wp-content/uploads/2020/05/MV5BYTM4YWY4YWMtOWE2Ny00MjRhLWE3YWQtNzIyNTFhYzM3MmE2XkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_SX1777_CR001777755_AL_.jpg',
                    alt: 'wizard image of David Bowie',
                },
            ],
            imageIndex: 0,
        },
        methods: {
            beforeImg: function(){
                this.imageIndex--;
                // console.log(this.imageIndex);
                if(this.imageIndex < 0){
                    this.imageIndex = this.images.length;
                }
            },

            nextImg: function(){
                this.imageIndex++;
                // console.log(this.imageIndex);
                if(this.imageIndex >= this.images.length){
                    this.imageIndex = 0;
                }
            },
        }
    }
);