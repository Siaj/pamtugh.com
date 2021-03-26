/*------------------------------------------------------------------------------*/
/*  Home_Page Slider
/*------------------------------------------------------------------------------*/

var revapi1,
  tpj;
jQuery(function() {
  tpj = jQuery;
  if(tpj("#rev_slider_1_1").revolution == undefined){
    revslider_showDoubleJqueryError("#rev_slider_1_1");
  }else{
    revapi1 = tpj("#rev_slider_1_1").show().revolution({
      sliderLayout:"fullwidth",
      visibilityLevels:"1240,1024,778,480",
      gridwidth:"1240,1024,778,480",
      gridheight:"850,701,450,350",
      minHeight:"",
      spinner:"spinner0",
      editorheight:"705,768,450,350",
      responsiveLevels:"1240,1240,778,480",
      disableProgressBar:"on",
      navigation: {
        mouseScrollNavigation:false,
        onHoverStop:false,
        touch: {
          touchenabled:true
        },
        arrows: {
          enable:true,
          tmp:"<div class=\"tp-title-wrap\"><div class=\"tp-arr-imgholder\"></div></div>",
          style:"zeus",
          hide_onmobile:true,
          hide_under:778,
          hide_onleave:true,
          left: {
            h_offset:30
          },
          right: {
            h_offset:30
          }
        }
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid:true
      },
    });
  }
  
});


var revapi2,
    tpj;
jQuery(function() {
    tpj = jQuery;
    if(tpj("#rev_slider_1_2").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_1_2");
    }else{
        revapi3 = tpj("#rev_slider_1_2").show().revolution({
            sliderLayout:"fullwidth",
            visibilityLevels:"1240,1024,778,480",
            gridwidth:"1240,1024,778,480",
            gridheight:"655,570,450,350",
            minHeight:"",
            spinner:"spinner0",
            editorheight:"705,768,450,350",
            responsiveLevels:"1240,1240,778,480",
            disableProgressBar:"on",
            navigation: {
                mouseScrollNavigation:false,
                onHoverStop:false,
                touch: {
                    touchenabled:true
                },
                arrows: {
                    enable:true,
                    style:"custom",
                    hide_onmobile:true,
                    hide_under:768,
                    hide_onleave:true,
                    left: {

                    },
                    right: {

                    }
                }
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid:true
            },
        });
    }
    
});


var revapi3,
    tpj;
jQuery(function() {
    tpj = jQuery;
    if(tpj("#rev_slider_1_3").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_1_3");
    }else{
        revapi3 = tpj("#rev_slider_1_3").show().revolution({
            sliderLayout:"fullwidth",
                visibilityLevels:"1240,1240,778,480",
                gridwidth:"1240,1240,778,480",
                gridheight:"850,850,450,350",
                minHeight:"",
                spinner:"spinner0",
                editorheight:"850,768,450,350",
                responsiveLevels:"1240,1240,778,480",
                disableProgressBar:"on",
                navigation: {
                  onHoverStop:false,
                  bullets: {
                    enable:true,
                    tmp:"",
                    style:"hermes",
                    h_align:"right",
                    v_align:"center",
                    h_offset:50,
                    v_offset:0,
                    direction:"vertical",
                    hide_onmobile:true,
                    hide_under:768,
                    hide_onleave:true,
                  }
                },
                fallbacks: {
                  allowHTML5AutoPlayOnAndroid:true
                },
        });
    }
    
});