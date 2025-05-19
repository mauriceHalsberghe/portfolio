function initCarousel() {
    let $currentSlide = document.querySelector('.active');

    if ($currentSlide) {
        const $nextButton = document.querySelector('.next');
        const $previousButton = document.querySelector('.previous');

        if (!$nextButton || !$previousButton) {
            return;
        }

        const updateButtonVisibility = () => {
            const currentId = parseInt($currentSlide.id.replace('slide', ''), 10);
            const $nextSlide = document.getElementById(`slide${currentId + 1}`);
            const $previousSlide = document.getElementById(`slide${currentId - 1}`);

            if ($nextSlide) {
                $nextButton.classList.remove('hidden');
            } else {
                $nextButton.classList.add('hidden');
            }

            if ($previousSlide) {
                $previousButton.classList.remove('hidden');
            } else {
                $previousButton.classList.add('hidden');
            }
        };

        updateButtonVisibility();

        $nextButton.addEventListener('click', () => {
            const currentId = parseInt($currentSlide.id.replace('slide', ''), 10);
            const nextId = currentId + 1;

            const $nextSlide = document.getElementById(`slide${nextId}`);
            if ($nextSlide) {
                $currentSlide.classList.remove('active');
                $nextSlide.classList.add('active');
                $currentSlide = $nextSlide;
                updateButtonVisibility();
            }
        });

        $previousButton.addEventListener('click', () => {
            const currentId = parseInt($currentSlide.id.replace('slide', ''), 10);
            const previousId = currentId - 1;

            const $previousSlide = document.getElementById(`slide${previousId}`);
            if ($previousSlide) {
                $currentSlide.classList.remove('active');
                $previousSlide.classList.add('active');
                $currentSlide = $previousSlide;
                updateButtonVisibility(); 
            }
        });
    }
}

export default initCarousel;