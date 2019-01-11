// キーイベント取得
document.onkeyup=function(e){
  console.log("keyup"+e.keyCode)
  if(e.keyCode==120){
    var url = document.getElementById('MainVideoPlayer').children[0].src;
    console.log("open new window -> "+url)
    windowopen(url);
  }
};

// 開くウィンドウ指定
function windowopen(url){
  html=window.open(url,'test',"width=640,height=360,toolbar=1,location=1,directories=1,status=0,menubar=1,scrollbars=1");
  html.document.write('\
    <html>\
      <head>\
        <meta name="viewport" content="width=device-width">\
      </head>\
      <body style="margin: 0px;">\
        <video controls="" autoplay="" name="media" height="100%" width="100%">\
          <source src="'+url+'" type="video/mp4" width>\
        </video>\
      </body>\
    </html>\
  ');
}
