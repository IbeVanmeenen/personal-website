var app = app || {};

app.homeblocks = (function(window, undefined) {

    var init, homeBlocks, updateBlocks,
        _homeBlockContainer, _titleBlock, _articleBlock, _projectBlock;

    init = function() {
        homeBlocks();
    };

    homeBlocks = function() {
        // Find blocks
        _block1 = document.getElementById('home-block--one');
        _block2 = document.getElementById('home-block--two');
        _block3 = document.getElementById('home-block--three');
        _blockContainer = document.getElementById('home-blocks');

        // Block clicks
        _block1.addEventListener('click', function() {
            updateBlocks(this, 1);
        });
        _block2.addEventListener('click', function() {
            updateBlocks(this, 2);
        });
        _block3.addEventListener('click', function() {
            updateBlocks(this, 3);
        });

        // Prevent bubbling up of click event home-block__navigation__link
        [].forEach.call( document.querySelectorAll('.js-home-block__navigation__link'), function(el) {
            el.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });
    };

    updateBlocks = function(_this, _block) {
        // Toggle active class
        if(_block !== 1) {
            _this.classList.toggle('home-block--active');
        }

        // Specific actions
        if(_block === 2) {
            _block3.classList.remove('home-block--active');
            _blockContainer.classList.toggle('home-blocks--two-active');
            _blockContainer.classList.remove('home-blocks--three-active');
        } else if(_block === 3 ) {
            _block2.classList.remove('home-block--active');
            _blockContainer.classList.toggle('home-blocks--three-active');
            _blockContainer.classList.remove('home-blocks--two-active');
        } else {
            _block2.classList.remove('home-block--active');
            _block3.classList.remove('home-block--active');
            _blockContainer.classList.remove('home-blocks--two-active');
            _blockContainer.classList.remove('home-blocks--three-active');
        }
    };

    return {
        init: init
    };

}(window));
