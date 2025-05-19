function initPopover() {
    const $form = document.querySelector(".contact-form");
    const $alertPopover = document.querySelector('[popover]');

    if ($form) {
      $form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        if ($alertPopover && $alertPopover.showPopover) {
          $alertPopover.showPopover();
  
          setTimeout(() => {$alertPopover.hidePopover()}, 2500);
        }
  
        $form.reset();
      });
    }


}

export default initPopover;