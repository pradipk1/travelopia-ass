
function handleShowMore() {
   
    var dotSpan = document.getElementById("dot-span");
    var p2 = document.getElementById("place-desc-p2");
    var showMoreSpan = document.getElementById("more-desc-span");
    var showMoreBtn = document.getElementById("show-more-btn");
    
    if(dotSpan.style.display==='none') {
        dotSpan.style.display='inline';
        showMoreSpan.style.display='none';
        p2.style.display='none';
        showMoreBtn.innerHTML = '<span style="margin-right: 5px;">Show More</span><img src="./Images/bigdownarrow.png" alt="bigdownarrow" height="20px">';
    } else {
        dotSpan.style.display='none';
        showMoreSpan.style.display='inline';
        p2.style.display='block';
        showMoreBtn.innerHTML = '<span style="margin-right: 5px;">Show Less</span><img src="./Images/biguparrow.png" alt="bigdownarrow" height="20px">';
    }
}