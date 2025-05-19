function initModals() {
    const $dialogButtons = document.querySelectorAll("[data-target-modal]");

    if ($dialogButtons) {
        $dialogButtons.forEach($dialogButton => {
            $dialogButton.addEventListener('click', () => {
                const dialogName = $dialogButton.getAttribute('data-target-modal');
                const $dialog = document.querySelector(`[data-modal=${dialogName}]`);

                $dialog.showModal();

                const $closeButton = $dialog.querySelector('[data-close]')
                $closeButton.addEventListener('click', () => $dialog.close())
            })
        })
    }


}

export default initModals;