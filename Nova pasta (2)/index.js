$(document).ready(
    function(){  


     //url,type,sucess,error 4 bases do ajax



        $.ajax({ 
            url:"https://jsonplaceholder.typicode.com/posts/",
            type:"GET",
            success:function(data){ //function (de onde vai puxar)
            //console.log(data);

            $.each(data,
                function(i,item){  //item é o que vai puxar
                //console.log(item.userId);

                $('#resultado').append(
                    '<li><a href="resultado.html?opcao=' +item.id+'">'+item.title+'</a></li>'    // =' o que vai puxar +'o que escrever"
                )
             })

            },
            error:function(data){

            }
         })
 })
