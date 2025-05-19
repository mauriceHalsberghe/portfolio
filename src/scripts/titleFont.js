function titleFont() {
    const $title = document.querySelector('.hero__title--name');
    if ($title) {
        $title.innerHTML = $title.textContent
            .split(' ')
            .map(word => {
                const letters = word
                    .split('')
                    .map(letter => `<span class="char">${letter}</span>`)
                    .join('');
                return `<div class="word">${letters}</div>`;
            })
            .join(' ');
    }
}

export default titleFont;
