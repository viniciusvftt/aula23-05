$(document).ready(//primeiro colchete e chave sao as ultimas linhas
    function(){

        var params = new URLSearchParams(location.search);
        var id = params.get("opcao");
        
       // alert(opcao);
       $.ajax({ 
        url:"https://jsonplaceholder.typicode.com/posts/"+id,
        type:"GET",
        success:function(data){ //data function (de onde vai puxar)
        console.log(data);


        $('#titulo').append(data.title);
        $('#corpo').append('<p>'+data.body+'</p');



        },
            error:function(data){

            }
         })

         $.ajax({ 
            url:"https://jsonplaceholder.typicode.com/posts/"+id+"/comments",
            type:"GET",
            success:function(data){ //function (de onde vai puxar)
            //console.log(data);

            $.each(data,
                function(i,item){  //item é o que vai puxar
                //console.log(item.userId);

                $('#comentarios').append(
                    '<div>'+
                    '<b>'+item.name+'</b><br>'+
                    item.email+
                    '<p>'+item.body+'</p>'+
                    '</div><br>'
                )
             })

            },
            error:function(data){

            }
         })
 })
