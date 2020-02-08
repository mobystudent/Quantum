$(() => {
    $(() => {
        btnsSortHandler();
        btnsViewHandler();
        subMenu();
        hideFilters();
        modalSignIn();
        filtersMobile();
        accordion();
    });

    function btnsSortHandler() {
        $(".sort__item").click((e) => {
            e.preventDefault();
            e.stopPropagation();
            const { target: btnSort = '' } = e;

            $(".sort__item").removeClass("sort__item--active")
            $(btnSort).addClass("sort__item--active");
        });
    }

    function btnsViewHandler() {
        $(".view__btn").click((e) => {
            e.preventDefault();
            e.stopPropagation();
            const { target: btnView = '' } = e,
                button = ($(btnView)[0].tagName == 'A') ? $(btnView) : $(btnView).parent();

            if(button.siblings().hasClass('view__btn--active')) {
                button.siblings().removeClass("view__btn--active");
                button.addClass("view__btn--active");
            }
        });
    }

    function accordion() {
        $(".filters__title").click((e) => {
            const { target: btnAccord = '' } = e;

            $(btnAccord).toggleClass("filters__title--active");
            $(btnAccord).next().slideToggle(500);
        });
    };

    function subMenu() {
        $("#btn-cat, #btn-menu, .btn--info, #btn-sub").click((e) => {
            e.preventDefault();
            e.stopPropagation();

            const { target: btnMenu = '' } = e,
                button = ($(btnMenu)[0].tagName == 'A') ? $(btnMenu) : $(btnMenu).parent();
            button.next().toggle();
        });
    }

    function hideFilters() {
        $(".filters__item").map((i, item) => {
            const checkbox = $(item).find(".checkbox"),
                lenCheckbox = checkbox.length;

            if(!checkbox) return;

            $(checkbox).map((j) => {
                if(j > 7)
                    $(checkbox).eq(j).addClass("display--none");
            });

            if(lenCheckbox < 9)
                $(item).find(".show").hide();
        });

        $(".show").click((e) => {
            e.preventDefault();
            e.stopPropagation();

            const { target: btnMore = '' } = e,
                checkbox = $(btnMore).parent().find(".checkbox");

            $(checkbox).map((i, item) => {
                if($(item).hasClass("display--none"))
                    $(item).removeClass("display--none");
            });

            $(btnMore).hide();
        });
    };

    function modalSignIn() {
        $("#modal-sign-in").click((e) => {
            e.preventDefault();
            e.stopPropagation();

            $(".modal--sign-in").addClass("modal--show-top");
            $(".background--modal").fadeIn();
        });

        $(".modal__close").click((e) => {
            const { target: btnClose = '' } = e;
            $(btnClose).parent().removeClass("modal--show-top");
            $(".background--modal").fadeOut();
        });
    };

    function filtersMobile() {
        $("#modal-filters").click((e) => {
            e.preventDefault();
            e.stopPropagation();

            $(".filters").addClass("filters--show-left");
            $(".background--modal").fadeIn();
        });

        $(".close").click((e) => {
            const { target: btnClose = '' } = e;

            $(btnClose).parent().removeClass("filters--show-left");
            $(".background--modal").fadeOut();
        });

        $(window).resize(() => {
            if($(this).width() > 720)
                $(".background--modal").fadeOut();
        });
    };

    $(document).click((e) => {
        const { target: btnClose = '' } = e;

        console.log(btnClose);
    });
});

//# sourceMappingURL=main.js.map
