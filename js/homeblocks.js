var app = app || {};

app.homeblocks = (function(window, undefined) {

    var init, homeBlocks, updateBlocks,
        _homeBlockContainer, _titleBlock, _articleBlock, _projectBlock;

    init = function() {
        homeBlocks();
    };

    homeBlocks = function() {
        // Find blocks
        _titleBlock = document.getElementById('home-block__title');
        _articleBlock = document.getElementById('home-block__article');
        _projectBlock = document.getElementById('home-block__project');
        _homeBlockContainer = document.getElementById('home-blocks');

        // Block clicks
        _articleBlock.addEventListener('click', function() {
            updateBlocks(this, 'article');
        });
        _projectBlock.addEventListener('click', function() {
            updateBlocks(this, 'project');
        });

        // Prevent bubbling up of click event home-block__navigation__link
        [].forEach.call( document.querySelectorAll('.js-home-block__navigation__link'), function(el) {
            el.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });
    };

    updateBlocks = function(_this, _blocktype) {
        // Toggle active class
        _this.classList.toggle('home-block--active');

        // Specific actions
        if(_blocktype === 'article') {
            _projectBlock.classList.remove('home-block--active');
            _homeBlockContainer.classList.toggle('home-blocks--article-active');
            _homeBlockContainer.classList.remove('home-blocks--project-active');
        } else {
            _articleBlock.classList.remove('home-block--active');
             _homeBlockContainer.classList.toggle('home-blocks--project-active');
            _homeBlockContainer.classList.remove('home-blocks--article-active');
        }
    };

    return {
        init: init
    };

}(window));
