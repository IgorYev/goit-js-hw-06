const listWithLi = document.querySelectorAll('ul#categories li.item');

console.log('Number of categories:', listWithLi.length);
listWithLi.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const liCount = category.querySelectorAll('li').length;

    console.log('Category:', categoryName);
    console.log('Elements:', liCount)
});




