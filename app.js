//function tidak dapat memanggil variable di dalam function lain
// x = 10
// y = 12
// z = 1
// function tambah() {
//     var z = 11
//     console.log(x + y + z)
// }

// function baru() {
//     console.log(x + y + z)
// }
// tambah()
// baru()

//function ekspresion dapat menjumlahkan var di luar
// kuadrat = 
// function(x){
// console.log(x**2)
// }
// kuadrat(12)
// kuadrat(13)


// function baru(x) {
// var img=''
// for(var i=0; i<x; i++){
//     for(var j=0; j<=i; j++){
//         img += ' * '
//     }
//     img +='\n'  
//     }
//     console.log(img)
// }
// baru(3)

// function GG(x){
//     if(x%2 ==0){
//     console.log(x +' angka Genap')
// }else(
//     console.log(x +' angka ganjil')
// )
// }
// GG(3)

//Contoh return Function
// function GG(x){
//     if(x%2 ==0){
//     return x +' angka Genap'
// }else{
//     return x +' angka ganjil'
// }
// }
// console.log(GG(3))

//mengeluarkan angka urut 1-15 keliapatan nya berubah tulisan
// function print(y) {
//  for(x=1; x<=y; x++){ 
//      if (x%2==0 && x%3==0){
//          console.log('boom')
//      }else if (x%2 == 0){
//          console.log('dor')
//      }else if(x%3==0){
//         console.log('der')
//      }else(
//         console.log(x)
//      )
//  }
//  }
// print(15)

//faktorial
// //5! = 5*4*3*2*1
// function faktorial(x) {
//     if(x == 1){
//     return x
// }else{
//     return x = x *faktorial(x-1)
// }
// }

// console.log(faktorial(4))


//Function setTimeout untuk menampilkan sesuai dengan delay detik yang kita mau
// setTimeout(
//     ()=>{console.log('Halo!')}, 5000
// )
// //Function setInterval untuk menampilkan sesuai dengan delay detik yang kita mau
// setInterval(
//     ()=>{console.log('Hai!')}, 1000
// )


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
    }, 1000
)

