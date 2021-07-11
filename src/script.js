import $ from 'js';

export function script() {
    $(document).ready(function () {

        $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
        });
    });
}