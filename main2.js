var box_2 = document.querySelector('.box2')
var list_item = ['JS', 'PHP', 'CSS', 'HTML']
var input = document.querySelector('.input')
var btn_input = document.querySelector('.btn')

// hàm rander
function rander() {
    content = ''
    for(var i = 0; i< list_item.length; i++) {
        content += `<li class='box2-item'>
        <span class="span">${list_item[i]}</span>
        <div class="hidden-box-edit hiddens">
            <input type="text" class="edit-input">
            <button class="edit-value">Sua</button>
        </div>
        <div class="box-edit">
            <button class="edit">Sua</button>
            <button class="xoa">Xoa</button>
        </div>
    </li>`
    }
    box_2.innerHTML = content
}
rander()

// rander bằng map()
// var rander = list_item.map(function() {
//     for(var i = 0; i< list_item.length; i++) {
//         return `<li>
//         <span class="span">${list_item[i]}</span>
//         <div class="hidden-box-edit hiddens">
//             <input type="text" class="edit-input">
//             <button class="edit-value">Sua</button>
//         </div>
//         <div class="box-edit">
//             <button class="edit">Sua</button>
//             <button class="Xoa">Xoa</button>
//         </div>
//     </li>`
//     }
// })
// box_2.innerHTML = rander.join('')

var input = document.querySelector('.input')
var btn_input = document.querySelector('.btn')

// thêm
btn_input.addEventListener('click', function(){
    if(input.value != '') {
        list_item.push(input.value)
    }
    input.value = ''
    rander()

    var dels = document.querySelectorAll('.xoa')
    var box2_items = document.querySelectorAll('.box2-item')
    dels.forEach((del, index)=>{
        del.addEventListener('click', function() {
            box2_items[index].style.display = 'none'
            list_item.splice(index, 1)
            console.log(index)
            console.log(list_item)
        })
    })

    var edits = document.querySelectorAll('.edit')
    var edit_input = document.querySelectorAll('.edit-input')
    var edit_value = document.querySelector('.edit-value')
    var hidden_box_edits = document.querySelectorAll('.hidden-box-edit')
    edits.forEach((edit, index) => {
        edit.addEventListener('click', function(){
            hidden_box_edits[index].classList.toggle('hiddens')
            // hidden_input(hidden_box_edits, index)
            //or
            hidden_box_edits.forEach((hidden_box_edit, i) => {
                if(index != i) {
                    hidden_box_edit.classList.add('hiddens')
                }
            })
            edit_value.addEventListener('click', function() {
                if(edit_input[index].value != '') {
                    console.log(edit_input[index].value)
                    list_item[index] = edit_input[index].value
                }
                rander()
            })
        })

    })
})

function hidden_input(edits, index1)  {
    edits.forEach((edit, index) => {
        if(index1 != index) {
            edit.classList.add('hiddens')
        }
    })
}





//xóa




