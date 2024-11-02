
function Header() {
    return(
        <header>
            <div className="logo">
                <img src="icon-pizza.png" alt="logo-pizza" />
                <div className="logo-descr">
                    <h1>Pizza-click</h1>
                    <p>Лучшая пицца во вселенной</p> 
                </div>
            </div>
            <div className="cart-button">
                <span className="cart-button-price">520p</span>
                <div>
                    <img src="shopping-cart.png" alt="" />
                    <span>3</span>
                </div>
                
            </div>
            
        </header>
    )
}

export default Header;