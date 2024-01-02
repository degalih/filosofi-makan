class HeadBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
            * {
                padding: 0;
                margin: 0;
                text-decoration: none;
                list-style: none;
                box-sizing: border-box;
            }
            
            body {
                font-family: montserrat;
            }
            
            nav {
                background: #2d4059;
                height: 80px;
                width: 100%;
            }
            
            .logo {
                float: left;
                width: 150px;
                margin: 10px 5px 0 30px;
            }
            
            nav ul {
                float: right;
                margin-right: 20px;
            }
            nav ul li {
                display: inline-block;
                line-height: 80px;
                margin: 0 5px;
            }
            
            nav ul li a {
                color: #e5e5e5;
                font-size: 17px; 
                padding: 7px 13px;
                border-radius: 3px;
                text-transform: uppercase;
            
            }
            
            a:hover {
                background: #ea5455;
                transition: .5s;
            }
            
            .open-menu {
                display: none;
                float: right;
                width: 35px;
                margin: 30px 20px 30px;
                cursor: pointer;
            }
            
            #check {
                display: none;
            }
            
            @media (max-width: 952px) {
                nav ul li a {
                    font-size: 16px; 
                }
            }
            
            @media (max-width: 550px) {
                .open-menu {
                    display: block;
                }
            
                ul {
                    position: fixed;
                    width: 100%;
                    height: 100vh;
                    background: #ea5455;
                    top: 80px;
                    left: -100%;
                    text-align: center;
                    transition: all .5s;
                }
            
                nav ul li {
                    display: block;
                    margin: 50px 0;
                    line-height: 30px;
                }
            
                nav ul li a {
                    font-size: 20px;
                }
            
                a:hover {
                    background: none;
                    color: #2d4059;
                }
            
                #check:checked ~ ul{
                    left: 0;
                }
            }
        </style>
            <nav>
                    <input type="checkbox" id="check">
                    <label for="check"><img class="open-menu" src="src/assets/img/open-menu.png" alt="open-menu"></label>
                    <img class="logo" src="src/assets/img/logo-banner.png" alt="Logo Filosofi Makan">
                    <ul>
                        <li><a href="/index.html">BERANDA</a></li>
                        <li><a href="/tentang.html">TENTANG</a></li>
                        <li><a href="/kontak.html">KONTAK</a></li>
                    </ul>
            </nav>`;
    }
}

customElements.define("head-bar", HeadBar);