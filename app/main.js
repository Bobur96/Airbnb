function asosiySahifa(container, callback) {
    container.innerHTML = ''
    container.innerHTML += `
    <div class="nav">
        <div class="left">
        <a href="index.html"><img src="icons/airbnb1.png" alt=""></a>
        <h3>airbnb</h3>
        </div>
        <div class="medium">
            <div class="search-btn">
                <p>Start your search</p>
                <img src="icons/search2.png" alt="" class="search">
            </div>
        </div>
        <div class="right">
            <p><a href="">Become a host</a></p>
            <img src="icons/globe (1).png" alt="" class="globe">
            <div class="user-menu">
                <img src="icons/menu.png" class="menu">
                <img src="icons/user.png" class="user">
            </div>
        </div>
    </div>

    <div class="full-search">
        <div class="input-page">
            <img src="icons/magnifying-glass.png" alt="">
            <input type="text" placeholder="Where are you going?">
            <img src="icons/close.png" alt="" class="i">
        </div>
        <div class="right">
            <p>Cancel</p>
        </div>
    </div>

    <div class="nav-bottom">
        <div>
            <img src="icons/magnifying-glass1.png" alt="">
            <p>Explore</p>
        </div>
        <div>
            <img src="icons/heart.png" alt="">
            <p>Saved</p>
        </div>
        <div>
            <img src="icons/user1.png" alt="">
            <p>Log in</p>
        </div>
    </div>

    <div class="main">
        <div class="move-page">
            <h3>Explore all 300+ stays</h3>
            <div class="pages">
                
            </div>
        </div>

        <div class="map">
            <img src="images/map.PNG" alt="">
        </div>
    </div>

    <div class="footerA">
        <div class="content">
            <div class="left">
                <p style="text-align: center;">© 2020 Airbnb, Inc. All rights reserved Privacy·Terms·Sitemap</p>
            </div>
            <div class="right">
                <div class="usd">
                    <img src="icons/globe (1).png" alt="">
                    <p><a href="">English (US)</a></p>
                    <p><a href="">$ USD</a></p>
                </div>
                <div class="icons">
                    <img src="icons/facebook-app-symbol.png" alt="">
                    <img src="icons/twitter.png" alt="">
                    <img src="icons/instagram-symbol.png" alt="">
                </div>
            </div>
        </div>
    </div>
    `

    callback()
}

function asosiySahifaFuncs() {

    const banners = document.querySelector('.pages')
    // let id = 0
    function asosiySahifaPages(selector, callback) {
        selector.innerHTML = ''
        products.forEach(item => {
            selector.innerHTML += `
            <div class="page">
            <a href="index.html"><img src="${item.src}" alt="" class="house"></a>
                <div class="about">
                    <div class="words">
                        <div>
                            <p>Entire cottage in Bhimtal</p>
                            <h4>Orange County Cottage</h4>
                            <hr>
                            <p>8 guests 2·bedrooms 3·beds 2·baths</p>
                        </div>
                        <h5>✶4.88(34)</h5>
                    </div>
                    <div class="prices">
                        <img src="icons/heart (2).png" alt="">
                        <h4>$${item.price} / night</h4>
                    </div>
                </div>
            </div>
            `
            // id += 1;
        })

    }
    asosiySahifaPages(banners)

    
    const clear = document.querySelector('.full-search .i');
    const full_input = document.querySelector('.full-search .input-page input');
    const cancel = document.querySelector('.full-search .right')

    full_input.onclick = ()=> {
        cancel.style.display = 'block'
        clear.style.display = 'block' 
    }

    clear.onclick = ()=> {
        full_input.value = ''
    }

    cancel.onclick = ()=> {
        cancel.style.display = 'none'
        clear.style.display = 'none'
        full_input.value = ''
    }
}



