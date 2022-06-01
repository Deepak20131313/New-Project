$(document).ready(function(){
    $("#main").click(function(){
      $("#sub_div").toggle();
      
      });
   
   });
   
   jQuery(function(){
            jQuery('#showall').click(function(){
                  jQuery('.targetDiv').show();
           });
           jQuery('.showSingle').click(function(){
                 jQuery('.targetDiv').hide();
                 jQuery('#div'+$(this).attr('target')).show();
                  
           });
   });
   
   $(".buttons a").click(function() {
   $(this).addClass('active').siblings().removeClass('active');
   });
