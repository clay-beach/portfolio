$(document).ready(function () {
    'use strict';
    $(function () {
        $("#sideMenu").hide();
        $("#toggle").click(function () {
            $(this).toggleClass("active");
            $("#sideMenu").slideToggle(500);
        });
    });
    
    $(function () {
        $(".menu-item").click(function () {
            $("#sideMenu").hide();
        });
    });
});
