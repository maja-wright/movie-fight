const createAutoComplete = ({root, renderOption, onOptionSelect, inputValue, fetchData}) => {
    root.innerHTML = `
        <label><b>Search</b></label>
        <input class="input" />
        <div class="dropdown">
            <div class="dropdown-menu">
                <div class="dropdown-content results"></div>
            </div>
        </div>
    `;

    const input = root.querySelector('input');
    const dropdown = root.querySelector('.dropdown');
    const resultsWrapper = root.querySelector('.results');

    const onInput = async event => {
        const items = await fetchData(event.target.value);

        if (!items.length){
            dropdown.classList.remove('is-active');
            return;
        }
        // if there is no movies, we need to make sure to close the dropdown, so we are returning and not going anywhere further away

        resultsWrapper.innerHTML='';
        dropdown.classList.add('is-active');
        for (let item of items) {
            const option = document.createElement('a')
            option.classList.add('dropdown-item');
            option.innerHTML = renderOption(item);
            option.addEventListener('click', () => {
                dropdown.classList.remove('is-active');
                input.value = inputValue(item);
                onOptionSelect(item);
            });
            resultsWrapper.appendChild(option);
            // when user clicks on the movie the dropdown closes and the input is updated with the movie title
        }
    };
    input.addEventListener('input', debounce(onInput, 500));

    // CLOSING DROPDOWN MENU BY CLICKING ANYWHERE, BUT NOT ON THE DROPDOWN MENU
    document.addEventListener('click', event => {
        if (!root.contains(event.target)){
            dropdown.classList.remove('is-active');
        }
    });
};