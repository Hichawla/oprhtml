    <!-- Initialize the plugin: -->

    $(document).ready(function() {
        $('#example-getting-started').multiselect();//end of multi select here 

	        $("#menu-toggle").click(function(e) {
	        	e.preventDefault();
	        $("#wrapper").toggleClass("toggled");
    	});//end of Menu taggle here 

	   try {
            Typekit.load({
                async: true
            });
        } catch (e) {}

        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })

        $(".content_10").mCustomScrollbar({
          set_height:"300px",
          mouseWheel:true
        });//end of Notification content here 

        $('.form_date').datetimepicker({
            weekStart: 1,
            todayBtn:  1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            minView: 2,
            forceParse: 0
        });//end of Date Picker here 
        
        $(".vender-btn").click(function(){
            $(".vender").toggleClass("inactive");
        });
    
    });//end of ready doc here 
