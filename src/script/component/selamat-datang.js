class SelamatDatang extends HTMLElement {

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
            body,html {
                height: 100%;
                margin: 0;
                padding: 0;
            }
            
            .banner {
                position: relative;
                height: 500px;
                overflow: hidden;
                background: url(https://linkpicture.com/q/banner-selamat-datang.jpg) no-repeat center;
                background-size: cover;
                z-index: -100;
            }
            
            .container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                overflow: hidden;
                text-align: center;
                color: #e5e5e5;
                font-weight: 700;
                text-transform: uppercase;
            }
            
            .container h1 {
                font-size: 72;
                letter-spacing: 0.2em;
            }
            
            @media (max-width: 550px) {
                .banner {
                    max-width: 100%;

            }
            
            
            .container {
                overflow: hidden;
                font-weight: 1000;
            }
            
                .container h1 {
                    font-size: 50;
                }
            
            }
            
            @media (max-width: 350px) {
                .banner {
                    max-width: 100%;
                }
            
                .container h1 {
                    font-size: 30;
                }
            
                .deskripsi {
                    font-size: 17;
                }
            
            }
            
            @media (max-width: 330px) {
                .container h1 {
                    font-size: 30;
                }
                
                .deskripsi {
                    font-size: 15;
                }
            
            }
       </style>
        <div class="banner">
            <div class="container">
                <h1><span>Selamat Datang</span></h1>
                <span class="deskripsi">Temukan makanan dari segala penjuru dunia disini!</span>
            </div>
        </div>
    `;
    }
}

customElements.define("selamat-datang", SelamatDatang);