var input = document.querySelector('.input');
var btn = document.querySelector('.btn');
var box2 = document.querySelector('.box2')

var hidden = document.querySelector('.hidden-box-edit')


var list_item = ['javascript','reactjs'];
rander();
function rander(){
    var content = '';
    for (var i=0; i<list_item.length;i++){
        content+= `
            <li>
                <span class="span">${list_item[i]}</span>
                <div class="hidden-box-edit hiddens">
                    <input type="text" class="edit-input">
                    <button class="edit-value">Sua</button>
                </div>
                <div class="box-edit">
                    <button class="edit">Sua</button>
                    <button class="Xoa">Xoa</button>
                </div>
            </li>
        `
    }
    box2.innerHTML = content;
}
function hiden_input(list_items,index1){
    list_items.forEach((item,index) =>{
        if (index1 != index){
            item.classList.add('hiddens');
        }
    })
}
btn.addEventListener('click',function(){
    if (input.value !=''){
        list_item.push(input.value);
        input.value='';
        rander();
    var list_xoa = document.querySelectorAll('.Xoa');
    
    var newList = list_item;
    list_xoa.forEach((item,index)=>{
    item.addEventListener('click',function(){
        if (list_item.length==0){
            list_item=[]
            newList=[]
        }else{
            newList[index]='';
        }
        list_item=[];
        for ( var i =0;i<newList.length;i++){
            if (newList[i]!=''){
                list_item.push(newList[i])
            }
        }
        this.parentElement.parentElement.remove();
        })
    })
    var list_edit = document.querySelectorAll('.edit');
    var list_edit_hidden = document.querySelectorAll('.hidden-box-edit');
    list_edit.forEach((item,index)=>{
        item.addEventListener('click',function(){
            var parent_input = this.parentElement.previousElementSibling;
            parent_input.classList.toggle('hiddens');
            hiden_input(list_edit_hidden,index);
            var hidden_input = parent_input.querySelector('.edit-input');
            var hidden_button = parent_input.querySelector('.edit-value');
            hidden_button.addEventListener('click',function(){

                parent_input.previousElementSibling.innerHTML = hidden_input.value
            })
            
        })
    })
    }
     

})


