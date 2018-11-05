
setInterval(
    ()=>{
        var x = new Date()
        var jam = x.getHours()
        var menit =x.getMinutes()
        var detik =x.getSeconds()
        var noljam =''
        nolmenit = ''
        noldetik = ''
        if(jam<10){noljam='0'}
        if(menit<10){nolmenit='0'}
        if(detik<10){noldetik='0'}
        console.log(
            noljam + jam + ':'+nolmenit+menit+':'+noldetik+detik
        )
    }, 2000
)

