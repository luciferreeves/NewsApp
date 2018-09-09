import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  ngAfterViewInit(){
    $(document).ready(function(){
      var url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f449ba44714842379f423215072370dd';
      $.getJSON(url).then(function(res){
        //console.log(res);
        var count;
        for (count = 0; count<20; count++) {
          var article = res.articles[count];
          var ImageURL = res.articles[count].urlToImage;
          //console.log(article);
          $('#showNews').append('<div id="'+count+'" class="article"><div class="overlayart"><div class="art"><h3>'+article.title+'</h3><p>'+article.description+'<br><br><a target="_blank" href="'+article.url+'">Follow Link</a></p></div></div></div>');
          $("#"+count).css('background-image','url(' + ImageURL + ')');
        }
      })
      //$.getJSON(url).then(function(res){
      //     console.log(res)
          // var count;
          // for(count = 0; count < 20; count++){
          //     var article = res.articles[count]
          //     var ImageURL = res.articles[count].urlToImage
          //     //console.log(ImageURL)
          //     $('#showNews').append('<div id="'+count+'" class="article"><div class="overlayart"><div class="art"><h3>'+article.title+'</h3><p>'+article.description+'<br><a href="'+article.url+'">Follow Link</a></p></div></div></div>');
          //     $("#"+count).css('background-image','url(' + ImageURL + ')');
         //}
      })
    }
  }