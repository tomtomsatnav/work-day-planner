function updateCurrentTime() {
    $('#currentDay').text(dayjs().format('dddd, D MMMM YYYY, h:mm:ss A'));
}
updateCurrentTime();
setInterval(updateCurrentTime, 1000);
var currentHourInt = parseInt(dayjs().format('h'));
var inputBox = $('.input');
inputBox.attr("contenteditable", "true");
var j = 0;

for (var i = 9; i <= 18; i++) {
    var key = "input_" + i;
        var savedInput = localStorage.getItem(key);
        if (savedInput !== null) {
            inputBox.eq(j).text(savedInput);
        }
    if (i < currentHourInt) {
        inputBox.eq(j).css("background-color", "grey");
        j++
    } else if (i === currentHourInt) {
        inputBox.eq(j).css("background-color", "green");
        j++
    } else {
        inputBox.eq(j).css("background-color", "red");
        j++
    }
}

$('.saveImage').click(function() {
    inputBox.each(function(index) {
        var key = "input_" + (index + 9);
        var value = $(this).text();
        localStorage.setItem(key, value);
    });
});
