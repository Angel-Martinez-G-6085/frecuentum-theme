function getSliders() {
    let slider = $(".slider-item");
    let index = 0;
    for (let i = 0; i < slider.length; i++) {
        const element = slider[i];
        index = i;
        if($(element).attr("data-show") == 1) {
            return {
                slider,
                index,
            };
        }
    }
}

function nextSlider() {
    let {slider, index} = getSliders();
    if(index == slider.length - 1) {
        $(slider[0]).attr("data-show", "1");
        $(slider[index]).attr("data-show", "0");
    }
    $(slider[index + 1]).attr("data-show", "1");
    $(slider[index]).attr("data-show", "0");
}

setInterval(nextSlider,6000);