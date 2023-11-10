// －－－－－－－－－－－－－－－－－－
// event
// －－－－－－－－－－－－－－－－－－
// おみくじボタンクリック
$(function () {
  $('.js-fortune-start').click(

    //条件分岐　おみくじ実行orおみくじリセット
    function() {
      if ($('.js-fortune-start').hasClass('onClick')){
        // おみくじ結果をリセット
        // console.log('リセット')
        // 非表示
        $('.result').fadeOut(300);

        //おみくじボタン切替
        $('.js-fortune-start').toggleClass('onClick')   //おみくじボタンからクリックフラグを削除します。
        $('.js-fortune-start').text('運勢を占う！')   //おみくじボタンの内容を変更します。
      }else{
        // おみくじをひく
        // console.log('おみくじ')
        // // オブジェクトの宣言
        // おみくじ結果
        let fortuneResults = {
          money:[
            {stars:'★★★' , detail:'最高の金運です！いつの間にかお金が溜まっているかも・・・？'},
            {stars:'★★' , detail:'まずまず金運です！使いすぎには注意しましょう！'},
            {stars:'★' , detail:'悪い傾向が見られます！財布の紐は絞めておくと吉です！'}
          ],
          work:[
            {stars:'★★★' , detail:'最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？'},
            {stars:'★★' , detail:'まずまず仕事運です！普段通り仕事が進むでしょう！'},
            {stars:'★' , detail:'悪い傾向が見られます！自信過剰にならないように注意しましょう'}
          ],
          health:[
            {stars:'★★★' , detail:'最高の健康運です！ランニングの距離を伸ばしても良いですね！'},
            {stars:'★★' , detail:'まずまず健康運です！無理せず体を動かしましょう！'},
            {stars:'★' , detail:'悪い傾向が見られます！ケガにご注意を・・・'}
          ]
        }

        // htmlにセットします。
        let rand;   //乱数
        // 金運
        rand  = Math.floor( Math.random() * 3 );  //乱数生成
        $('.money .stars').html(fortuneResults['money'][rand]['stars']);
        $('.money .detail').html(fortuneResults['money'][rand]['detail']);
        // 仕事運
        rand  = Math.floor( Math.random() * 3 );  //乱数生成
        $('.work .stars').html(fortuneResults['money'][rand]['stars']);
        $('.work .detail').html(fortuneResults['money'][rand]['detail']);
        // 健康運
        rand  = Math.floor( Math.random() * 3 );  //乱数生成
        $('.health .stars').html(fortuneResults['health'][rand]['stars']);
        $('.health .detail').html(fortuneResults['health'][rand]['detail']);

          // 表示
          $('.result').fadeIn(300);

          //おみくじボタン切替
          $('.js-fortune-start').toggleClass('onClick')   //おみくじボタンにクリックフラグを添付します。
          $('.js-fortune-start').text('もう一度占う！')   //おみくじボタンの内容を変更します。
      }
    }
  )

});
