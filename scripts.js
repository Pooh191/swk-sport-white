document.addEventListener('DOMContentLoaded', function () {
    console.log("Website loaded successfully");
});

document.addEventListener('DOMContentLoaded', function () {
    var alertCloseButtons = document.querySelectorAll('.btn-close');

    alertCloseButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var alert = this.closest('.alert');
            alert.classList.remove('show');
            setTimeout(function () {
                alert.style.display = 'none';
            }, 300);
        });
    });
});

    function toggleMenu(menuId) {
        var menu = document.getElementById(menuId);
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    }

