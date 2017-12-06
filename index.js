new Vue({
    el:'#root',
    data:{
        racers:[]
    },
    created(){
        var pusher = new Pusher('8fef28323f6347beb4dc', {
            cluster:'eu',
            encrypted: true
        })
        var channel = pusher.subscribe('channel')
        
        channel.bind('event', (data) => {
            console.log(data)
            //organize position
            for(i=0; i<=(data.length-1); i++){
                  data[i].position = i+1
                //   console.log(data[i].position)
            }
            this.racers = data;
            // alert(data.message)
        })
    }

})



//configure pusher
