let Pseries = [0,1/3,2/3,5/3];
//監聽
$('.nav-item a').click(function(e){
    //tab switch
    e.preventDefault();
    let tab = $(this).attr('id');
    if($(this).hasClass('active')||tab =='resetall'){
        return;
    }else{
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
        $('main section').addClass('d-none');
        $(`.${tab}`).removeClass('d-none');
        return;
    }
})
$('#exweap').click(function(e){
    $('#exweap').toggleClass('active');
})
$('#condition input').on('change',function(e){
    damage();
})

function cal(accumulation,ps){
    let SPR = parseInt($('#SPR').val()) > 400 ? 400 : parseInt($('#SPR').val())
    return Math.round((1.5+(180*($('#exweap').hasClass('active')? 2 : 1)-1.5)*((SPR-1)/(400-1)) ** 5)*(1+accumulation)*(1+ps));
}

function damage(){
    let str = '';
    [4,3,2,1,0].forEach(items => {
        let arr = [];
        arr.push(items);
        Pseries.forEach(a => {
            arr.push(cal(items,a));
        })
        $(`#count-${items}`).html(`<td>${arr.join('</td><td>')}</td>`);
    })
}
damage()