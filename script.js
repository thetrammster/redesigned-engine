addEventListener("DOMContentLoaded", ()=>{
    const btn = document.createElement('button');
    btn.textContent = 'Add Item';
    document.body.appendChild(btn);
    btn.addEventListener('click',()=> {
        console.log("your moter");
    });
    let i = 1;
    const list = document.createElement('ul');
    document.body.appendChild(list);
    btn.addEventListener('click', () => {
        const item = document.createElement('li');
        item.textContent = i;
        list.appendChild(item);
        i++;
    });


});