
//THIS IS FOR THE MAP, DONT DELETE

                            new Request.JSON({
                            url: "map.php",
                            onSuccess: function(data) {
                                render(data, {
                                    editor: false
                                }); 
                            }
                            }).get({
                                id: 87374,
                                data: true
                            });
              
//END


